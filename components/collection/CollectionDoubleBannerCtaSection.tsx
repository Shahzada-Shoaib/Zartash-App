import Image from "next/image";
import Link from "next/link";

const TOP_IMAGE_SRC =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=2200&q=85";
const BOTTOM_BG_IMAGE_SRC =
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2200&q=85";

export function CollectionDoubleBannerCtaSection() {
  return (
    <section className="w-full pt-6 md:pt-10">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 md:aspect-[21/9]">
        <Image
          src={TOP_IMAGE_SRC}
          alt="Collection banner"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden bg-neutral-900 md:mt-14 md:aspect-[21/9]">
        <Image
          src={BOTTOM_BG_IMAGE_SRC}
          alt="Collection campaign background"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/25" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black to-transparent md:h-44" aria-hidden />
        <div className="absolute inset-0 z-10 flex items-end justify-center pb-8 md:pb-12">
          <div className="text-center">
            <h2 className="mb-4 text-[0.9rem] font-semibold uppercase tracking-[0.24em] text-white md:mb-5 md:text-[1rem]">
              Accessories Spotlight
            </h2>
            <Link
              href="#"
              className="inline-block border border-white bg-transparent px-7 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
