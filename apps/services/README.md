# Services App (Encore.ts)

Backend APIs live in this app and run on `http://localhost:4000` during local development.

## Prerequisites

- Install Encore CLI: https://encore.dev/docs/install
- Make sure Docker is available (required by Encore for local infra)

## Run Backend

From this directory:

```bash
pnpm dev
```

This starts `encore run` and exposes endpoints such as:

- `GET /hello/:name`
- `GET /`

Direct test:

```bash
curl http://localhost:4000/hello/World
```

## Dashboard

When running, open `http://localhost:9400` for the Encore local dashboard.

## Important for This Monorepo

- Frontend calls should go through APISIX at `http://localhost:9080/api/*`
- APISIX rewrites `/api/*` to this backend app on port `4000`
- Keep endpoint paths in services without `/api` prefix

See frontend flow in `../web/README.md`.
