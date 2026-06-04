import Link from 'next/link';

export default function Navbar() {
  // Premium e-commerce clothing category pathways
  const navigationLinks = [
    { name: 'New In', href: '/new-in' },
    { name: 'Brands', href: '/brands' },
    { name: 'Women', href: '/women' },
    { name: 'Men', href: '/men' },
    { name: 'Kathmandu Edit', href: '/kathmandu-edit' },
    { name: 'Outlet', href: '/outlet' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b 
border-neutral-100 bg-white/80 backdrop-blur-md transition-all 
duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center 
justify-between px-6 sm:px-8">
        
        {/* Left Section: Luxury Branding Logo */}
        <div className="flex flex-1 justify-start">
          <Link 
            href="/" 
            className="font-serif text-2xl tracking-[0.2em] font-black 
uppercase text-neutral-900 transition-colors hover:text-neutral-600"
          >
            ASOS <span className="font-sans text-xs tracking-widest 
font-light text-neutral-400 align-super ml-1">KTM</span>
          </Link>
        </div>

        {/* Center Section: Navigation Links with Premium Hover Animation 
*/}
        <nav className="hidden md:flex space-x-8 lg:space-x-12">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-xs uppercase tracking-[0.15em] 
font-medium text-neutral-600 transition-colors duration-300 
hover:text-neutral-950 group py-2"
            >
              {link.name}
              {/* Luxury animated underline slide-in effect */}
              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 
bg-neutral-900 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Section: Premium Action Utilities */}
        <div className="flex flex-1 items-center justify-end space-x-6 
text-neutral-700">
          {/* Search Action */}
          <button className="p-2 transition-colors hover:text-neutral-950" 
aria-label="Search">
            <svg className="h-5 w-5 stroke-2" fill="none" 
stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* User Profile */}
          <Link href="/account" className="p-2 transition-colors 
hover:text-neutral-950" aria-label="Account">
            <svg className="h-5 w-5 stroke-2" fill="none" 
stroke="currentColor" viewBox="0 0 24 24">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 
7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>

          {/* Minimalist Shopping Bag Container */}
          <Link href="/cart" className="relative p-2 transition-colors 
hover:text-neutral-950" aria-label="Shopping Bag">
            <svg className="h-5 w-5 stroke-2" fill="none" 
stroke="currentColor" viewBox="0 0 24 24">
              <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {/* Minimal dynamic item indicator circle */}
            <span className="absolute top-1 right-1 flex h-4 w-4 
items-center justify-center rounded-full bg-neutral-950 text-[9px] 
font-medium text-white">
              0
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}

