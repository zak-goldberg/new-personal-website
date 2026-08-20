# Initial High-Level Design

## Purpose

This is a sparse record of the website direction discussed so far. It combines only the agreed or explicitly requested details from:

- `Wireframing with ChatGPT`
- `Personal Website / Architecture Decisions` in the Obsidian vault

Items without an existing decision are intentionally left blank.

## Audience and content

- Primary audience: future employers.
- The site should include professional content, including an enhanced CV.
- The site should include personal content, including pictures of family and hobbies.
- Personal projects should each have their own page.

## Core message

**Headline**

> I build software, solve business problems, and enjoy learning new disciplines.

**Theme**

> Curiosity backed by execution.

## Homepage

- The homepage concept is a horizontal timeline.
- The timeline should tell the career story through accumulated perspectives and learning, rather than promotions.
- A wireframe was requested in a modern / GeoCities theme.
- The top-left computer in that wireframe should be replaced with a picture of Zak in the same 8-bit style.

### Timeline content discussed

- Civil Engineering
- Economics
- Business Operations
- Technical Program Management
- Engineering Management
- Software Engineering

## Visual direction

- Polished, but not like a Squarespace site.
- A quirky mix of modern and retro GeoCities.
- The site should feel inviting and exploratory rather than like a polished trophy case.

### Color


### Typography


### Spacing and layout system


### Motion and interaction


### Retro elements


### Accessibility and responsive behavior


## Information architecture

### Home

Horizontal career timeline.

### Enhanced CV


### Projects

Each project has its own page.

### Personal content

Family pictures and hobbies.

### Contact


## Technical and media constraints

- Frontend: Next.js, React, and TypeScript.
- Frontend hosting: Vercel.
- Backend, when persistent data is needed: Django and Python on Render with managed Postgres.
- Photos, videos, and uploads: Cloudflare R2 object storage, not the application filesystem.
- Start with static rendering where possible; introduce server-rendered or dynamic routes only when needed.

## Open decisions

- Domain and DNS configuration
- Public versus private media
- Final page structure beyond the homepage and project pages
- Final visual system
- Static, server-rendered, and dynamic rendering choices by route
