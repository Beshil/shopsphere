# ShopSphere

ShopSphere is an early-stage e-commerce application with a React client and an Express API.

## Current stack

- Client: React 19, TypeScript, Vite, React Router, CSS Modules
- Server: Node.js, Express, TypeScript, MongoDB/Mongoose
- Quality: ESLint, Prettier, Node test runner, GitHub Actions

## Local development

Copy `.env.example` to `.env`, then install and start each application:

```bash
cd server
npm install
npm run dev

cd ../client
npm install
npm run dev
```

The client runs at `http://localhost:5173`. The API defaults to `http://localhost:4000`; `GET /api/health` works without MongoDB.

## Verification

- Client: `npm run lint`, `npm run build`, `npm run format:check`
- Server: `npm run typecheck`, `npm test`, `npm run build`

## Structure

- `client/src/app` — composition and providers
- `client/src/pages` — route-level pages
- `client/src/widgets` — layout-level UI
- `client/src/components/ui` — reusable UI primitives
- `client/src/shared` — shared constants and utilities
- `server/src` — API bootstrap and infrastructure
- `docs` — architecture, UI conventions, and roadmap

## Status

The application shell, navigation, theme support, and API foundation are implemented. Authentication, catalog data, cart, checkout, profile, and administration remain planned.

Licensed under MIT.
