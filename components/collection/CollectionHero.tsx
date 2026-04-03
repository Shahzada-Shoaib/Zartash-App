import Image from "next/image";

import { fontSerifClass } from "@/lib/typography-classes";

export function CollectionHero({
  imageSrc,
  imageAlt,
  kicker,
  title,
  tagline,
  priority,
}: {
  imageSrc: string;
  imageAlt: string;
  kicker: string;
  title: string;
  tagline: string;
  priority?: boolean;
}) {
  return (
    <section className="relative w-full" aria-labelledby="collection-hero-title">
      <div className="relative aspect-[5/6] w-full md:aspect-[21/9] md:max-h-[min(82vh,880px)] md:min-h-[360px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={priority}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-5 pb-6 pt-10 text-center md:px-6 md:pb-14 md:pt-28">
          <p className="text-[0.62rem] font-normal uppercase tracking-[0.36em] text-white/80 md:text-[0.68rem]">
            {kicker}
          </p>
          <h1
            id="collection-hero-title"
            className={`${fontSerifClass} mt-2 max-w-4xl text-[1.75rem] font-normal leading-[1.2] tracking-[0.02em] text-white md:mt-4 md:text-4xl lg:text-5xl`}
          >
            {title}
          </h1>
          <p
            className={`${fontSerifClass} mt-3 max-w-lg text-sm italic leading-relaxed text-white/90 md:mt-5 md:text-base`}
          >
            {tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
