# Klovered — marketing site

The Klovered landing site (the "landing-human" design), built as a standalone
Next.js 16 app. It is deployed separately from the product app; CTAs link to the
product's `/auth/*` routes via `NEXT_PUBLIC_APP_URL`.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Plain CSS design system in `app/globals.css` (OKLCH tokens, Geist + Clash Display)
- No runtime dependencies beyond React/Next

## Develop

```bash
npm install
cp .env.example .env.local   # optional: set NEXT_PUBLIC_APP_URL
npm run dev                  # http://localhost:3000
```

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (next/core-web-vitals) |
| `npm run typecheck` | `tsc --noEmit` |

## Structure

```
app/
  layout.tsx        # fonts + metadata
  page.tsx          # landing page
  contact/page.tsx  # contact / book-a-demo
  globals.css       # full design system
components/
  SiteHeader.tsx  SiteFooter.tsx  ScrollReveal.tsx  ContactForm.tsx
lib/
  links.ts          # product auth URLs (NEXT_PUBLIC_APP_URL)
```

## CI/CD

`.github/workflows/ci.yml` runs lint + typecheck + build on every push and PR to
`main`. Deploy to Vercel is wired but gated — it runs only when the repo variable
`DEPLOY_ENABLED` is `true` and these secrets are set:

- `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

Set them under **Settings → Secrets and variables → Actions**, then flip
`DEPLOY_ENABLED` to `true`. Until then, CI validates every commit without
attempting a deploy.

## Environment

See `.env.example`. `NEXT_PUBLIC_APP_URL` points CTAs at the product app;
`NEXT_PUBLIC_CONTACT_API` (optional) wires the contact form to a real endpoint.
