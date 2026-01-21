export default function NotFound() {
  return (
    <main className="min-h-screen bg-warm-50 dark:bg-navy-900 flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* 404 Display */}
        <div className="relative mb-8">
          <div className="flex items-center justify-center gap-4">
            <span className="text-5xl md:text-7xl font-mono text-cyan-500/30 dark:text-cyan-400/30 select-none">
              {"<"}
            </span>
            <span className="text-8xl md:text-[10rem] font-bold text-navy-900 dark:text-navy-50 font-logo leading-none">
              404
            </span>
            <span className="text-5xl md:text-7xl font-mono text-cyan-500/30 dark:text-cyan-400/30 select-none">
              {"/>"}
            </span>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-3 mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-navy-50">
            Page not found
          </h1>
          <p className="text-navy-600 dark:text-navy-400">
            Looks like this page went on a trip and forgot to come back.
          </p>
        </div>

        {/* CTA */}
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-lg font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors underline underline-offset-4"
        >
          Back to Home
        </a>

        {/* Decorative line */}
        <div className="mt-16 flex items-center justify-center gap-1">
          <div className="w-8 h-px bg-navy-200 dark:bg-navy-700" />
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <div className="w-8 h-px bg-navy-200 dark:bg-navy-700" />
        </div>
      </div>
    </main>
  );
}
