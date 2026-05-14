# WEB + Encore.ts Monorepo

This repository is a template workspace with three main parts:

- `apps/web` - Next.js frontend
- `apps/services` - Encore.ts backend services
- `packages/ui` - shared UI components

## Documentation

This root README is only a workspace index. Detailed guides are split by app:

- Frontend and gateway workflow: `apps/web/README.md`
- Backend services and Encore usage: `apps/services/README.md`

## Local Development Topology

- Enter via APISIX at `http://localhost:9080`
- APISIX routes web traffic to Next.js (`localhost:3000`)
- APISIX routes `/api/*` to Encore (`localhost:4000`) and rewrites to Encore paths

To start APISIX:

```bash
cd apps/router
docker compose up -d
```

Then run web and services apps in development mode.
