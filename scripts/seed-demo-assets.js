#!/usr/bin/env node
/**
 * Demo-data seeder for asset pages (demo.cleverly.works).
 *
 * Fills the widgets on /dashboard/assets/view?id=<asset> that are empty on a
 * bare asset record:
 *
 *   - Information tile ........ condition, make/model/serial, initial cost,
 *                               annual budget (estimatedAnnualMaintenance),
 *                               residual value, in-service / end-of-life dates
 *                               (drives "Useful time remaining")
 *   - Main photo .............. Media(category = assetMainPhoto) + Media_Entity
 *   - Work Orders ............. Job rows linked through Asset_Entity, spread
 *                               over the last 12 months plus one upcoming job
 *   - Maintenance costs / TCO . Job.customerFinances.amountInfo.total per month
 *   - Versus budget ........... spend / estimatedAnnualMaintenance
 *   - Invoice ID column ....... Invoice + AccountEntry rows for invoiced jobs
 *                               (also feeds the location budget "spend" tiles)
 *   - Location budgets ........ one Budget row per location for the current
 *                               financial year
 *
 * Runs from a local machine straight against Hasura with the admin secret,
 * the same way scripts/*.js in the hasura repo do. Nothing is deployed.
 * Everything it writes is tagged (Job.source = 'demoSeed', meta.demoSeed = true)
 * so it can be removed again with --cleanup.
 *
 * Usage:
 *   HASURA_URL=https://api-demo.cleverly.works/v1/graphql \
 *   HASURA_ADMIN_SECRET=<secret> \
 *     node seed-demo-assets.js                       # dry run: prints the plan
 *     node seed-demo-assets.js --execute             # write it
 *     node seed-demo-assets.js --execute --asset-ids=12,13,14
 *     node seed-demo-assets.js --execute --location-id=57
 *     node seed-demo-assets.js --execute --customer-id=3 --limit=50
 *     node seed-demo-assets.js --execute --photos-dir=./asset-photos
 *     node seed-demo-assets.js --cleanup --execute   # remove everything seeded
 *
 * Options:
 *   --asset-ids=1,2,3       only these assets
 *   --location-id=N         all assets at a location
 *   --customer-id=N         all assets of a customer account
 *   --limit=N               max assets to touch (default 25)
 *   --jobs-per-asset=N      historic work orders per asset (default 8)
 *   --photos-dir=PATH       folder of .jpg/.png files used as main photos.
 *                           A file named after the asset category keyword
 *                           (boiler.jpg, lift.jpg, hvac.jpg, fire.jpg, ...) is
 *                           preferred, otherwise files are used round-robin.
 *                           Without it photos are fetched from loremflickr.com.
 *   --replace-photos        replace an existing main photo (default: keep it)
 *   --no-photos / --no-jobs / --no-budgets / --no-invoices
 *   --keep-meta             do not overwrite assetAdditional values already set
 *
 * Env:
 *   HASURA_URL              GraphQL endpoint (…/v1/graphql)
 *   HASURA_ADMIN_SECRET     x-hasura-admin-secret
 *   IMAGE_PROCESS_URL       defaults to https://aws-demo.cleverly.works/image/process
 *                           (the endpoint the portal itself uploads images to)
 *
 * Requires Node 18+ (global fetch / FormData / Blob).
 */

'use strict';

const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// CLI / env
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const opt = (name, def) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : def;
};

const EXECUTE = flag('execute');
const CLEANUP = flag('cleanup');
const HASURA_URL = process.env.HASURA_URL;
const ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET;
const IMAGE_PROCESS_URL =
  process.env.IMAGE_PROCESS_URL || 'https://aws-demo.cleverly.works/image/process';

const ASSET_IDS = opt('asset-ids', '')
  .split(',')
  .map((s) => parseInt(s, 10))
  .filter(Number.isFinite);
const LOCATION_ID = parseInt(opt('location-id', ''), 10) || null;
const CUSTOMER_ID = parseInt(opt('customer-id', ''), 10) || null;
const LIMIT = parseInt(opt('limit', '25'), 10);
const JOBS_PER_ASSET = parseInt(opt('jobs-per-asset', '8'), 10);
const PHOTOS_DIR = opt('photos-dir', null);
const REPLACE_PHOTOS = flag('replace-photos');
const WITH_PHOTOS = !flag('no-photos');
const WITH_JOBS = !flag('no-jobs');
const WITH_BUDGETS = !flag('no-budgets');
const WITH_INVOICES = !flag('no-invoices');
const KEEP_META = flag('keep-meta');

const SEED_TAG = 'demoSeed';
const GBP_CURRENCY_ID = 1;

if (!HASURA_URL || !ADMIN_SECRET) {
  console.error('HASURA_URL and HASURA_ADMIN_SECRET are required.');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// GraphQL helper
// ---------------------------------------------------------------------------

async function gql(query, variables = {}) {
  const res = await fetch(HASURA_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-hasura-admin-secret': ADMIN_SECRET,
    },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`Hasura HTTP ${res.status}: ${await res.text()}`);
  const json = await res.json();
  if (json.errors) throw new Error(`Hasura: ${JSON.stringify(json.errors)}`);
  return json.data;
}

