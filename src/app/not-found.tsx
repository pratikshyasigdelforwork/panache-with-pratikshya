import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 dark:bg-neutral-950">
      <span className="text-[10px] uppercase tracking-[0.5em] text-gold-dark dark:text-gold-light">
        Error 404
      </span>
      <h1 className="mt-6 text-5xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50 md:text-7xl">
        Not Found
      </h1>
      <p className="mt-4 text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
        This page does not exist in our atelier.
      </p>
      <Link
        href="/"
        className="group mt-10 inline-flex h-12 items-center border border-neutral-950 px-8 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-950 transition hover:bg-neutral-950 hover:text-white dark:border-neutral-50 dark:text-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-neutral-950"
      >
        <span>Return Home</span>
        <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </main>
  );
}
