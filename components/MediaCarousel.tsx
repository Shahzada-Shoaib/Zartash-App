"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

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

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
    </svg>
  );
}

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

  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  const [pausedVideos, setPausedVideos] = useState<Record<number, boolean>>({});

  const toggleVideoPlayback = useCallback((index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      void video.play();
      setPausedVideos((prev) => ({ ...prev, [index]: false }));
    } else {
      video.pause();
      setPausedVideos((prev) => ({ ...prev, [index]: true }));
    }
  }, []);

  return (
    <section
      className=" mx-auto w-full max-w-8xl py-5 md:py-8"
      aria-label="Featured media"
    >
      <div
        ref={scrollRef}
        onScroll={jumpIfLoopEnds}
        className="-mx-3 flex gap-10 overflow-x-auto px-3 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:-mx-6 md:gap-14 md:px-6 [&::-webkit-scrollbar]:hidden"
      >
        {TRIPLE_SLIDES.map((slide, index) => (
          <div
            key={`${index}-${slide.kind}-${slide.src}`}
            className="relative aspect-[2/3] w-[min(320px,82vw)] shrink-0 overflow-hidden bg-neutral-100"
          >
            {slide.kind === "image" ? (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 82vw, 320px"
              />
            ) : (
              <>
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={slide.label}
                />
                <button
                  type="button"
                  onClick={() => toggleVideoPlayback(index)}
                  className="absolute bottom-2 right-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/15 text-white backdrop-blur-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:bottom-3 md:right-3 md:h-10 md:w-10"
                  aria-label={pausedVideos[index] ? "Play video" : "Pause video"}
                  aria-pressed={!pausedVideos[index]}
                >
                  {pausedVideos[index] ? (
                    <PlayIcon className="ml-0.5 h-4 w-4 md:h-[1.125rem] md:w-[1.125rem]" />
                  ) : (
                    <PauseIcon className="h-4 w-4 md:h-[1.125rem] md:w-[1.125rem]" />
                  )}
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