// ---------------------------------------------------------------------------
// Deterministic pseudo-random per asset so re-runs produce the same figures
// ---------------------------------------------------------------------------

function rng(seed) {
  let s = (seed * 2654435761) >>> 0 || 1;
  return () => {
    s ^= s << 13;
    s >>>= 0;
    s ^= s >>> 17;
    s ^= s << 5;
    s >>>= 0;
    return s / 4294967296;
  };
}
const pick = (r, arr) => arr[Math.floor(r() * arr.length)];
const between = (r, lo, hi, step = 1) => lo + Math.round((r() * (hi - lo)) / step) * step;
const money = (n) => Math.round(n * 100) / 100;

// ---------------------------------------------------------------------------
// Asset profiles by category keyword
// ---------------------------------------------------------------------------

const PROFILES = [
  {
    match: /boiler|heating|calorifier|water heater/i,
    keyword: 'boiler',
    makes: [['Worcester Bosch', 'Greenstar 8000 Life'], ['Vaillant', 'ecoTEC plus 637'], ['Ideal', 'Evomax 2 60kW'], ['Baxi', 'Assure 40 Combi']],
    cost: [4500, 18000, 250],
    annual: [900, 3200, 50],
    life: 15,
    ppm: ['Annual gas safety inspection', 'Boiler service and combustion test', 'Six-monthly heating system check'],
    reactive: ['No heating reported – ignition fault', 'Pressure loss – expansion vessel recharge', 'Leaking pump valve replaced', 'Thermostat replacement', 'Flue seal repair'],
    service: /gas|heat|mech|plumb/i,
  },
  {
    match: /lift|elevator|escalator|hoist/i,
    keyword: 'elevator',
    makes: [['Otis', 'Gen2 Premier'], ['KONE', 'MonoSpace 500'], ['Schindler', '3300'], ['Stannah', 'Maxilift 630kg']],
    cost: [38000, 120000, 1000],
    annual: [2400, 9000, 100],
    life: 25,
    ppm: ['Monthly lift maintenance visit', 'LOLER thorough examination', 'Quarterly lift service'],
    reactive: ['Lift stuck between floors – passenger release', 'Door sensor fault', 'Car lighting failure', 'Levelling fault on ground floor', 'Emergency phone line fault'],
    service: /lift|elevat/i,
  },
  {
    match: /hvac|air con|ahu|chiller|vrf|fcu|fan coil|ventilation|split/i,
    keyword: 'hvac',
    makes: [['Daikin', 'VRV IV+ RXYQ12'], ['Mitsubishi Electric', 'City Multi PURY-P'], ['Carrier', 'AquaSnap 30RB'], ['Trane', 'CGAM 40']],
    cost: [9000, 65000, 500],
    annual: [1500, 6500, 50],
    life: 15,
    ppm: ['Quarterly HVAC PPM visit', 'F-Gas leak check', 'Filter change and coil clean', 'Pre-summer cooling check'],
    reactive: ['No cooling to second floor', 'Condensate pump blocked', 'Compressor tripping on high pressure', 'Noisy fan bearing replaced', 'Refrigerant top-up after leak repair'],
    service: /hvac|air|mech|cool/i,
  },
  {
    match: /fire|alarm|sprinkler|extinguisher|emergency light|smoke/i,
    keyword: 'fire-alarm',
    makes: [['Kentec', 'Syncro AS 4-loop'], ['Advanced', 'MxPro 5'], ['Gent', 'Vigilon Compact'], ['Apollo', 'XP95 loop']],
    cost: [3500, 24000, 250],
    annual: [600, 2800, 50],
    life: 12,
    ppm: ['Six-monthly fire alarm service (BS 5839)', 'Weekly fire alarm test log review', 'Emergency lighting 3-hour drain test', 'Sprinkler system quarterly check'],
    reactive: ['Zone 3 fault on panel', 'Faulty smoke detector replaced', 'Sounder not activating', 'Battery replacement at panel', 'Break-glass call point damaged'],
    service: /fire|alarm|life safety|electr/i,
  },
  {
    match: /generator|ups|genset|standby/i,
    keyword: 'generator',
    makes: [['Cummins', 'C150 D5'], ['FG Wilson', 'P110-3'], ['Caterpillar', 'DE110E2'], ['Pramac', 'GSW110']],
    cost: [18000, 70000, 500],
    annual: [1200, 4500, 50],
    life: 20,
    ppm: ['Monthly generator load test', 'Annual generator service', 'Fuel polishing and tank inspection'],
    reactive: ['Failed to start on mains failure', 'Battery charger fault', 'Coolant leak repair', 'Fuel level sensor replacement'],
    service: /electr|generat|power/i,
  },
  {
    match: /pump|booster|drain|sump|water/i,
    keyword: 'water-pump',
    makes: [['Grundfos', 'Hydro MPC-E 3 CRE'], ['Wilo', 'Stratos GIGA'], ['Xylem Lowara', 'e-SV'], ['Armstrong', 'Design Envelope 4300']],
    cost: [2500, 16000, 250],
    annual: [400, 2200, 50],
    life: 15,
    ppm: ['Quarterly pump set inspection', 'Annual water hygiene and tank clean', 'Legionella risk assessment review'],
    reactive: ['Low water pressure on upper floors', 'Pump seal leak', 'Float switch failure in sump', 'Pressure vessel replacement'],
    service: /plumb|water|mech/i,
  },
  {
    match: /meter|electric|switchgear|distribution|db |panel|lighting/i,
    keyword: 'electrical-panel',
    makes: [['Schneider Electric', 'Acti9 Isobar'], ['Landis+Gyr', 'E470 smart meter'], ['ABB', 'Protecta Plus'], ['Hager', 'Invicta 3']],
    cost: [1200, 9500, 100],
    annual: [300, 1800, 50],
    life: 20,
    ppm: ['Annual thermographic survey', 'EICR periodic inspection', 'Quarterly meter reading and check', 'Emergency lighting monthly flick test'],
    reactive: ['Tripping RCD on ground floor circuit', 'Meter display fault', 'Loose neutral on distribution board', 'Replace failed contactor'],
    service: /electr/i,
  },
  {
    match: /roof|door|gate|barrier|shutter|window|fabric/i,
    keyword: 'building',
    makes: [['Hörmann', 'SPU F42'], ['Record', 'STA 20 automatic door'], ['CAME', 'Gard 4 barrier'], ['Bauder', 'Total Roof System']],
    cost: [2000, 30000, 250],
    annual: [350, 2500, 50],
    life: 20,
    ppm: ['Six-monthly automatic door service', 'Annual roof inspection and gutter clear', 'Barrier PPM visit'],
    reactive: ['Door not closing – safety sensor', 'Roof leak above reception', 'Barrier arm damaged', 'Shutter motor replacement'],
    service: /fabric|build|door|roof|handy/i,
  },
  {
    match: /.*/,
    keyword: 'industrial-equipment',
    makes: [['Siemens', 'Series 7'], ['Honeywell', 'Spyder'], ['Bosch', 'Professional'], ['Johnson Controls', 'Metasys']],
    cost: [1500, 25000, 250],
    annual: [400, 3000, 50],
    life: 15,
    ppm: ['Quarterly planned maintenance visit', 'Annual service and inspection', 'Six-monthly condition check'],
    reactive: ['Fault reported by site team', 'Intermittent operation – component replaced', 'Damage repair following inspection', 'Unit not powering on'],
    service: /./,
  },
];

