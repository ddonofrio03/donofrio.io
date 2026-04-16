# DONOFR.IO — Next.js + Bun Site

A Next.js 14 site with Gray Matter markdown blog. No database required for blog posts.

## Stack

- **Runtime/Package Manager:** [Bun](https://bun.sh)
- **Framework:** Next.js 14 (App Router)
- **Blog:** Gray Matter + Markdown files
- **Styling:** Plain CSS (no Tailwind, no CSS-in-JS)
- **Deployment:** Vercel (recommended)

---

## Getting Started

### 1. Install Bun (if you haven't)

```bash
curl -fsSL https://bun.sh/install | bash
```

### 2. Install dependencies

```bash
bun install
```

### 3. Run the dev server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Adding Images

Copy your images from the old site into `/public/images/`. The filenames expected are:

```
/public/images/david.jpg
/public/images/bill.jpg
/public/images/ryan.jpg
/public/images/missy.jpg
/public/images/alex.jpg
/public/images/alli.jpg
/public/images/nick.jpg
/public/images/tj.jpg
/public/images/meeting.jpg
/public/images/conversation.jpg
/public/images/AI-Infrastructure.jpg
/public/images/service-marketing.jpg
```

---

## Writing Blog Posts

Create a new `.md` file in the `/posts` folder. Filename becomes the URL slug.

### Frontmatter format

```markdown
---
title: "Your Post Title"
date: "2025-03-01"
author: "David D'Onofrio"
excerpt: "A one or two sentence summary shown in listings."
tags: ["strategy", "communications"]
---

Your post content here in Markdown...
```

### URL structure

A file named `my-post.md` becomes `/thoughts/my-post`.

---

## Deployment (Vercel)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Next.js — no config needed
4. Set your custom domain `donofr.io` in Vercel's dashboard

Every time you push a new `.md` file to `/posts`, Vercel rebuilds and deploys automatically.

---

## Project Structure

```
donofrio-site/
├── app/
│   ├── layout.tsx          # Root layout (nav, footer)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # All styles
│   └── thoughts/
│       ├── page.tsx        # Blog listing
│       └── [slug]/
│           └── page.tsx    # Individual post
├── components/
│   └── Nav.tsx             # Navigation
├── lib/
│   └── posts.ts            # Gray Matter post reading utility
├── posts/                  # YOUR BLOG POSTS LIVE HERE (.md files)
├── public/
│   └── images/             # Site images
├── next.config.js
├── package.json
└── tsconfig.json
```
