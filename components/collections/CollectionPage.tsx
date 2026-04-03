import { CollectionCta } from "@/components/collection/CollectionCta";
import { CollectionHero } from "@/components/collection/CollectionHero";
import { CollectionImageStrip } from "@/components/collection/CollectionImageStrip";
import { CollectionProductFeature } from "@/components/collection/CollectionProductFeature";
import { CollectionTextSection } from "@/components/collection/CollectionTextSection";
import { CollectionWideBanner } from "@/components/collection/CollectionWideBanner";
import { COLLECTIONS, type CollectionSlug } from "@/lib/collections";
import { fontSansClass } from "@/lib/typography-classes";

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
      <CollectionTextSection eyebrow="The collection" body={c.intro} />
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