const profileFor = (asset) => {
  const hay = `${asset.category?.name || ''} ${asset.name || ''} ${asset.description || ''}`;
  return PROFILES.find((p) => p.match.test(hay));
};

const CONDITIONS = ['excellent', 'good', 'good', 'good', 'fair', 'fair', 'poor'];

// ---------------------------------------------------------------------------
// Queries
// ---------------------------------------------------------------------------

const Q_ASSETS = `
  query SeedAssets($where: Asset_bool_exp!, $limit: Int!) {
    assets: Asset(where: $where, limit: $limit, order_by: { id: asc }) {
      id
      name
      description
      status
      condition
      meta
      createdAt
      accountId
      locationId
      sublocationId
      categoryId
      category: Category { id name }
      customer: Account {
        id
        name
        managerId
        admins: Admins(where: { status: { _eq: "active" } }) { adminId }
      }
      location: Location { id name }
      mainPhoto: Media(where: { Medium: { category: { _eq: "assetMainPhoto" } } }) {
        id
        mediaId
      }
      jobs: Asset_Entity_aggregate(where: { entity: { _eq: "Job" } }) {
        aggregate { count }
      }
    }
  }
`;

const Q_CONTEXT = `
  query SeedContext($adminId: Int!, $locationId: Int!, $customerId: Int!) {
    adminUsers: Account_User(
      where: {
        accountId: { _eq: $adminId }
        status: { _eq: "active" }
        role: { _in: ["owner", "manager"] }
      }
      order_by: { id: asc }
      limit: 1
    ) { userId }
    customerUsers: Account_User(
      where: { accountId: { _eq: $customerId }, status: { _eq: "active" } }
      order_by: { id: asc }
      limit: 1
    ) { userId }
    locationJobs: Job(
      where: { adminId: { _eq: $adminId }, locationId: { _eq: $locationId } }
      order_by: { createdAt: desc }
      limit: 1
    ) { serviceId slaId supplierId managerId customerUserId costCategoryId }
    anyJobs: Job(
      where: { adminId: { _eq: $adminId } }
      order_by: { createdAt: desc }
      limit: 1
    ) { serviceId slaId supplierId managerId costCategoryId }
    services: Service(where: { status: { _eq: "active" } }, order_by: { name: asc }, limit: 200) { id name }
    suppliers: Account(
      where: { type: { _eq: "supplier" }, status: { _eq: "active" }, Admins: { adminId: { _eq: $adminId } } }
      order_by: { id: asc }
      limit: 5
    ) { id name }
    slas: SLA(where: { status: { _eq: "active" }, adminId: { _eq: $adminId } }, order_by: { id: asc }, limit: 5) { id name }
    costCategories: Taxonomy(
      where: { type: { _eq: "costCategory" }, status: { _eq: "active" } }
      order_by: { id: asc }
      limit: 5
    ) { id name }
    recentNumbers: Job(where: { adminId: { _eq: $adminId } }, order_by: { createdAt: desc }, limit: 300) { number }
    budgets: Budget(where: { locationId: { _eq: $locationId } }) { id startDate endDate totalAmount }
  }
`;

