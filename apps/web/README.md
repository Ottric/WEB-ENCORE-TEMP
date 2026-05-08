# Web App (Next.js)

Frontend app for this monorepo.

## Routing Policy

- Default user entrypoint: `http://localhost:9080` (APISIX)
- Do not use `http://localhost:3000` as primary entry for normal testing
- API calls must use `/api/*` only

APISIX handles:

- `/*` -> Next.js on `localhost:3000`
- `/api/*` -> Encore on `localhost:4000` (with path rewrite)

## Run Frontend

From this directory:

```bash
pnpm dev
```

## Full Local Flow

1. Start APISIX at workspace root:

```bash
docker compose up -d
```

2. Start backend from `apps/services`:

```bash
pnpm dev
```

3. Start frontend from `apps/web`:

```bash
pnpm dev
```

4. Open app via APISIX:

```text
http://localhost:9080
```

5. Test API through gateway path:

```bash
curl http://localhost:9080/api/hello/World
```

## UI Components

Add shadcn components from workspace root:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

Components are stored in `packages/ui/src/components` and imported from `@workspace/ui/*`.
