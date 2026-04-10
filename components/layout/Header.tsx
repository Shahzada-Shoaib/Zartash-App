"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";

import { CollectionsNavDropdown } from "@/components/layout/CollectionsNavDropdown";
import { HEADER_COLLECTION_DROPDOWN_ITEMS } from "@/lib/collections";

const MD_MIN = "(min-width: 768px)";
const COLLECTIONS_HOVER_CLOSE_DELAY_MS = 250;
const COLLECTIONS_TRIGGER_SELECTOR = "#collections-trigger";

export function Header() {
  const [open, setOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(false);
  const collectionsTriggerRef = useRef<HTMLButtonElement>(null);
  const collectionsCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCollectionsCloseTimeout = () => {
    if (!collectionsCloseTimeoutRef.current) return;
    clearTimeout(collectionsCloseTimeoutRef.current);
    collectionsCloseTimeoutRef.current = null;
  };

  const scheduleCollectionsClose = () => {
    clearCollectionsCloseTimeout();
    collectionsCloseTimeoutRef.current = setTimeout(() => {
      setCollectionsOpen(false);
      collectionsCloseTimeoutRef.current = null;
    }, COLLECTIONS_HOVER_CLOSE_DELAY_MS);
  };

  const handleCollectionsHoverEnter = () => {
    clearCollectionsCloseTimeout();
    setCollectionsOpen(true);
  };

  const handleCollectionsTriggerLeave = (event: ReactMouseEvent<HTMLButtonElement>) => {
    const nextTarget = event.relatedTarget;
    if (nextTarget instanceof Element && nextTarget.closest("#collections-dropdown")) return;
    scheduleCollectionsClose();
  };

  const handleCollectionsDropdownLeave = (event: ReactMouseEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget;
    if (nextTarget instanceof Node && collectionsTriggerRef.current?.contains(nextTarget)) return;
    scheduleCollectionsClose();
  };

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

  useEffect(() => {
    return () => clearCollectionsCloseTimeout();
  }, []);

  useEffect(() => {
    if (!open) {
      setMobileCollectionsOpen(false);
    }
  }, [open]);

  return (
    <header className="relative border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 md:items-center md:gap-2 md:px-8">
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
          className="hidden flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[0.72rem] uppercase tracking-[0.2em] text-white md:flex md:gap-x-24 md:gap-y-1 md:text-[0.82rem]"
        >
          <Link href="/new-arrivals" className="hover:opacity-60">
            New Arrivals
          </Link>
          <button
            id="collections-trigger"
            ref={collectionsTriggerRef}
            type="button"
            className=" pb-3 appearance-none bg-transparent p-0 text-inherit hover:opacity-60"
            aria-expanded={collectionsOpen}
            aria-controls="collections-dropdown"
            onMouseEnter={handleCollectionsHoverEnter}
            onMouseLeave={handleCollectionsTriggerLeave}
          >
            COLLECTIONS
          </button>
          <Link href="/rtw" className="hover:opacity-60">
            RTW
          </Link>
          <Link href="/about-us" className="hover:opacity-60">
            About us
          </Link>
        </nav>

      </div>
      <div className={`fixed inset-0 z-40 md:hidden ${open ? "" : "pointer-events-none"}`}>
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-black/55 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <nav
          id="mobile-main-nav"
          aria-label="Main menu"
          aria-hidden={!open}
          className={`absolute inset-y-0 right-0 flex w-1/2 min-w-[18rem] max-w-[24rem] transform flex-col bg-black transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-white/75">Menu</p>
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center text-white hover:opacity-70"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              tabIndex={open ? undefined : -1}
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="relative flex-1 overflow-hidden">
            <div
              aria-hidden={mobileCollectionsOpen}
              className={`absolute inset-0 flex transform flex-col transition-transform duration-300 ease-out ${
                mobileCollectionsOpen ? "-translate-x-full" : "translate-x-0"
              }`}
            >
              <Link
                href="/new-arrivals"
                className="border-b border-white/10 py-4 text-center text-[0.72rem] uppercase tracking-[0.2em] text-white hover:opacity-60"
                tabIndex={open && !mobileCollectionsOpen ? undefined : -1}
                onClick={() => setOpen(false)}
              >
                New Arrivals
              </Link>
              <button
                type="button"
                className="border-b border-white/10 py-4 text-center text-[0.72rem] uppercase tracking-[0.2em] text-white hover:opacity-60"
                aria-expanded={mobileCollectionsOpen}
                onClick={() => setMobileCollectionsOpen(true)}
                tabIndex={open && !mobileCollectionsOpen ? undefined : -1}
              >
                COLLECTIONS
              </button>
              <Link
                href="/rtw"
                className="border-b border-white/10 py-4 text-center text-[0.72rem] uppercase tracking-[0.2em] text-white hover:opacity-60"
                tabIndex={open && !mobileCollectionsOpen ? undefined : -1}
                onClick={() => setOpen(false)}
              >
                RTW
              </Link>
              <Link
                href="/about-us"
                className="border-b border-white/10 py-4 text-center text-[0.72rem] uppercase tracking-[0.2em] text-white hover:opacity-60"
                tabIndex={open && !mobileCollectionsOpen ? undefined : -1}
                onClick={() => setOpen(false)}
              >
                About us
              </Link>
            </div>

            <div
              aria-hidden={!mobileCollectionsOpen}
              className={`absolute inset-0 flex transform flex-col bg-black transition-transform duration-300 ease-out ${
                mobileCollectionsOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center text-white hover:opacity-70"
                  aria-label="Back to main menu"
                  onClick={() => setMobileCollectionsOpen(false)}
                  tabIndex={open && mobileCollectionsOpen ? undefined : -1}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path
                      d="M15 6L9 12L15 18"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <p className="text-[0.72rem] uppercase tracking-[0.2em] text-white/75">Collections</p>
                <span className="h-8 w-8" aria-hidden="true" />
              </div>

              <div className="flex flex-col">
                {HEADER_COLLECTION_DROPDOWN_ITEMS.map((entry) => (
                  <Link
                    key={`mobile-${entry.slug}`}
                    href={entry.href}
                    className="border-b border-white/10 py-4 text-center text-[0.68rem] uppercase tracking-[0.2em] text-white/85 hover:text-white"
                    tabIndex={open && mobileCollectionsOpen ? undefined : -1}
                    onClick={() => {
                      setMobileCollectionsOpen(false);
                      setOpen(false);
                    }}
                  >
                    {entry.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <CollectionsNavDropdown
        open={collectionsOpen}
        onClose={() => setCollectionsOpen(false)}
        onMouseEnter={handleCollectionsHoverEnter}
        onMouseLeave={handleCollectionsDropdownLeave}
        triggerSelector={COLLECTIONS_TRIGGER_SELECTOR}
      />
    </header>
  );
}