const M_UPDATE_ASSET = `
  mutation SeedUpdateAsset($id: Int!, $changes: Asset_set_input!) {
    update_Asset_by_pk(pk_columns: { id: $id }, _set: $changes) { id }
  }
`;

const M_INSERT_MEDIA = `
  mutation SeedInsertMedia($media: [Media_insert_input!]!) {
    insert_Media(objects: $media) { returning { id filename } }
  }
`;

const M_INSERT_MEDIA_ENTITY = `
  mutation SeedInsertMediaEntity($objects: [Media_Entity_insert_input!]!) {
    insert_Media_Entity(objects: $objects) { returning { id } }
  }
`;

const M_RESET_MAIN_PHOTO = `
  mutation SeedResetMainPhoto($entityId: Int!) {
    update_Media(
      where: {
        category: { _eq: "assetMainPhoto" }
        Media_Entities: { entity: { _eq: "Asset" }, entityId: { _eq: $entityId } }
      }
      _set: { category: null }
    ) { affected_rows }
  }
`;

const M_INSERT_JOB = `
  mutation SeedInsertJob($job: Job_insert_input!) {
    insert_Job_one(object: $job) { id number }
  }
`;

const M_INSERT_ASSET_ENTITY = `
  mutation SeedInsertAssetEntity($objects: [Asset_Entity_insert_input!]!) {
    insert_Asset_Entity(objects: $objects) { returning { id } }
  }
`;

const M_INSERT_INVOICE = `
  mutation SeedInsertInvoice($entry: AccountEntry_insert_input!, $invoice: Invoice_insert_input!) {
    insert_AccountEntry_one(object: $entry) { id }
    insert_Invoice_one(object: $invoice) { id }
  }
`;

const M_LINK_INVOICE = `
  mutation SeedLinkInvoice($jobId: Int!, $invoiceNumber: String!, $accountEntryId: Int!) {
    update_Job_by_pk(pk_columns: { id: $jobId }, _set: { invoiceNumber: $invoiceNumber }) { id }
    update_Invoice(where: { entity: { _eq: "Job" }, entityId: { _eq: $jobId } }, _set: { accountEntryId: $accountEntryId }) { affected_rows }
  }
`;

const M_INSERT_BUDGET = `
  mutation SeedInsertBudget($budgets: [Budget_insert_input!]!) {
    insert_Budget(objects: $budgets) { returning { id } }
  }
`;

// ---------------------------------------------------------------------------
// Photos
// ---------------------------------------------------------------------------

let photoFiles = null;
let photoCursor = 0;

function localPhotoFor(keyword) {
  if (!PHOTOS_DIR) return null;
  if (!photoFiles) {
    photoFiles = fs
      .readdirSync(PHOTOS_DIR)
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .sort();
    if (!photoFiles.length) throw new Error(`No images found in ${PHOTOS_DIR}`);
  }
  const named = photoFiles.find((f) => f.toLowerCase().startsWith(keyword.toLowerCase()));
  const file = named || photoFiles[photoCursor++ % photoFiles.length];
  return path.join(PHOTOS_DIR, file);
}

async function loadPhoto(asset, profile) {
  const local = localPhotoFor(profile.keyword);
  if (local) {
    return { name: path.basename(local), bytes: fs.readFileSync(local), mime: mimeOf(local) };
  }
  // Public placeholder photo matching the asset category; picsum as a fallback.
  const urls = [
    `https://loremflickr.com/1600/1200/${encodeURIComponent(profile.keyword)}?lock=${asset.id}`,
    `https://picsum.photos/seed/asset-${asset.id}/1600/1200`,
  ];
  for (const url of urls) {
    try {
      const res = await fetch(url, { redirect: 'follow' });
      if (!res.ok) continue;
      const bytes = Buffer.from(await res.arrayBuffer());
      if (bytes.length < 1000) continue;
      return { name: `${profile.keyword}-${asset.id}.jpg`, bytes, mime: 'image/jpeg' };
    } catch (e) {
      console.warn(`    photo download failed (${url}): ${e.message}`);
    }
  }
  throw new Error('could not obtain a photo; pass --photos-dir');
}

const mimeOf = (file) => (/\.png$/i.test(file) ? 'image/png' : /\.webp$/i.test(file) ? 'image/webp' : 'image/jpeg');

async function uploadPhoto(photo) {
  // Mirrors the portal's own upload: POST file + sizes to /image/process,
  // which stores the original and a 1600px "large" rendition in the media bucket.
  const form = new FormData();
  form.append('file', new Blob([photo.bytes], { type: photo.mime }), photo.name);
  form.append('sizes', JSON.stringify([{ name: 'large', width: 1600 }]));
  const res = await fetch(IMAGE_PROCESS_URL, { method: 'POST', body: form });
  if (!res.ok) throw new Error(`image/process HTTP ${res.status}: ${await res.text()}`);
  const json = await res.json();
  if (!json?.key && !json?.success) throw new Error(`image/process failed: ${JSON.stringify(json)}`);
  const large = (json.data || []).find((d) => d.name === 'large');
  return {
    filename: large?.relativePath || json.key,
    meta: { original: { relativePath: json.key }, thumbnails: json.data || null, [SEED_TAG]: true },
  };
}

