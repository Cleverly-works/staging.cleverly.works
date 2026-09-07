# scripts

Operational scripts that are run locally against a Cleverly environment. Nothing in
this folder is part of the deployed site.

## seed-demo-assets.js

Populates asset pages on the demo instance with realistic dummy data so
`/dashboard/assets/view` looks complete: make/model/serial, initial cost, annual
maintenance budget, residual value, in-service and end-of-life dates, a main photo,
12 months of work-order history with costs (feeding the Maintenance costs, Total
cost of ownership and Versus budget widgets), invoices for the invoiced jobs, and a
location budget for the current financial year.

```bash
export HASURA_URL=https://api-demo.cleverly.works/v1/graphql
export HASURA_ADMIN_SECRET=...   # from the demo Hasura env

node scripts/seed-demo-assets.js                          # dry run, prints the plan
node scripts/seed-demo-assets.js --execute --location-id=57
node scripts/seed-demo-assets.js --execute --asset-ids=12,13 --photos-dir=./asset-photos
node scripts/seed-demo-assets.js --cleanup --execute      # remove seeded jobs/invoices/photos
```

Run `node scripts/seed-demo-assets.js` with no flags to see all options. Everything
written is tagged (`Job.source = 'demoSeed'`, `meta.demoSeed = true`) so `--cleanup`
can find it again. Requires Node 18+.
