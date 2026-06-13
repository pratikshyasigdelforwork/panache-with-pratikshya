"use client";

import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 dark:bg-neutral-950">
      <span className="text-[10px] uppercase tracking-[0.5em] text-gold-dark dark:text-gold-light">
        Atelier Error
      </span>
      <h1 className="mt-6 text-4xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50 md:text-6xl">
        Something went wrong
      </h1>
      <p className="mt-4 text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
        Please try again or return home.
      </p>
      <div className="mt-10 flex gap-4">
        <button
          onClick={reset}
          className="inline-flex h-12 items-center bg-neutral-950 px-8 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition hover:bg-gold-dark dark:bg-gold dark:text-neutral-950 dark:hover:bg-gold-light"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex h-12 items-center border border-neutral-950 px-8 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-950 transition hover:bg-neutral-950 hover:text-white dark:border-neutral-50 dark:text-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-neutral-950"
        >
          Home
        </Link>
      </div>
    </main>
  );
}