// ---------------------------------------------------------------------------
// Job generation
// ---------------------------------------------------------------------------

function finances(net) {
  const vat = money(net * 0.2);
  return {
    amountInfo: {
      amount: money(net),
      vatAmount: vat,
      vatTotal: money(net + vat),
      total: money(net),
    },
    vat: { percent: 20 },
    [SEED_TAG]: true,
  };
}

function buildJobs(asset, profile, ctx, r, annualBudget) {
  const now = new Date();
  const jobs = [];
  const count = JOBS_PER_ASSET;
  // Spread historic jobs across the last 12 months, oldest first; keep the
  // total spend around 70–110% of the annual budget so "Versus budget" is
  // meaningful (a few assets go over budget on purpose).
  const overBudget = r() < 0.25;
  const targetSpend = annualBudget * (overBudget ? between(r, 1.05, 1.35, 0.01) : between(r, 0.65, 0.95, 0.01));
  const weights = Array.from({ length: count }, () => 0.5 + r());
  const weightSum = weights.reduce((a, b) => a + b, 0);

  for (let i = 0; i < count; i += 1) {
    const monthsAgo = Math.round(((count - 1 - i) / count) * 11.5) + 0.3;
    const start = new Date(now);
    start.setMonth(start.getMonth() - Math.floor(monthsAgo));
    start.setDate(between(r, 2, 26));
    start.setHours(between(r, 8, 15), 0, 0, 0);
    // Historic jobs must stay in the past (at least 3 days ago).
    const latest = now.getTime() - 3 * 86400000;
    if (start.getTime() > latest) start.setTime(latest - between(r, 0, 6) * 86400000);
    const isPpm = i % 3 !== 1; // roughly two thirds PPM, one third reactive
    const title = isPpm ? pick(r, profile.ppm) : pick(r, profile.reactive);
    const durationH = isPpm ? between(r, 1, 4) : between(r, 2, 8);
    const end = new Date(start.getTime() + durationH * 3600 * 1000);
    const ageDays = (now - start) / 86400000;

    let status;
    if (ageDays > 60) status = pick(r, ['invoiceSent', 'closed', 'closed']);
    else if (ageDays > 14) status = pick(r, ['completed', 'reportSent', 'invoiceSent']);
    else status = pick(r, ['completed', 'inProgress']);

    const net = money((targetSpend * weights[i]) / weightSum);
    const created = new Date(start.getTime() - between(r, 2, 21) * 86400000);
    const statusData = { accepted: created.toISOString() };
    if (['completed', 'reportSent', 'invoiceSent', 'closed'].includes(status)) statusData.completed = end.toISOString();
    if (['invoiceSent', 'closed'].includes(status)) statusData.invoiceSent = new Date(end.getTime() + 3 * 86400000).toISOString();
    if (status === 'closed') statusData.closed = new Date(end.getTime() + 20 * 86400000).toISOString();

    jobs.push({
      title,
      description: `${title} – ${asset.name} at ${asset.location?.name || 'site'}. ${isPpm ? 'Planned maintenance visit.' : 'Reactive call-out raised by the site team.'}`,
      type: isPpm ? 'ppm' : 'reactive',
      ppm: isPpm,
      quoted: false,
      status,
      statusData,
      createdAt: created.toISOString(),
      scheduledAt: start.toISOString(),
      timingStart: start.toISOString(),
      timingEnd: end.toISOString(),
      onSiteTimingEnd: end.toISOString(),
      pricing: 'fixed',
      timing: 'between',
      timingNormalHours: true,
      paid: status === 'closed',
      net,
      invoiced: ['invoiceSent', 'closed'].includes(status),
    });
  }

  // One upcoming PPM visit so the list is not purely historic.
  const upcoming = new Date(now.getTime() + between(r, 7, 40) * 86400000);
  upcoming.setHours(9, 0, 0, 0);
  jobs.push({
    title: pick(r, profile.ppm),
    description: `Upcoming planned maintenance visit for ${asset.name}.`,
    type: 'ppm',
    ppm: true,
    quoted: false,
    status: pick(r, ['accepted', 'offered']),
    statusData: {},
    createdAt: now.toISOString(),
    scheduledAt: upcoming.toISOString(),
    timingStart: upcoming.toISOString(),
    timingEnd: new Date(upcoming.getTime() + 2 * 3600 * 1000).toISOString(),
    pricing: 'fixed',
    timing: 'between',
    timingNormalHours: true,
    paid: false,
    net: money(annualBudget / 12),
    invoiced: false,
  });

  return jobs.map((j) => ({ ...j, ref: `${ctx.refPrefix}-${asset.id}` }));
}

function jobInput(asset, ctx, j, number) {
  const { net, invoiced, ref, ...rest } = j;
  return {
    ...rest,
    number,
    reference: ref,
    source: SEED_TAG,
    meta: { [SEED_TAG]: true },
    customerFinances: finances(net),
    supplierFinances: finances(money(net * 0.72)),
    customerId: asset.accountId,
    locationId: asset.locationId,
    sublocationId: asset.sublocationId,
    adminId: ctx.adminId,
    serviceId: ctx.serviceId,
    slaId: ctx.slaId,
    supplierId: ctx.supplierId,
    managerId: ctx.managerId,
    customerUserId: ctx.customerUserId,
    costCategoryId: ctx.costCategoryId,
    assetCategoryId: asset.categoryId,
    currencyId: GBP_CURRENCY_ID,
  };
}

