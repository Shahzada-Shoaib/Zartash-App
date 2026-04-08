import Image from "next/image";
import { ShopButton } from "@/components/home/ShopButton";

const TOP_BANNER_SRC =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2200&q=85";
const MIDDLE_BANNER_SRC =
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2200&q=85";
const LEFT_CARD_SRC =
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1800&q=85";
const RIGHT_CARD_SRC =
  "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1800&q=85";

export function CollectionShowcaseSection() {
  return (
    <section className=" mx-auto w-full px-3 py-8 md:px-6 md:py-12">
      <div className="relative mx-auto aspect-[4/5] w-full max-w-7xl overflow-hidden bg-neutral-100 md:aspect-[3/2]">
        <Image
          src={TOP_BANNER_SRC}
          alt="Featured accessories banner"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 1152px"
        />
      </div>

      <div className="mx-auto max-w-3xl px-4 py-8 text-center md:py-10">
        <h2 className="text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-black md:text-xs">
          ACCESSORIES EDIT
        </h2>
        <p className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-neutral-600 md:text-[0.72rem]">
          Crafted details for everyday styling
        </p>
      </div>

      <div className="relative mx-auto aspect-[4/5] w-full max-w-7xl overflow-hidden bg-neutral-100 md:aspect-[3/2]">
        <Image
          src={MIDDLE_BANNER_SRC}
          alt="Accessories lookbook banner"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 1152px"
        />
      </div>

      <div className="mx-auto mt-6 grid w-full max-w-6xl grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 md:gap-6">
        <article className="text-center">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 md:aspect-[4/3]">
            <Image
              src={LEFT_CARD_SRC}
              alt="Handbags collection"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <h3 className="mt-5 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-black md:text-xs">
            Handbags
          </h3>
          <p className="mt-2 text-[0.65rem] uppercase tracking-[0.18em] text-neutral-600">
            Structured forms and soft finishes
          </p>
          <div className="mt-4">
            <ShopButton label="Explore" href="#" />
          </div>
        </article>

        <article className="text-center">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 md:aspect-[4/3]">
            <Image
              src={RIGHT_CARD_SRC}
              alt="Jewelry collection"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <h3 className="mt-5 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-black md:text-xs">
            Jewelry
          </h3>
          <p className="mt-2 text-[0.65rem] uppercase tracking-[0.18em] text-neutral-600">
            Everyday shine with statement details
          </p>
          <div className="mt-4">
            <ShopButton label="Explore" href="#" />
          </div>
        </article>
      </div>
    </section>
  );
}
