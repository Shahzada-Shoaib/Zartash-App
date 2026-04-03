import Image from "next/image";

import { fontSansClass, fontSerifClass } from "@/lib/typography-classes";

function slugId(title: string) {
  return `collection-spotlight-${title.replace(/\s+/g, "-").toLowerCase()}`;
}

export function CollectionProductFeature({
  imageSrc,
  imageAlt,
  title,
  body,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  body: string;
}) {
  const headingId = slugId(title);

  return (
    <section
      className={`${fontSansClass} border-t border-neutral-200/80 bg-white py-10 md:py-24`}
      aria-labelledby={headingId}
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 text-center md:px-6">
        <div className="relative aspect-square w-full max-w-md bg-neutral-50">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain object-center p-5 md:p-10"
            sizes="(max-width: 768px) 100vw, 28rem"
          />
        </div>
        <h2
          id={headingId}
          className={`${fontSerifClass} mt-6 text-2xl font-normal text-neutral-900 md:mt-12 md:text-3xl`}
        >
          {title}
        </h2>
        <p className="mt-3 max-w-md text-sm font-normal leading-relaxed text-neutral-600 md:mt-4 md:text-base">
          {body}
        </p>
      </div>
    </section>
  );
}
