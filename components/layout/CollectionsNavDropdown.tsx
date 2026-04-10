"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type MouseEventHandler } from "react";

import { COLLECTIONS } from "@/lib/collections";

type CollectionsNavDropdownProps = {
  open: boolean;
  onClose: () => void;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
  triggerSelector?: string;
};

export function CollectionsNavDropdown({
  open,
  onClose,
  onMouseEnter,
  onMouseLeave,
  triggerSelector,
}: CollectionsNavDropdownProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [animateIn, setAnimateIn] = useState(false);
  const heritage = COLLECTIONS.heritage;
  const signature = COLLECTIONS.signature;
  const classic = COLLECTIONS.classic;
  const florance = COLLECTIONS.florance;

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current) return;
      if (event.target instanceof Element && triggerSelector && event.target.closest(triggerSelector)) {
        return;
      }
      if (event.target instanceof Node && !rootRef.current.contains(event.target)) {
        onClose();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, triggerSelector]);

  useEffect(() => {
    if (!open) return;

    setAnimateIn(false);
    const frameId = requestAnimationFrame(() => setAnimateIn(true));
    return () => cancelAnimationFrame(frameId);
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={rootRef}
      id="collections-dropdown"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute left-0 top-full z-30 w-full overflow-x-clip"
    >
      <div
        className={`grid w-full grid-cols-[10rem_1fr] overflow-hidden border border-white/15 bg-black/95 py-14 shadow-[0_24px_48px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-all duration-200 ease-out lg:grid-cols-[12rem_1fr] xl:grid-cols-[14rem_1fr] ${
          animateIn ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        }`}
      >
        <ul className="flex flex-col border-r border-white/15 py-2">
          <li>
            <Link
              href={heritage.path}
              className="block whitespace-nowrap px-5 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              onClick={onClose}
            >
              {heritage.documentTitle}
            </Link>
          </li>
          <li>
            <Link
              href={signature.path}
              className="block whitespace-nowrap px-5 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              onClick={onClose}
            >
              {signature.documentTitle}
            </Link>
          </li>
          <li>
            <Link
              href={classic.path}
              className="block whitespace-nowrap px-5 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              onClick={onClose}
            >
              {classic.documentTitle}
            </Link>
          </li>
          <li>
            <Link
              href={florance.path}
              className="block whitespace-nowrap px-5 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              onClick={onClose}
            >
              {florance.documentTitle}
            </Link>
          </li>
        </ul>

        <div className="grid min-w-0 grid-cols-2 gap-3 p-3 lg:grid-cols-3 xl:grid-cols-4">
          <Link href={heritage.path} className="group block min-w-0 max-w-[13rem]" onClick={onClose}>
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-white/5">
              <Image
                src={heritage.imageSrc}
                alt={heritage.imageAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="260px"
              />
            </div>
            <p className="pt-2 text-[0.66rem] uppercase tracking-[0.18em] text-white/80 transition-colors group-hover:text-white">
              {heritage.documentTitle}
            </p>
          </Link>

          <Link href={signature.path} className="group block min-w-0 max-w-[13rem]" onClick={onClose}>
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-white/5">
              <Image
                src={signature.imageSrc}
                alt={signature.imageAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="260px"
              />
            </div>
            <p className="pt-2 text-[0.66rem] uppercase tracking-[0.18em] text-white/80 transition-colors group-hover:text-white">
              {signature.documentTitle}
            </p>
          </Link>

          <Link href={classic.path} className="group block min-w-0 max-w-[13rem]" onClick={onClose}>
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-white/5">
              <Image
                src={classic.imageSrc}
                alt={classic.imageAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="260px"
              />
            </div>
            <p className="pt-2 text-[0.66rem] uppercase tracking-[0.18em] text-white/80 transition-colors group-hover:text-white">
              {classic.documentTitle}
            </p>
          </Link>

          <Link href={florance.path} className="group block min-w-0 max-w-[13rem]" onClick={onClose}>
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-white/5">
              <Image
                src={florance.imageSrc}
                alt={florance.imageAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="260px"
              />
            </div>
            <p className="pt-2 text-[0.66rem] uppercase tracking-[0.18em] text-white/80 transition-colors group-hover:text-white">
              {florance.documentTitle}
            </p>
          </Link>
        </div>
      </div>
    </div>

  
  );
}
