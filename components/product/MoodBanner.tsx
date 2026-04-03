import Image from "next/image";

import type { ProductImage } from "@/lib/product-page-content";

export function MoodBanner({ image }: { image: ProductImage }) {
  return (
    <section className="w-full py-6 md:py-20" aria-label="Atmosphere">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-200 md:aspect-[3/1] md:max-h-[420px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover object-center grayscale contrast-[0.95]"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
