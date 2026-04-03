import Image from "next/image";

export type StripImage = { src: string; alt: string };

export function CollectionImageStrip({
  images,
}: {
  images: readonly [StripImage, StripImage, StripImage];
}) {
  return (
    <section className="w-full bg-white py-5 md:py-16" aria-label="Collection gallery">
      <div className="grid grid-cols-3 gap-px bg-neutral-200">
        {images.map((item) => (
          <div
            key={item.src}
            className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 34vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
