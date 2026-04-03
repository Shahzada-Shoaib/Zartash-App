import Image from "next/image";
import Link from "next/link";

import type { ProductSpotlightContent } from "@/lib/product-page-content";
import { fontSansClass, fontSerifClass } from "@/lib/typography-classes";

export function ProductSpotlight({ content }: { content: ProductSpotlightContent }) {
  const label = content.exploreLabel ?? "Explore";

  return (
    <section
      className={`${fontSansClass} border-t border-neutral-200/80 py-10 md:py-24`}
      aria-labelledby={`spotlight-${content.title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 text-center md:px-6">
        <div className="relative aspect-square w-full max-w-md bg-neutral-50">
          <Image
            src={content.src}
            alt={content.alt}
            fill
            className="object-contain object-center p-5 md:p-10"
            sizes="(max-width: 768px) 100vw, 28rem"
          />
        </div>
        <h2
          id={`spotlight-${content.title.replace(/\s+/g, "-").toLowerCase()}`}
          className={`${fontSerifClass} mt-6 text-2xl font-normal text-neutral-900 md:mt-12 md:text-3xl`}
        >
          {content.title}
        </h2>
        <p className="mt-3 max-w-md text-sm font-normal leading-relaxed text-neutral-600 md:mt-4 md:text-base">
          {content.body}
        </p>
        <Link
          href={content.exploreHref}
          className="mt-4 text-[0.65rem] font-normal uppercase tracking-[0.22em] text-neutral-900 underline-offset-4 transition-opacity hover:opacity-60 hover:underline md:mt-6"
        >
          {label}
        </Link>
        <div className="mt-5 flex items-center justify-center gap-2 md:mt-8" aria-hidden>
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-800" />
          <span className="h-1 w-1 rounded-full bg-neutral-300" />
        </div>
      </div>
    </section>
  );
}
