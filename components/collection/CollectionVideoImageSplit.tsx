"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

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

export function CollectionVideoImageSplit({
  videoSrc,
  videoLabel = "Collection film",
  imageSrc,
  imageAlt,
}: {
  videoSrc: string;
  videoLabel?: string;
  imageSrc: string;
  imageAlt: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    setIsPlaying(!v.paused);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, [videoSrc]);

  const togglePlayback = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) void v.play();
    else v.pause();
  }, []);

  return (
    <section className="mx-auto max-w-7xl border-t border-neutral-200/80 bg-white py-8 md:py-12">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-4 px-4 md:grid-cols-2 md:gap-8 md:px-6">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900 md:aspect-[4/3]">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            aria-label={videoLabel}
          />
          <button
            type="button"
            onClick={togglePlayback}
            className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/15 text-white backdrop-blur-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:right-3 md:top-3 md:h-10 md:w-10"
            aria-label={isPlaying ? "Pause video" : "Play video"}
            aria-pressed={isPlaying}
          >
            {isPlaying ? (
              <PauseIcon className="h-4 w-4 md:h-[1.125rem] md:w-[1.125rem]" />
            ) : (
              <PlayIcon className="ml-0.5 h-4 w-4 md:h-[1.125rem] md:w-[1.125rem]" />
            )}
          </button>
        </div>
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 md:aspect-[4/3]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
