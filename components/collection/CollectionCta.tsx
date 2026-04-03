import { ShopButton } from "@/components/home/ShopButton";
import { fontSansClass } from "@/lib/typography-classes";

export function CollectionCta({ shopHref = "#" }: { shopHref?: string }) {
  return (
    <section
      className={`${fontSansClass} border-t border-neutral-200/80 bg-white px-5 py-8 text-center md:px-6 md:py-16`}
      aria-label="Shop collection"
    >
      <div className="flex justify-center">
        <ShopButton href={shopHref} />
      </div>
    </section>
  );
}
