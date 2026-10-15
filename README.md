# Redeem Publication and Legal Consult: website prototype

Informational prototype built by Great Light Group. Next.js (App Router), React, TypeScript, Tailwind CSS v4, Lucide icons, npm. No backend or database.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build && npm start
```

Fonts (Cormorant Garamond, Inter) load through `next/font/google` at build time and are self-hosted afterwards, with system fallbacks.

## Sanity CMS setup

The Sanity Studio is available at `/studio`; published articles appear on `/blog`
and `/blog/[slug]`.

1. Create a project at [sanity.io/manage](https://www.sanity.io/manage) and note
   its project ID. Create or select the `production` dataset.
2. In the project root, create `.env.local` with:

   ```dotenv
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2026-10-15
   ```

   Replace `your-project-id` with the ID from Sanity. The API version is pinned
   to keep queries predictable; update it deliberately when changing API versions.
3. Restart the development server after changing environment variables, then
   open `http://localhost:3000/studio` and sign in with a Sanity account that
   has access to the project.
4. Create an **Articles & Publications** document, fill in the required title,
   slug, category, and publication date, add the article body, then publish it.
   Published articles will be listed at `/blog`.

The dataset is queried publicly, so published content can be read without a
token. Do not add a Sanity write token to `NEXT_PUBLIC_*` variables or commit
`.env.local`.

## Structure

- `app/`: routes: `/`, `/about`, `/services`, `/services/[slug]` (six pages from one template), `/contact`, `/privacy` (draft), sitemap, robots
- `lib/site.ts`: contact details and the WhatsApp link builder (single source of truth)
- `lib/services.ts`: all service copy
- `components/`: header with mobile menu, footer, reusable sections
- `public/images/redeem-logo.png`: the client's logo, cut from the supplied photo's wood background onto transparency. Colours and lettering are unaltered.

## Animation

Lenis (smooth scroll) and GSAP ScrollTrigger (fade-and-rise reveals, transform/opacity only). Both are disabled when the visitor prefers reduced motion.

## Important notes

- **All copy is demonstrative and must be reviewed by management before publication**, especially the service pages and the "Before you enquire" section on the home page.
- The contact "enquiry helper" sends nothing; it only opens WhatsApp with a prefilled message.
- The commissioner stamp and gavel photos and the portrait were supplied by the client; their licence/consent is unconfirmed. Other photos are **unverified placeholders** (generic seeded images from picsum.photos, toned in grayscale/gold) set in `lib/images.ts`. They are not pictures of the business. If an image fails to load, a dark panel is shown instead. Replace before launch.
- The Maps link is a search link, not a verified Business Profile URL.
- Set `NEXT_PUBLIC_SITE_URL` for correct sitemap and Open Graph URLs.
