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

function cdnUrl(publicId, width = 800, quality = 80) {
  return cloudinary.v2.url(publicId, {
    width,
    quality,
    crop: "fill",
    format: "auto",
    secure: true,
  });
}

const categoryImageMap = {
  jackets: [
    "samples/people/boy-snow-hoodie",
    "samples/man-on-a-street",
    "samples/man-portrait",
  ],
  shoes: [
    "samples/ecommerce/shoes",
    "samples/shoe",
  ],
  bags: [
    "samples/ecommerce/accessories-bag",
    "samples/ecommerce/leather-bag-gray",
  ],
  watches: [
    "samples/people/smiling-man",
    "samples/man-on-a-escalator",
  ],
};

async function main() {
  console.log("Fetching Cloudinary resources...");

  const { resources } = await cloudinary.v2.api.resources({
    max_results: 100,
    type: "upload",
  });

  console.log(`Found ${resources.length} images in Cloudinary.`);

  const products = await prisma.product.findMany();

  if (products.length === 0) {
    console.log("No products found in database. Run `npx prisma db seed` first.");
    return;
  }

  let updated = 0;

  for (const product of products) {
    const category = product.category?.toLowerCase();
    const candidates = categoryImageMap[category];

    if (!candidates || candidates.length === 0) {
      console.log(`  Skipping "${product.name}" (no Cloudinary mapping for category: ${category})`);
      continue;
    }

    const publicId = candidates[0];
    const imageUrl = cdnUrl(publicId);
    const galleryUrls = candidates.slice(1).map((id) => cdnUrl(id));

    await prisma.product.update({
      where: { id: product.id },
      data: {
        image: imageUrl,
        images: galleryUrls,
      },
    });

    console.log(`  Updated "${product.name}" -> ${publicId}`);
    updated++;
  }

  console.log(`\nDone. Updated ${updated}/${products.length} products with Cloudinary images.`);
}

main()
  .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
