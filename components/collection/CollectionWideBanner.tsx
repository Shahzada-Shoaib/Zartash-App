import Image from "next/image";

export function CollectionWideBanner({
  imageSrc,
  imageAlt,
}: {
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <section className="w-full bg-white" aria-label="Collection atmosphere">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 md:aspect-[3/1] md:max-h-[min(52vh,480px)]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
