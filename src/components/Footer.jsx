import React from "react";

function Footer() {
  return (
    <footer className="border-t border-(--border) bg-(--bg) text-(--text)">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:flex-row md:items-start md:justify-between md:py-12">
        <div className="max-w-sm space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-(--accent-bg) px-3 py-1 text-xs font-medium text-(--accent)">
            <span className="h-2 w-2 rounded-full bg-(--accent)" />
            Discount Lot
          </div>
          <h2 className="text-2xl font-semibold text-(--text-h)">
            Land deals made simple.
          </h2>
          <p className="text-sm leading-relaxed text-(--text)">
            Explore deeply discounted lots, transparent pricing, and flexible
            options for buyers across the country.
          </p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-8 text-sm md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-(--text-h)">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="transition-colors hover:text-(--text-h)">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-(--text-h)">
                  Featured Deals
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-(--text-h)">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-(--text-h)">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-(--text-h)">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="transition-colors hover:text-(--text-h)">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-(--text-h)">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-(--text-h)">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-(--text-h)">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 space-y-3 md:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-(--text-h)">
              Stay in the loop
            </h3>
            <p className="text-sm text-(--text)">
              Get the latest discounted lots and buying guides in your inbox.
            </p>
            <form
              className="flex flex-col gap-2 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@example.com"
                className="h-10 flex-1 rounded-full border border-(--border) bg-(--bg) px-3 text-sm outline-none ring-(--accent) ring-offset-0 focus:ring-2"
              />
              <button
                type="submit"
                className="h-10 rounded-full bg-(--accent) px-4 text-sm font-medium text-white shadow-sm transition hover:brightness-110"
              >
                Subscribe
              </button>
            </form>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-(--text)">
              <span className="font-medium text-(--text-h)">
                Follow
              </span>
              <button className="rounded-full bg-(--social-bg) px-3 py-1 transition hover:bg-(--code-bg)">
                X
              </button>
              <button className="rounded-full bg-(--social-bg) px-3 py-1 transition hover:bg-(--code-bg)">
                Instagram
              </button>
              <button className="rounded-full bg-(--social-bg) px-3 py-1 transition hover:bg-(--code-bg)">
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-(--border)">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-(--text) md:flex-row">
          <p>© {new Date().getFullYear()} Discount Lot. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-(--text-h)">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-(--text-h)">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

