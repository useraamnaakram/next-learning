

'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';

export default function NotFound() { 

  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) { 
      router.push(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <main className="relative min-h-[calc(100vh-8rem)] flex-1 flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 px-4 py-16 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 sm:px-6 lg:px-8">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-teal-400/20 blur-[120px] dark:bg-teal-600/20" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 -z-10 h-[25rem] w-[25rem] -translate-x-1/2 rounded-full bg-emerald-400/15 blur-[100px] dark:bg-emerald-600/15" />

      <div className="mx-auto max-w-4xl text-center">
        {/* Animated Graphic / Icon Header */}
        <div className="relative inline-flex items-center justify-center">
          <span className="text-8xl font-extrabold tracking-tight text-gray-200 dark:text-gray-800/80 sm:text-9xl">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-teal-600/10 text-teal-600 backdrop-blur-md dark:bg-teal-400/10 dark:text-teal-300 sm:size-20">
              <svg
                className="size-8 sm:size-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9 9 0 100-18 9 9 0 000 18z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Heading & Subtitle */}
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-600 dark:text-gray-400 sm:text-lg">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been removed, renamed, or is temporarily unavailable.
        </p>

        {/* Search Bar */}
        <div className="mx-auto mt-8 max-w-md">
          <form onSubmit={handleSearch} className="relative flex items-center">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
              <svg
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for content..."
              className="w-full rounded-full border border-gray-200 bg-white/80 py-3.5 pl-11 pr-28 text-sm text-gray-900 placeholder-gray-400 shadow-sm backdrop-blur-sm transition focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-gray-800 dark:bg-gray-900/80 dark:text-white dark:placeholder-gray-500 dark:focus:border-teal-400"
            />
            <button
              type="submit"
              className="absolute right-1.5 rounded-full bg-teal-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-teal-600/20 transition hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 dark:bg-teal-500 dark:hover:bg-teal-600"
          >
            <svg
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5"
              />
            </svg>
            Back to Home
          </Link>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white/80 px-6 py-3 text-sm font-semibold text-gray-700 shadow-xs transition hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white cursor-pointer"
          >
            <svg
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Go Back
          </button>
        </div>

        {/* Quick Links Section */}
        <div className="mt-14 border-t border-gray-200/60 pt-10 dark:border-gray-800/80">
          <h2 className="text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
            Or try one of these popular pages
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/"
              className="group flex items-start gap-4 rounded-2xl border border-gray-200/80 bg-white/60 p-4 text-left shadow-xs backdrop-blur-xs transition duration-200 hover:-translate-y-0.5 hover:border-teal-500/50 hover:bg-white hover:shadow-md dark:border-gray-800/80 dark:bg-gray-900/60 dark:hover:border-teal-400/50 dark:hover:bg-gray-900"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition group-hover:bg-teal-600 group-hover:text-white dark:bg-teal-950/50 dark:text-teal-400 dark:group-hover:bg-teal-500 dark:group-hover:text-white">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Homepage</h3>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Return to main dashboard</p>
              </div>
            </Link>

            <Link
              href="/about"
              className="group flex items-start gap-4 rounded-2xl border border-gray-200/80 bg-white/60 p-4 text-left shadow-xs backdrop-blur-xs transition duration-200 hover:-translate-y-0.5 hover:border-teal-500/50 hover:bg-white hover:shadow-md dark:border-gray-800/80 dark:bg-gray-900/60 dark:hover:border-teal-400/50 dark:hover:bg-gray-900"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition group-hover:bg-teal-600 group-hover:text-white dark:bg-teal-950/50 dark:text-teal-400 dark:group-hover:bg-teal-500 dark:group-hover:text-white">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">About Us</h3>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Learn more about our team</p>
              </div>
            </Link>

            <Link
              href="/contact"
              className="group flex items-start gap-4 rounded-2xl border border-gray-200/80 bg-white/60 p-4 text-left shadow-xs backdrop-blur-xs transition duration-200 hover:-translate-y-0.5 hover:border-teal-500/50 hover:bg-white hover:shadow-md dark:border-gray-800/80 dark:bg-gray-900/60 dark:hover:border-teal-400/50 dark:hover:bg-gray-900"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition group-hover:bg-teal-600 group-hover:text-white dark:bg-teal-950/50 dark:text-teal-400 dark:group-hover:bg-teal-500 dark:group-hover:text-white">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Contact Support</h3>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Get in touch for help</p>
              </div>
            </Link>

            <Link
              href="/#services"
              className="group flex items-start gap-4 rounded-2xl border border-gray-200/80 bg-white/60 p-4 text-left shadow-xs backdrop-blur-xs transition duration-200 hover:-translate-y-0.5 hover:border-teal-500/50 hover:bg-white hover:shadow-md dark:border-gray-800/80 dark:bg-gray-900/60 dark:hover:border-teal-400/50 dark:hover:bg-gray-900"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition group-hover:bg-teal-600 group-hover:text-white dark:bg-teal-950/50 dark:text-teal-400 dark:group-hover:bg-teal-500 dark:group-hover:text-white">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Services</h3>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Explore feature offerings</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
