<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Cloudinary

- **Cloud Name:** `dywxzusq4`
- **Env vars:** `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` in `.env.local`
- **Package:** `cloudinary` (npm)
- **Seed:** `npm run seed:cloudinary` — fetches Cloudinary images and updates DB products by category mapping
- **Script:** `prisma/seed-cloudinary.mjs`
- **Images allowed in Next.js:** `res.cloudinary.com` added to `remotePatterns` in `next.config.ts`
