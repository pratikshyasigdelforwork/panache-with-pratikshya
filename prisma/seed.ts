import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// This function generates mock luxury products for demonstration purposes
function generateMockProducts(count: number) {
  const categories = ["Evening Wear", "Accessories", "Footwear", "Outerwear"];
  const brands = ["Panache Atelier", "Pratikshya Luxe", "Signature Collection"];
  
  return Array.from({ length: count }, (_, i) => ({
    name: `Luxury Piece ${i + 1}`,
    slug: `luxury-piece-${i + 1}`,
    category: categories[i % categories.length],
    price: 100 + (i * 10),
    priceCents: (100 + (i * 10)) * 100,
    currency: "USD",
    image: `https://images.unsplash.com/photo-${1500000000000 + i}?w=800&q=80`, // Placeholder
    brand: brands[i % brands.length],
    description: `Exquisite designer piece number ${i + 1}.`,
    stock: 10,
    active: true,
    sku: `SKU-${1000 + i}`,
  }));
}

async function seed() {
  console.log("Generating and seeding 1,000 products...");
  
  const products = generateMockProducts(1000);

  // Using createMany for high-performance bulk insertion
  await prisma.product.createMany({
    data: products,
    skipDuplicates: true,
  });
  
  console.log("Successfully seeded 1,000 products.");
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
