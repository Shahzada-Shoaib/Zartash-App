import Image from "next/image";

const IMAGES = {
  hero: "/hero-section-image.webp",
  collection:
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2400&q=85",
  highJewellery:
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=2400&q=85",
  resort:
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2400&q=85",
  bridal:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=85",
} as const;

const CAMPAIGN_VIDEO_SRC = "/campaign.mp4";

const sectionMediaShellClassName =
  "relative aspect-[3/4] w-full max-h-[100dvh] md:aspect-[4/3]";

function ShopButton({ label = "Shop now" }: { label?: string }) {
  return (
    <a
      href="#"
      className="inline-block bg-black px-10 py-3 text-[0.65rem] font-normal uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90"
    >
      {label}
    </a>
  );
}

function SectionBlock({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  priority,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  priority?: boolean;
}) {
  return (
    <section className="mx-auto w-full max-w-8xl px-4 md:px-8">
      <div className={sectionMediaShellClassName}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1152px"
          priority={priority}
        />
      </div>
      <div className="flex flex-col items-center gap-2 py-14 text-center">
        <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.25em] md:text-xs">
          {title}
        </h2>
        {subtitle ? (
          <p className="text-[0.65rem] uppercase tracking-[0.18em] text-neutral-600">
            {subtitle}
          </p>
        ) : null}
        <ShopButton />
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <section className="relative w-full">
        <div className="relative aspect-[3/4] w-full md:aspect-[21/9] md:max-h-[min(90vh,900px)] md:min-h-[420px]">
          <Image
            src={IMAGES.hero}
            alt="New collection campaign"
            fill
            className="object-cover object-[center_20%]"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/10" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 flex justify-center pb-12 md:pb-16">
            <p className="text-center text-[0.65rem] font-normal uppercase tracking-[0.28em] text-white drop-shadow-sm md:text-xs">
              Shop the new collection
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-16 text-center md:py-20">
        <p className="text-sm font-normal leading-relaxed text-neutral-700 md:text-[0.95rem]">
          We craft timeless pieces that celebrate heritage and modern elegance.
          Each collection tells a story of artistry, restraint, and quiet
          luxury. We craft timeless pieces that celebrate heritage and modern elegance.
          Each collection tells a story of artistry, restraint.
        </p>
        <div className="mt-8 flex justify-center text-neutral-800" aria-hidden>
          <svg
            className="h-8 w-14"
            viewBox="0 0 56 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 10h48M28 4c0 4 0 8 4 10M28 4c0 4 0 8-4 10"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>

      <div className="flex flex-col gap-4 md:gap-8">
        <SectionBlock
          imageSrc={IMAGES.collection}
          imageAlt="Models in the new collection"
          title="SIGNATURE"
        />
        <SectionBlock
          imageSrc={IMAGES.highJewellery}
          imageAlt="High jewellery necklace"
          title="CLASSIC"
          // subtitle="Explore the collection"
        />

        <section className="mx-auto w-full max-w-8xl px-4 md:px-8">
          <div
            className={`${sectionMediaShellClassName} overflow-hidden bg-neutral-900`}
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={CAMPAIGN_VIDEO_SRC}
              autoPlay
              muted
              loop
              playsInline
              aria-label="Campaign film"
            />
          </div>
          <div className="flex flex-col items-center gap-4 py-14 text-center">
            <h2 className="text-[0.7rem] font-normal uppercase tracking-[0.25em] md:text-xs">
              The campaign
            </h2>
            {/* <p className="text-[0.65rem] uppercase tracking-[0.18em] text-neutral-600">
              Watch the film
            </p> */}
            <ShopButton />
          </div>
        </section>

        <SectionBlock
          imageSrc={IMAGES.resort}
          imageAlt="Resort wear"
          title="HERITAGE"
        />
        <SectionBlock
          imageSrc={IMAGES.bridal}
          imageAlt="Bridal look"
          title="FLORENCE"
        />
      </div>
    </>
  );
}
