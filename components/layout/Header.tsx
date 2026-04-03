"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  "SIGNATURE",
  "CLASSIC",
  "HERITAGE",
  "FLORANCE",
] as const;

const MD_MIN = "(min-width: 768px)";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MD_MIN);
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 md:items-center md:gap-2 md:px-8 md:py-3">
        <div className="relative flex w-full items-center justify-center">
          <Link
            href="/"
            className="block h-16 max-w-none w-fit shrink-0 md:h-20 lg:h-20"
          >
            <Image
              src="/zartash-logo.webp"
              alt="Zartash"
              width={960}
              height={320}
              className="h-full w-auto max-w-none object-contain object-center"
              sizes="(max-width: 768px) 90vw, 24rem"
              priority
            />
          </Link>
          <button
            type="button"
            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-main-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        <nav
          aria-label="Main"
          className="hidden flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[0.72rem] uppercase tracking-[0.2em] text-white md:flex md:gap-x-28 md:gap-y-1 md:text-[0.82rem]"
        >
          {NAV_LINKS.map((label) => (
            <a key={label} href="#" className="hover:opacity-60">
              {label}
            </a>
          ))}
        </nav>

        <nav
          id="mobile-main-nav"
          aria-label="Main menu"
          aria-hidden={!open}
          className={`flex flex-col gap-1 border-white/10 pt-4 pb-1 md:hidden ${
            open ? "border-t" : "hidden border-0 p-0"
          }`}
        >
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="py-3 text-center text-[0.72rem] uppercase tracking-[0.2em] text-white hover:opacity-60"
              tabIndex={open ? undefined : -1}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
