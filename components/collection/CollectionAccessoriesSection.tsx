import Image from "next/image";
import { ShopButton } from "@/components/home/ShopButton";

export function CollectionAccessoriesSection({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-8 text-center md:py-10">
      <div className="relative mx-auto aspect-[16/10] w-full max-w-5xl overflow-hidden bg-neutral-100">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 92vw, 1120px"
        />
      </div>

      <h2 className="mt-8 text-2xl font-semibold uppercase tracking-[0.06em] md:mt-10">
        {title}
      </h2>

      <h3 className="mt-2 text-2xl uppercase tracking-[0.06em]">
        {subtitle}
      </h3>

      <div className="mt-5 md:mt-6">
        <ShopButton label={ctaLabel} href={ctaHref} />
      </div>
    </section>
  );
}
