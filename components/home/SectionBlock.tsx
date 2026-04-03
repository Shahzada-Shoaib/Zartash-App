import Image from "next/image";

import { ShopButton } from "./ShopButton";

const sectionMediaShellClassName =
  "relative aspect-[3/4] w-full max-h-[100dvh] md:aspect-[4/3]";

export function SectionBlock({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  priority,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  priority?: boolean;
}) {
  return (
    <section className="mx-auto w-full max-w-8xl px-3 md:px-6">
      <div className={sectionMediaShellClassName}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1152px"
          priority={priority}
        />
      </div>
      <div className="flex flex-col items-center gap-1.5 py-9 text-center md:py-10">
        <h2 className="text-[0.75rem] text-black font-bold uppercase tracking-[0.25em] md:text-xs">
          {title}
        </h2>
        {subtitle ? (
          <p className="text-[0.65rem] uppercase tracking-[0.18em] text-neutral-600">
            {subtitle}
          </p>
        ) : null}
        <ShopButton />
      </div>
    </section>
  );
}
