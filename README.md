# Photo Upload App "Gallery"

[Gallery](https://gallery-seven-ebon.vercel.app/) is a photo upload app that allows users to store images in various formats, displayed in a gallery view. Built with Next.js, it uses Vercel Postgres for image data storage and [Uploadthing](https://uploadthing.com/) (an S3 wrapper) for image hosting. Authentication, login, and sessions are managed through [Clerk](https://clerk.com/). Error monitoring and performance tracking are done with [Sentry.io](https://sentry.io/welcome/), while [Posthog](https://posthog.com/) handles analytics, and [Upstash](https://upstash.com/) takes care of upload rate-limiting. A few UI components come from [Shadcn](https://ui.shadcn.com/).

NOTE: Uploads are currently capped at 2 per minute to prevent abuse.

## Todo

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
- [x] Add analytics (posthog: clicks, refreshes, uploads, recordings)
- [x] Add Delete button (Server action)
- [x] Add Delete button analytics (posthog-node)
- [x] Ratelimiting (upstash)

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

- Users can upload 2 files every 60 seconds.
- To enable authorized-users-only upload --> api/uploadthing/core.ts --> fullUserData
- To authorize users, Clerk --> Users --> Private --> {"can-upload: true"}

## Misc

- Vercel: gh
- Clerk: urm
- Uploadthing: gh
- Sentry.io: goog
- Upstash: gh
