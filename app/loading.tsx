export default function Loading() {
  return (
    <main className="relative min-h-[calc(100vh-8rem)] flex-1 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 px-4 py-16 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 sm:px-6 lg:px-8">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-teal-400/15 blur-[120px] dark:bg-teal-600/15" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 -z-10 h-[25rem] w-[25rem] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[100px] dark:bg-emerald-600/10" />

      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        {/* Animated Spinner with Pulsing Ring */}
        <div className="relative flex items-center justify-center">
          {/* Outer pulsing ring */}
          <div className="absolute size-20 rounded-full bg-teal-500/20 animate-ping dark:bg-teal-400/20" />

          {/* Middle blur glow */}
          <div className="absolute size-16 rounded-full bg-teal-500/30 blur-md dark:bg-teal-400/30" />

          {/* Spinning SVG ring */}
          <div className="relative flex size-16 items-center justify-center rounded-2xl bg-white/80 p-3 shadow-lg backdrop-blur-md dark:bg-gray-900/80 sm:size-20">
            <svg
              className="size-10 animate-spin text-teal-600 dark:text-teal-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="mt-8 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
          Loading page...
        </h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Please wait while we prepare your content.
        </p>

        {/* Skeleton Preview Grid */}
        <div className="mt-10 w-full max-w-md space-y-4">
          {/* Line Skeletons */}
          <div className="mx-auto h-4 w-3/4 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" />
          <div className="mx-auto h-3 w-1/2 animate-pulse rounded-full bg-gray-200/80 dark:bg-gray-800/80" />

          {/* Cards Skeleton */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="h-24 animate-pulse rounded-2xl border border-gray-100 bg-white/50 p-4 shadow-xs dark:border-gray-800/60 dark:bg-gray-900/50">
              <div className="size-8 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
              <div className="mt-3 h-3 w-3/4 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" />
            </div>
            <div className="h-24 animate-pulse rounded-2xl border border-gray-100 bg-white/50 p-4 shadow-xs dark:border-gray-800/60 dark:bg-gray-900/50">
              <div className="size-8 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
              <div className="mt-3 h-3 w-3/4 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
