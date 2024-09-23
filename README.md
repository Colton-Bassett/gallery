# Gallery

## TODO

- [x] Deploy (vercel)
- [x] Scaffold basic ui with mock data
- [x] Tidy build process
- [x] Setup a real database (vercel postgres)
- [x] Attach database to UI (drizzle)
- [x] Add authentication (clerk)
- [x] Add image upload
- [x] "taint" (server-only)
- [x] use next Image component
- [ ] Error management (Sentry)
- [ ] Routing/image page (Next router parallel route)
- [ ] Delete button (Server actions)
- [ ] Analytics (posthog)
- [ ] Ratelimiting (upstash)

## Scripts

```bash
pnpm dev
# launch development server with live reloading, updates, and debugging.

pnpm run db:push
# push changes to database (e.g., updating to match a new schema)

pnpm db:studio
# open local version of database with ui that you can view and manipulate at https://local.drizzle.studio

git add -p
# stage each change interactively, accept or skip specific changes.
# [y: stage, n: skip, q: quit, a: all, d: skip all, e: edit]
```
