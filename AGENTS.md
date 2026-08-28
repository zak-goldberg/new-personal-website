# New Personal Website

This directory is the workspace for the new personal website.

## Project direction

- Build the frontend with Next.js, React, and TypeScript.
- Deploy the frontend to Vercel.
- Plan for a Django/Python backend on Render with managed Postgres when persistent data is needed.
- Store photos, videos, and uploads in Cloudflare R2 rather than the application filesystem.
- Prefer static rendering initially; introduce dynamic routes only when they have a clear need.

## Design context

- The site should express: "curiosity backed by execution."
- Lead with: "I build software, solve business problems, and enjoy learning new disciplines."
- The homepage concept is a modern geosites-inspired horizontal career timeline.
- Use a friendly, exploratory portfolio feel instead of a trophy-case presentation.
- For website design, content, UX, project pages, or related architecture decisions, read and follow `skills/zak-personal-website/SKILL.md`.

## Working conventions

- Keep frontend and backend concerns clearly separated.
- Do not commit credentials, tokens, or production secrets.
- Record consequential architecture decisions in project documentation as the implementation evolves.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