// ---------------------------------------------------------------------------
// Context (admin, users, service, supplier, next job number, budgets)
// ---------------------------------------------------------------------------

const contextCache = new Map();
let nextNumber = null;

async function contextFor(asset) {
  const adminId = asset.customer?.admins?.[0]?.adminId;
  if (!adminId) throw new Error(`asset ${asset.id}: customer ${asset.accountId} has no admin account`);
  const key = `${adminId}:${asset.locationId}:${asset.accountId}`;
  if (contextCache.has(key)) return contextCache.get(key);

  const d = await gql(Q_CONTEXT, { adminId, locationId: asset.locationId, customerId: asset.accountId });
  const ref = d.locationJobs[0] || d.anyJobs[0] || {};
  const profile = profileFor(asset);
  const service =
    d.services.find((s) => profile.service.test(s.name)) || d.services[0] || null;

  if (nextNumber === null) {
    const nums = d.recentNumbers.map((j) => parseInt(j.number, 10)).filter(Number.isFinite);
    nextNumber = nums.length ? Math.max(...nums) + 1 : 10000;
  }

  const ctx = {
    adminId,
    userId: d.adminUsers[0]?.userId || null,
    customerUserId: ref.customerUserId || d.customerUsers[0]?.userId || null,
    managerId: ref.managerId || asset.customer?.managerId || d.adminUsers[0]?.userId || null,
    serviceId: ref.serviceId || service?.id || null,
    slaId: ref.slaId || d.slas[0]?.id || null,
    supplierId: ref.supplierId || d.suppliers[0]?.id || null,
    costCategoryId: ref.costCategoryId || d.costCategories[0]?.id || null,
    budgets: d.budgets,
    refPrefix: 'DEMO',
  };
  if (!ctx.userId) throw new Error(`admin ${adminId} has no active owner/manager user (needed for Media.userId / Budget.userId)`);
  contextCache.set(key, ctx);
  return ctx;
}

// ---------------------------------------------------------------------------
// Financial year helpers (UK: 1 April – 31 March)
// ---------------------------------------------------------------------------

function financialYear(date = new Date()) {
  const y = date.getMonth() >= 3 ? date.getFullYear() : date.getFullYear() - 1;
  return {
    startDate: new Date(Date.UTC(y, 3, 1)).toISOString(),
    endDate: new Date(Date.UTC(y + 1, 2, 31, 23, 59, 59)).toISOString(),
    label: `FY${y}/${String(y + 1).slice(2)}`,
  };
}

// ---------------------------------------------------------------------------
// Main seeding flow
// ---------------------------------------------------------------------------

async function loadAssets() {
  const where = { _and: [] };
  if (ASSET_IDS.length) where._and.push({ id: { _in: ASSET_IDS } });
  if (LOCATION_ID) where._and.push({ locationId: { _eq: LOCATION_ID } });
  if (CUSTOMER_ID) where._and.push({ accountId: { _eq: CUSTOMER_ID } });
  if (!where._and.length) where._and.push({ status: { _neq: 'deleted' } });
  const { assets } = await gql(Q_ASSETS, { where, limit: LIMIT });
  return assets;
}

function assetMeta(asset, profile, r) {
  const existing = asset.meta?.assetAdditional || {};
  const [make, model] = pick(r, profile.makes);
  const inService = new Date();
  inService.setFullYear(inService.getFullYear() - between(r, 1, Math.max(2, profile.life - 4)));
  inService.setMonth(between(r, 0, 11), between(r, 1, 28));
  const purchase = new Date(inService.getTime() - between(r, 10, 60) * 86400000);
  const endOfLife = new Date(inService);
  endOfLife.setFullYear(endOfLife.getFullYear() + profile.life);
  const warranty = new Date(inService);
  warranty.setFullYear(warranty.getFullYear() + between(r, 2, 5));
  const initialCost = between(r, profile.cost[0], profile.cost[1], profile.cost[2]);
  const annual = between(r, profile.annual[0], profile.annual[1], profile.annual[2]);
  const fmt = (d) => d.toISOString().slice(0, 10);

  const generated = {
    make,
    model,
    serialNumber: `${make.slice(0, 2).toUpperCase()}${String(asset.id).padStart(4, '0')}-${between(r, 100000, 999999)}`,
    initialCost,
    datePutInService: fmt(inService),
    estimatedAnnualMaintenance: annual,
    estimatedEndDate: fmt(endOfLife),
    residualValue: Math.round(initialCost * between(r, 0.05, 0.2, 0.01)),
    purchaseDate: fmt(purchase),
    warrantyExpiry: fmt(warranty),
  };

  const merged = { ...generated };
  if (KEEP_META) {
    for (const [k, v] of Object.entries(existing)) {
      if (v !== null && v !== undefined && v !== '' && v !== 0) merged[k] = v;
    }
  }
  return { ...(asset.meta || {}), assetAdditional: { ...existing, ...merged } };
}

