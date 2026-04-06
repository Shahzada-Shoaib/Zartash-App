import { CollectionCta } from "@/components/collection/CollectionCta";
import { CollectionHero } from "@/components/collection/CollectionHero";
import { CollectionImageStrip } from "@/components/collection/CollectionImageStrip";
import { CollectionProductFeature } from "@/components/collection/CollectionProductFeature";
import { CollectionTextSection } from "@/components/collection/CollectionTextSection";
import { CollectionVideoImageSplit } from "@/components/collection/CollectionVideoImageSplit";
import { CollectionWideBanner } from "@/components/collection/CollectionWideBanner";
import { MediaCarousel } from "@/components/MediaCarousel";
import { COLLECTIONS, type CollectionSlug } from "@/lib/collections";
import { fontSansClass } from "@/lib/typography-classes";
import Image from "next/image";

export function CollectionPage({
  slug,
  priority,
}: {
  slug: CollectionSlug;
  priority?: boolean;
}) {
  const c = COLLECTIONS[slug];

  return (
    <article className={`${fontSansClass} bg-white text-neutral-900 antialiased`}>
      <CollectionHero
        imageSrc={c.imageSrc}
        imageAlt={c.imageAlt}
        kicker={c.heroKicker}
        title={c.documentTitle}
        tagline={c.tagline}
        priority={priority}
      />
      <CollectionTextSection body={c.intro} />
      <CollectionVideoImageSplit
        videoSrc={c.splitMedia.videoSrc}
        videoLabel={c.splitMedia.videoLabel}
        imageSrc={c.splitMedia.imageSrc}
        imageAlt={c.splitMedia.imageAlt}
      />
      <section className="mx-auto max-w-2xl px-5 py-10 text-center md:py-14">
        <h2 className="text-2xl font-semibold mb-10">THE COLLECTION</h2>
        <p className="text-sm font-normal leading-relaxed text-neutral-700 md:text-[0.95rem]">
          We craft timeless pieces that celebrate heritage and modern elegance.
          Each collection tells a story of artistry, restraint, and quiet
          luxury. We craft timeless pieces that celebrate heritage and modern elegance.
          Each collection tells a story of artistry, restraint.<br/><br/>

          We craft timeless pieces that celebrate heritage and modern elegance.
          Each collection tells a story of artistry, restraint, and quiet
          luxury. We craft timeless pieces that celebrate heritage and modern elegance.
          Each collection tells a story of artistry, restraint.<br/><br/>

          We craft timeless pieces that celebrate heritage and modern elegance.
          Each collection tells a story of artistry, restraint, and quiet
          luxury. We craft timeless pieces that celebrate heritage and modern elegance.
          Each collection tells a story of artistry, restraint.
        </p>
        <div className="mt-5 flex justify-center text-neutral-800 md:mt-6" aria-hidden>
      
          
          <Image
            src="/Home-page-pics/bird-homepage.png"
            alt="Bird"
            width={10}
            height={10}
            className=" h-full w-auto object-contain object-center"
            sizes="(max-width: 768px) 20px, 24px"
          />
        </div>
      </section>
      <MediaCarousel />
      <CollectionProductFeature
        imageSrc={c.spotlight.imageSrc}
        imageAlt={c.spotlight.imageAlt}
        title={c.spotlight.title}
        body={c.spotlight.body}
      />
      <CollectionImageStrip images={c.stripImages} />
      <CollectionWideBanner imageSrc={c.banner.src} imageAlt={c.banner.alt} />
      <CollectionCta shopHref="#" />
    </article>
  );
}
