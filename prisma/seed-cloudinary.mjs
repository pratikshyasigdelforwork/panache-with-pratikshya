import { PrismaClient } from "@prisma/client";
import cloudinary from "cloudinary";
import { config } from "dotenv";
config({ path: ".env.local" });

const prisma = new PrismaClient();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PRODUCT_IMAGES = {
  jackets: [
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
    "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80",
    "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80",
  ],
  shoes: [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
  ],
  bags: [
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
  ],
  watches: [
    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&q=80",
    "https://images.unsplash.com/photo-1523170335258-f2017b2676c4?w=800&q=80",
  ],
  pashmina: [
    "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80",
    "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&q=80",
  ],
  dhaka: [
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
    "https://images.unsplash.com/photo-1590736704728-f4730bb3c3af?w=800&q=80",
  ],
  muga: [
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    "https://images.unsplash.com/photo-1565376848353-7f20f5eeab7a?w=800&q=80",
  ],
  mithila: [
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80",
    "https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=800&q=80",
  ],
  heritage: [
    "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80",
    "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&q=80",
  ],
  limited: [
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&q=80",
  ],
};

const folder = "panache-products";

async function uploadImage(url, publicId) {
  try {
    const result = await cloudinary.v2.uploader.upload(url, {
      public_id: publicId,
      folder,
      overwrite: false,
    });
    return result.secure_url;
  } catch (err) {
    console.error(`  Failed to upload ${publicId}: ${err.message}`);
    return url;
  }
}

async function main() {
  console.log("Uploading product images to Cloudinary...\n");

  const uploadedUrls = {};

  for (const [category, urls] of Object.entries(PRODUCT_IMAGES)) {
    console.log(`Category: ${category}`);
    uploadedUrls[category] = [];
    for (let i = 0; i < urls.length; i++) {
      const publicId = `${category}-${i + 1}`;
      const url = await uploadImage(urls[i], publicId);
      uploadedUrls[category].push(url);
      console.log(`  [${i + 1}/${urls.length}] ${publicId} -> uploaded`);
    }
  }

  console.log("\nUpdating products in database...\n");

  const products = await prisma.product.findMany();

  if (products.length === 0) {
    console.log("No products found in database. Run `npx prisma db seed` first.");
    return;
  }

  let updated = 0;

  for (const product of products) {
    const category = product.category?.toLowerCase();
    const candidates = uploadedUrls[category];

    if (!candidates || candidates.length === 0) {
      const fallback = uploadedUrls["heritage"] || uploadedUrls["limited"];
      if (!fallback) {
        console.log(`  Skipping "${product.name}" (no images for category: ${category})`);
        continue;
      }
      const imageUrl = fallback[0];
      const galleryUrls = fallback.slice(1);

      await prisma.product.update({
        where: { id: product.id },
        data: { image: imageUrl, images: galleryUrls },
      });
      console.log(`  Updated "${product.name}" (${category}) -> fallback images`);
    } else {
      const imageUrl = candidates[0];
      const galleryUrls = candidates.slice(1);

      await prisma.product.update({
        where: { id: product.id },
        data: { image: imageUrl, images: galleryUrls },
      });
      console.log(`  Updated "${product.name}" (${category}) -> ${category} images`);
    }
    updated++;
  }

  console.log(`\nDone. Updated ${updated}/${products.length} products with relevant Cloudinary images.`);
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
