"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { COLLECTIONS } from "@/lib/collections";

type CollectionsNavDropdownProps = {
  open: boolean;
  onClose: () => void;
};

export function CollectionsNavDropdown({ open, onClose }: CollectionsNavDropdownProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const heritage = COLLECTIONS.heritage;
  const signature = COLLECTIONS.signature;
  const classic = COLLECTIONS.classic;
  const florance = COLLECTIONS.florance;

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current) return;
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
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={rootRef}
      id="collections-dropdown"
      className="absolute left-1/2 top-full z-30 mt-2 w-[min(95vw,72rem)] -translate-x-1/2 overflow-x-clip"
    >
      <div className="grid w-full grid-cols-[10rem_1fr] overflow-hidden border border-white/15 bg-black/95 shadow-[0_24px_48px_rgba(0,0,0,0.55)] backdrop-blur-sm lg:grid-cols-[12rem_1fr] xl:grid-cols-[14rem_1fr]">
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
          <Link href={heritage.path} className="group block min-w-0 max-w-[8.5rem]" onClick={onClose}>
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-white/5">
              <Image
                src={heritage.imageSrc}
                alt={heritage.imageAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="150px"
              />
            </div>
            <p className="pt-2 text-[0.66rem] uppercase tracking-[0.18em] text-white/80 transition-colors group-hover:text-white">
              {heritage.documentTitle}
            </p>
          </Link>

          <Link href={signature.path} className="group block min-w-0 max-w-[8.5rem]" onClick={onClose}>
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-white/5">
              <Image
                src={signature.imageSrc}
                alt={signature.imageAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="150px"
              />
            </div>
            <p className="pt-2 text-[0.66rem] uppercase tracking-[0.18em] text-white/80 transition-colors group-hover:text-white">
              {signature.documentTitle}
            </p>
          </Link>

          <Link href={classic.path} className="group block min-w-0 max-w-[8.5rem]" onClick={onClose}>
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-white/5">
              <Image
                src={classic.imageSrc}
                alt={classic.imageAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="150px"
              />
            </div>
            <p className="pt-2 text-[0.66rem] uppercase tracking-[0.18em] text-white/80 transition-colors group-hover:text-white">
              {classic.documentTitle}
            </p>
          </Link>

          <Link href={florance.path} className="group block min-w-0 max-w-[8.5rem]" onClick={onClose}>
            <div className="relative aspect-[2/3] w-full overflow-hidden bg-white/5">
              <Image
                src={florance.imageSrc}
                alt={florance.imageAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="150px"
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
