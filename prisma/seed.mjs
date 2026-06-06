import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    id: "seed-jacket-001",
    slug: "premium-jacket",
    name: "Premium Jacket",
    category: "jackets",
    description:
      "A warm, structured jacket for everyday city wear and cool evenings.",
    price: 99,
    priceCents: 9900,
    currency: "usd",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80",
    brand: "ASOS Kathmandu",
    active: true,
    stock: 24,
  },
  {
    id: "seed-jacket-002",
    slug: "puffer-jacket",
    name: "Puffer Jacket",
    category: "jackets",
    description:
      "Lightweight insulated jacket with a clean profile and practical pockets.",
    price: 135,
    priceCents: 13500,
    currency: "usd",
    image: "https://images.unsplash.com/photo-1544643428-19333918a221?w=1200&q=80",
    brand: "ASOS Kathmandu",
    active: true,
    stock: 18,
  },
  {
    id: "seed-shoes-001",
    slug: "designer-shoes",
    name: "Designer Shoes",
    category: "shoes",
    description: "Polished low-profile shoes built for smart casual outfits.",
    price: 120,
    priceCents: 12000,
    currency: "usd",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80",
    brand: "ASOS Kathmandu",
    active: true,
    stock: 30,
  },
  {
    id: "seed-shoes-002",
    slug: "classic-sneakers",
    name: "Classic Sneakers",
    category: "shoes",
    description:
      "Comfortable everyday sneakers with durable soles and minimal styling.",
    price: 85,
    priceCents: 8500,
    currency: "usd",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=1200&q=80",
    brand: "ASOS Kathmandu",
    active: true,
    stock: 42,
  },
  {
    id: "seed-watch-001",
    slug: "luxury-watch",
    name: "Luxury Watch",
    category: "watches",
    description:
      "A refined analog watch with a stainless steel case and leather strap.",
    price: 250,
    priceCents: 25000,
    currency: "usd",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1200&q=80",
    brand: "ASOS Kathmandu",
    active: true,
    stock: 14,
  },
  {
    id: "seed-watch-002",
    slug: "sport-watch",
    name: "Sport Watch",
    category: "watches",
    description: "Water-resistant sport watch with a comfortable silicone strap.",
    price: 175,
    priceCents: 17500,
    currency: "usd",
    image: "https://images.unsplash.com/photo-1508685096489-7cab44331003?w=1200&q=80",
    brand: "ASOS Kathmandu",
    active: true,
    stock: 20,
  },
  {
    id: "seed-bag-001",
    slug: "travel-bag",
    name: "Travel Bag",
    category: "bags",
    description:
      "Roomy weekender bag with reinforced handles and a detachable strap.",
    price: 150,
    priceCents: 15000,
    currency: "usd",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80",
    brand: "ASOS Kathmandu",
    active: true,
    stock: 16,
  },
  {
    id: "seed-bag-002",
    slug: "leather-backpack",
    name: "Leather Backpack",
    category: "bags",
    description:
      "Structured backpack with laptop storage and daily carry compartments.",
    price: 140,
    priceCents: 14000,
    currency: "usd",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&q=80",
    brand: "ASOS Kathmandu",
    active: true,
    stock: 22,
  },
];

async function main() {
  for (const product of products) {
    await prisma.product.upsert({
      where: { id: product.id },
      update: product,
      create: product,
    });
  }

  console.log(`Seeded ${products.length} products.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
