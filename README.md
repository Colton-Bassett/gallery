# Gallery

## TODO

- [x] Deploy (vercel)
- [x] Scaffold basic ui with mock data
- [x] Tidy build process
- [x] Setup a real database (vercel postgres; for image data)
- [x] Attach database to UI (drizzle; for typescript queries & local database manipulation)
- [x] Add authentication (clerk; for login, sign-up, and sessions)
- [x] Add image upload (uploadthing; s3 wrapper for image storage)
- [x] "taint" (server-only)
- [x] use next Image component
- [x] Error management (Sentry.io; cloud error management, performance tracking)
- [x] Routing/image page (Next router parallel route)
- [x] Add UI Button
- [x] Add toasts (Shadcn, ui/component library)
- [x] Add dark mode and sonner/toast from Shadcn
- [ ] Analytics (posthog)
- [ ] Delete button (Server actions)
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

## Dev Notes

- Vercel: gh
- Clerk: urm
- Uploadthing: gh
- Sentry.io: goog