async function seedAsset(asset) {
  const profile = profileFor(asset);
  const r = rng(asset.id);
  const ctx = await contextFor(asset);
  const meta = assetMeta(asset, profile, r);
  const condition = asset.condition && KEEP_META ? asset.condition : pick(r, CONDITIONS);
  const annualBudget = meta.assetAdditional.estimatedAnnualMaintenance;

  console.log(`\n#${asset.id} ${asset.name} (${asset.category?.name || 'uncategorised'}) @ ${asset.location?.name || asset.locationId}`);
  console.log(`  profile: ${profile.keyword} | ${meta.assetAdditional.make} ${meta.assetAdditional.model} | condition ${condition}`);
  console.log(`  initial £${meta.assetAdditional.initialCost} | annual budget £${annualBudget} | residual £${meta.assetAdditional.residualValue} | in service ${meta.assetAdditional.datePutInService} → ${meta.assetAdditional.estimatedEndDate}`);

  if (EXECUTE) {
    await gql(M_UPDATE_ASSET, { id: asset.id, changes: { meta, condition, status: 'active', updatedAt: new Date().toISOString() } });
  }

  // Main photo -------------------------------------------------------------
  if (WITH_PHOTOS) {
    const hasPhoto = asset.mainPhoto?.length > 0;
    if (hasPhoto && !REPLACE_PHOTOS) {
      console.log('  photo: keeping existing main photo');
    } else {
      console.log(`  photo: ${hasPhoto ? 'replacing' : 'adding'} main photo (${PHOTOS_DIR ? 'local file' : 'loremflickr/' + profile.keyword})`);
      if (EXECUTE) {
        const photo = await loadPhoto(asset, profile);
        const uploaded = await uploadPhoto(photo);
        if (hasPhoto) await gql(M_RESET_MAIN_PHOTO, { entityId: asset.id });
        const { insert_Media } = await gql(M_INSERT_MEDIA, {
          media: [
            {
              adminId: ctx.adminId,
              userId: ctx.userId,
              caption: `${asset.name} – main photo`,
              extension: photo.name.split('.').pop(),
              category: 'assetMainPhoto',
              filename: uploaded.filename,
              type: 'image',
              meta: uploaded.meta, // visibility left to the column default (all roles)
            },
          ],
        });
        const mediaId = insert_Media.returning[0].id;
        await gql(M_INSERT_MEDIA_ENTITY, {
          objects: [{ entity: 'Asset', entityId: asset.id, mediaId, status: 'active', meta: { [SEED_TAG]: true } }],
        });
        console.log(`    media #${mediaId} → ${uploaded.filename}`);
      }
    }
  }

  // Work orders --------------------------------------------------------------
  let spend = 0;
  if (WITH_JOBS) {
    const jobs = buildJobs(asset, profile, ctx, r, annualBudget);
    spend = jobs.filter((j) => j.status !== 'accepted' && j.status !== 'offered').reduce((a, j) => a + j.net, 0);
    console.log(`  work orders: ${jobs.length} (${jobs.filter((j) => j.ppm).length} PPM / ${jobs.filter((j) => !j.ppm).length} reactive), 12-month spend £${money(spend)} = ${Math.round((spend / annualBudget) * 100)}% of budget`);
    for (const j of jobs) {
      const number = String(nextNumber++);
      const line = `    ${number} ${j.scheduledAt.slice(0, 10)} ${j.type.padEnd(8)} ${j.status.padEnd(12)} £${j.net.toFixed(2).padStart(9)}  ${j.title}${j.invoiced && WITH_INVOICES ? '  [invoice]' : ''}`;
      console.log(line);
      if (!EXECUTE) continue;

      const { insert_Job_one: job } = await gql(M_INSERT_JOB, { job: jobInput(asset, ctx, j, number) });
      await gql(M_INSERT_ASSET_ENTITY, {
        objects: [{ entity: 'Job', entityId: job.id, assetId: asset.id, status: 'active', meta: { [SEED_TAG]: true } }],
      });

      if (j.invoiced && WITH_INVOICES) {
        const invoiceNumber = `INV-${number}`;
        const fin = finances(j.net);
        const invoicedAt = j.statusData.invoiceSent;
        const { insert_AccountEntry_one: entry } = await gql(M_INSERT_INVOICE, {
          entry: {
            type: 'invoice',
            accountId: asset.accountId,
            adminId: ctx.adminId,
            currencyId: GBP_CURRENCY_ID,
            jobId: job.id,
            locationId: asset.locationId,
            invoiceNumber,
            invoicedDate: invoicedAt,
            createdAt: invoicedAt,
            dueDate: new Date(new Date(invoicedAt).getTime() + 30 * 86400000).toISOString(),
            amount: fin.amountInfo.vatTotal,
            balance: j.status === 'closed' ? 0 : fin.amountInfo.vatTotal,
            outstandingAmount: j.status === 'closed' ? 0 : fin.amountInfo.vatTotal,
            outstandingAmountNet: j.status === 'closed' ? 0 : fin.amountInfo.total,
            items: {},
            meta: { amountInfo: fin.amountInfo, paymentStatus: j.status === 'closed' ? 'paid' : 'unpaid', [SEED_TAG]: true },
          },
          invoice: {
            entity: 'Job',
            entityId: job.id,
            adminId: ctx.adminId,
            locationId: asset.locationId,
            invoiceNumber: parseInt(number, 10),
            invoiceDate: invoicedAt,
            createdAt: invoicedAt,
            items: [{ description: j.title, qty: 1, unitCost: fin.amountInfo.total, total: fin.amountInfo.total }],
            configs: { vatPercent: 20, [SEED_TAG]: true },
            totals: fin.amountInfo,
          },
        });
        await gql(M_LINK_INVOICE, { jobId: job.id, invoiceNumber, accountEntryId: entry.id });
      }
    }
  }

  return { asset, ctx, annualBudget, spend };
}

