import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Pashmina Silks", image: "https://images.unsplash.com/photo-1590736704728-f4730bb3c3af?w=800&q=80", href: "/shop?category=pashmina" },
  { name: "Dhaka Weaves", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80", href: "/shop?category=dhaka" },
  { name: "Muga Gold", image: "https://images.unsplash.com/photo-1445205170230-053b830c6050?w=800&q=80", href: "/shop?category=muga" },
  { name: "Mithila Art", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80", href: "/shop?category=mithila" },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => (
          <Link 
            key={cat.name} 
            href={cat.href}
            className="group relative aspect-[3/4] overflow-hidden"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-xl font-serif font-bold uppercase tracking-widest text-white">
                {cat.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
