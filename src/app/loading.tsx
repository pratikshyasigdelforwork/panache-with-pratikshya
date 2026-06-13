export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-neutral-950">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-gold dark:border-neutral-800 dark:border-t-gold" />
        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
          Loading
        </p>
      </div>
    </main>
  );
}
