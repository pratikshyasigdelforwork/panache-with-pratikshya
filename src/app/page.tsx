export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-5 border-b">
        <h1 className="text-3xl font-bold">
          ASOS Kathmandu
        </h1>

        <div className="flex gap-6">
          <a href="/shop">Shop</a>
<a href="/cart">Cart</a>
<a href="/account">Account</a>
<a href="/admin">Admin</a>
        </div>

        <div className="flex gap-3">
          <button className="border px-4 py-2 rounded">
            Sign In
          </button>

          <button className="bg-black text-white px-4 py-2 rounded">
            Cart
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="h-[600px] flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h2 className="text-6xl font-bold mb-4">
            NEW SEASON ARRIVALS
          </h2>

          <p className="text-xl mb-8">
            Fashion from Kathmandu to the world
          </p>

          <button className="bg-white text-black px-8 py-3 rounded">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto py-16 px-8">
        <h2 className="text-4xl font-bold mb-10">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">
              Premium Jacket
            </h3>

            <p className="mt-2">$99</p>

            <button className="mt-4 w-full bg-black text-white py-2 rounded">
              Add To Cart
            </button>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">
              Designer Shoes
            </h3>

            <p className="mt-2">$120</p>

            <button className="mt-4 w-full bg-black text-white py-2 rounded">
              Add To Cart
            </button>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">
              Luxury Watch
            </h3>

            <p className="mt-2">$250</p>

            <button className="mt-4 w-full bg-black text-white py-2 rounded">
              Add To Cart
            </button>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold">
              Travel Bag
            </h3>

            <p className="mt-2">$150</p>

            <button className="mt-4 w-full bg-black text-white py-2 rounded">
              Add To Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}