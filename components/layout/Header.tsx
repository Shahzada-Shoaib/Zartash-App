"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { CollectionsNavDropdown } from "@/components/layout/CollectionsNavDropdown";
import { HEADER_COLLECTION_DROPDOWN_ITEMS } from "@/lib/collections";

const MD_MIN = "(min-width: 768px)";

export function Header() {
  const [open, setOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MD_MIN);
    const onChange = () => {
      if (mq.matches) {
        setOpen(false);
      } else {
        setCollectionsOpen(false);
        setMobileCollectionsOpen(false);
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-1 md:items-center md:gap-2 md:px-8 md:py-3">
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
          className="relative hidden flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[0.72rem] uppercase tracking-[0.2em] text-white md:flex md:gap-x-24 md:gap-y-1 md:text-[0.82rem]"
        >
          <Link href="/new-arrivals" className="hover:opacity-60">
            New Arrivals
          </Link>
          <button
            type="button"
            className="appearance-none bg-transparent p-0 text-inherit hover:opacity-60"
            aria-expanded={collectionsOpen}
            aria-controls="collections-dropdown"
            onClick={() => setCollectionsOpen((prev) => !prev)}
          >
            COLLECTIONS
          </button>
          <Link href="/rtw" className="hover:opacity-60">
            RTW
          </Link>
          <Link href="/about-us" className="hover:opacity-60">
            About us
          </Link>
          <CollectionsNavDropdown
            open={collectionsOpen}
            onClose={() => setCollectionsOpen(false)}
          />
        </nav>

        <nav
          id="mobile-main-nav"
          aria-label="Main menu"
          aria-hidden={!open}
          className={`flex flex-col gap-1 border-white/10 pt-4 pb-1 md:hidden ${
            open ? "border-t" : "hidden border-0 p-0"
          }`}
        >
          <Link
            href="/new-arrivals"
            className="py-3 text-center text-[0.72rem] uppercase tracking-[0.2em] text-white hover:opacity-60"
            tabIndex={open ? undefined : -1}
            onClick={() => setOpen(false)}
          >
            New Arrivals
          </Link>
          <div className="flex flex-col gap-1 py-2">
            <button
              type="button"
              className="py-2 text-center text-[0.72rem] uppercase tracking-[0.2em] text-white hover:opacity-60"
              aria-expanded={mobileCollectionsOpen}
              onClick={() => setMobileCollectionsOpen((prev) => !prev)}
              tabIndex={open ? undefined : -1}
            >
              COLLECTIONS
            </button>
            {mobileCollectionsOpen ? (
              <div className="flex flex-col border-t border-white/10">
                {HEADER_COLLECTION_DROPDOWN_ITEMS.map((entry) => (
                  <Link
                    key={`mobile-${entry.slug}`}
                    href={entry.href}
                    className="py-2 text-center text-[0.68rem] uppercase tracking-[0.2em] text-white/85 hover:text-white"
                    tabIndex={open ? undefined : -1}
                    onClick={() => {
                      setMobileCollectionsOpen(false);
                      setOpen(false);
                    }}
                  >
                    {entry.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <Link
            href="/rtw"
            className="py-3 text-center text-[0.72rem] uppercase tracking-[0.2em] text-white hover:opacity-60"
            tabIndex={open ? undefined : -1}
            onClick={() => setOpen(false)}
          >
            RTW
          </Link>
          <Link
            href="/about-us"
            className="py-3 text-center text-[0.72rem] uppercase tracking-[0.2em] text-white hover:opacity-60"
            tabIndex={open ? undefined : -1}
            onClick={() => setOpen(false)}
          >
            About us
          </Link>
        </nav>
      </div>
    </header>
  );
}
