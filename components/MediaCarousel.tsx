"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

const CAROUSEL_VIDEO_SRC = "/Zartash-home-page.mp4";

type CarouselSlide =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; label: string };

const CAROUSEL_SLIDES: readonly CarouselSlide[] = [
  {
    kind: "image",
    src: "/Home-page-pics/heritage-banner.avif",
    alt: "Heritage collection",
  },
  {
    kind: "video",
    src: CAROUSEL_VIDEO_SRC,
    label: "Campaign film",
  },
  {
    kind: "image",
    src: "/Home-page-pics/signature-banner.avif",
    alt: "Signature collection",
  },
  {
    kind: "image",
    src: "/Home-page-pics/Florance-banner.avif",
    alt: "Florance collection",
  },
];

const TRIPLE_SLIDES: readonly CarouselSlide[] = [
  ...CAROUSEL_SLIDES,
  ...CAROUSEL_SLIDES,
  ...CAROUSEL_SLIDES,
];

export function MediaCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const jumpIfLoopEnds = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const total = el.scrollWidth;
    const seg = total / 3;
    if (seg === 0) return;

    const { scrollLeft, clientWidth } = el;
    const edge = 8;

    if (scrollLeft <= edge) {
      el.style.scrollBehavior = "auto";
      el.scrollLeft = scrollLeft + seg;
    } else if (scrollLeft >= total - clientWidth - edge) {
      el.style.scrollBehavior = "auto";
      el.scrollLeft = scrollLeft - seg;
    }
  }, []);

  const centerMiddleSegment = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const seg = el.scrollWidth / 3;
    if (seg === 0) return;
    el.style.scrollBehavior = "auto";
    el.scrollLeft = seg;
  }, []);

  useLayoutEffect(() => {
    centerMiddleSegment();
  }, [centerMiddleSegment]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      centerMiddleSegment();
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [centerMiddleSegment]);

  return (
    <section
      className="mx-auto w-full max-w-8xl py-5 md:py-8"
      aria-label="Featured media"
    >
      <div
        ref={scrollRef}
        onScroll={jumpIfLoopEnds}
        className="-mx-3 flex gap-3 overflow-x-auto px-3 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:-mx-6 md:gap-4 md:px-6 [&::-webkit-scrollbar]:hidden"
      >
        {TRIPLE_SLIDES.map((slide, index) => (
          <div
            key={`${index}-${slide.kind}-${slide.src}`}
            className="relative aspect-[1/2] w-[min(280px,78vw)] shrink-0 overflow-hidden bg-neutral-100"
          >
            {slide.kind === "image" ? (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 78vw, 280px"
              />
            ) : (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
                aria-label={slide.label}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
