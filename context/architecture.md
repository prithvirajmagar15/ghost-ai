# Architecture Context

## Stack

| Layer | Technology | Role |
|-------|------------|------|
| Framework | Next.js 16 + TypeScript | Full-stack application with server/client boundaries |
| UI | Tailwind CSS + shadcn/ui | Component composition and styling |
| Authentication | Clerk | User identity and route protection |
| Database | Prisma + PostgreSQL | Relational metadata: projects, collaborators, specs, and task runs |
| Canvas | Liveblocks + React Flow | Real-time collaborative canvas, presence, and cursors |
| Background Tasks | Trigger.dev | Durable AI generation workflows |
| Artifact Storage | Vercel Blob | Canvas snapshots and generated Markdown specifications |

## System Boundaries

- `app/api` — Authenticated request handlers for validation, ownership checks, task triggering, and persistence.
- `trigger` — Long-running AI background jobs.
- `lib` — Shared infrastructure: Prisma client, access helpers, and utilities.
- `components` — UI composition layer.
- `prisma` — Database schema and generated client.
- `data` — Legacy directory (not used for new artifacts).

## Storage Model

- **PostgreSQL** — Projects, ownership, collaborators, specs, and task records.
- **Vercel Blob** — `canvas/{projectId}.json` and `specs/{projectId}/{specId}.md`.