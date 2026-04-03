import Image from "next/image";

import type { ProductImage } from "@/lib/product-page-content";

export function StatementWithGrid({
  statement,
  thumbs,
}: {
  statement: ProductImage;
  thumbs: readonly [ProductImage, ProductImage, ProductImage];
}) {
  return (
    <section className="w-full py-6 md:py-20" aria-label="Featured set">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 md:aspect-[21/9] md:max-h-[min(70vh,640px)]">
        <Image
          src={statement.src}
          alt={statement.alt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 1600px"
        />
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2 md:mt-3 md:gap-3">
        {thumbs.map((item) => (
          <div key={item.src} className="relative aspect-square w-full overflow-hidden bg-neutral-50">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover object-center transition-opacity duration-300 hover:opacity-95"
              sizes="(max-width: 768px) 33vw, 20vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