async function seedBudgets(results) {
  if (!WITH_BUDGETS) return;
  const fy = financialYear();
  const byLocation = new Map();
  for (const rres of results) {
    const key = rres.asset.locationId;
    const cur = byLocation.get(key) || { asset: rres.asset, ctx: rres.ctx, annual: 0 };
    cur.annual += rres.annualBudget;
    byLocation.set(key, cur);
  }
  console.log(`\nLocation budgets (${fy.label}):`);
  const rows = [];
  for (const [locationId, v] of byLocation) {
    const overlapping = v.ctx.budgets.find((b) => b.startDate <= fy.endDate && b.endDate >= fy.startDate);
    if (overlapping) {
      console.log(`  ${v.asset.location?.name || locationId}: keeping existing budget #${overlapping.id} (£${overlapping.totalAmount})`);
      continue;
    }
    const r = rng(locationId + 7919);
    // Whole-location budget: asset budgets plus headroom for the rest of the site.
    const ppmAmount = Math.round((v.annual * between(r, 1.4, 2.2, 0.1)) / 100) * 100;
    const reactiveAmount = Math.round((ppmAmount * between(r, 0.5, 0.9, 0.05)) / 100) * 100;
    const quoteAmount = Math.round((ppmAmount * between(r, 0.3, 0.7, 0.05)) / 100) * 100;
    const row = {
      locationId,
      userId: v.ctx.userId,
      startDate: fy.startDate,
      endDate: fy.endDate,
      ppmAmount,
      reactiveAmount,
      quoteAmount,
      totalAmount: ppmAmount + reactiveAmount + quoteAmount,
    };
    console.log(`  ${v.asset.location?.name || locationId}: PPM £${ppmAmount} + reactive £${reactiveAmount} + quotes £${quoteAmount} = £${row.totalAmount}`);
    rows.push(row);
  }
  if (EXECUTE && rows.length) await gql(M_INSERT_BUDGET, { budgets: rows });
}

// ---------------------------------------------------------------------------
// Cleanup
// ---------------------------------------------------------------------------

const Q_SEEDED = `
  query SeededRows {
    jobs: Job(where: { source: { _eq: "${SEED_TAG}" } }) { id }
    media: Media(where: { meta: { _contains: { ${SEED_TAG}: true } } }) { id }
  }
`;

const M_CLEANUP = `
  mutation SeedCleanup($jobIds: [Int!]!, $mediaIds: [Int!]!) {
    delete_Asset_Entity(where: { entity: { _eq: "Job" }, entityId: { _in: $jobIds } }) { affected_rows }
    delete_Invoice(where: { entity: { _eq: "Job" }, entityId: { _in: $jobIds } }) { affected_rows }
    delete_AccountEntry(where: { jobId: { _in: $jobIds } }) { affected_rows }
    delete_Job(where: { id: { _in: $jobIds } }) { affected_rows }
    delete_Media_Entity(where: { mediaId: { _in: $mediaIds } }) { affected_rows }
    delete_Media(where: { id: { _in: $mediaIds } }) { affected_rows }
  }
`;

async function cleanup() {
  const d = await gql(Q_SEEDED);
  const jobIds = d.jobs.map((j) => j.id);
  const mediaIds = d.media.map((m) => m.id);
  console.log(`Seeded rows found: ${jobIds.length} jobs (+ their Asset_Entity / Invoice / AccountEntry rows), ${mediaIds.length} media.`);
  console.log('Asset meta (assetAdditional) and Budget rows are left in place – edit or delete those from the portal.');
  if (!EXECUTE) {
    console.log('Dry run. Re-run with --execute to delete.');
    return;
  }
  const res = await gql(M_CLEANUP, { jobIds, mediaIds });
  for (const [k, v] of Object.entries(res)) console.log(`  ${k}: ${v.affected_rows}`);
}

// ---------------------------------------------------------------------------

(async () => {
  console.log(`${EXECUTE ? 'EXECUTE' : 'DRY RUN'} against ${HASURA_URL}`);
  if (CLEANUP) return cleanup();

  const assets = await loadAssets();
  if (!assets.length) {
    console.log('No assets matched.');
    return;
  }
  console.log(`${assets.length} asset(s) selected: ${assets.map((a) => a.id).join(', ')}`);

  const results = [];
  for (const asset of assets) {
    try {
      results.push(await seedAsset(asset));
    } catch (e) {
      console.error(`  FAILED asset ${asset.id}: ${e.message}`);
      if (EXECUTE) throw e;
    }
  }
  await seedBudgets(results);

  console.log(`\n${EXECUTE ? 'Done.' : 'Dry run complete. Re-run with --execute to write.'}`);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
