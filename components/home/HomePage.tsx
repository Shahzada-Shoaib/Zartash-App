import Image from "next/image";

import { SectionBlock } from "@/components/home/SectionBlock";
import { ShopButton } from "@/components/home/ShopButton";
import { COLLECTIONS } from "@/lib/collections";

const IMAGES = {
  hero: "/Home-page-pics/hero-section-banner.avif",
  heroMobile: "/mob-banners/main-banner.png",
} as const;

const CAMPAIGN_VIDEO_SRC = "/Zartash-home-page.mp4";

export function HomePage() {
  return (
    <>
      <section className="relative w-full">
        <div className="relative aspect-[3/4] w-full max-h-[100dvh] md:aspect-[21/9] md:max-h-[min(90vh,900px)] md:min-h-[420px]">
          <Image
            src={IMAGES.hero}
            alt="New collection campaign"
            fill
            className="hidden object-cover object-[center_20%] md:block"
            sizes="(max-width: 767px) 0vw, 100vw"
            priority
          />
          <Image
            src={IMAGES.heroMobile}
            alt="New collection campaign"
            fill
            className="object-cover object-center md:hidden"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/10" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 flex justify-center pb-6 md:pb-12">
            <p className="text-center text-[0.65rem] font-normal uppercase tracking-[0.28em] text-white drop-shadow-sm md:text-xs">
              Shop the new collection
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-5 py-10 text-center md:py-14">
        <p className="text-sm font-normal leading-relaxed text-neutral-700 md:text-[0.95rem]">
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

      <div className="flex flex-col gap-2 md:gap-5">
        <SectionBlock
          imageSrc={COLLECTIONS.heritage.imageSrc}
          mobileImageSrc="/mob-banners/mob-heritage-banner.png"
          imageAlt={COLLECTIONS.heritage.imageAlt}
          title={COLLECTIONS.heritage.navLabel}
          shopHref={COLLECTIONS.heritage.path}
          priority
        />
        <SectionBlock
          imageSrc={COLLECTIONS.signature.imageSrc}
          mobileImageSrc="/mob-banners/mob-signature.png"
          imageAlt={COLLECTIONS.signature.imageAlt}
          title={COLLECTIONS.signature.navLabel}
          shopHref={COLLECTIONS.signature.path}
        />
         <section className="mx-auto w-full max-w-8xl px-3 md:px-6">
          <div className="relative aspect-[3/2] w-full max-h-[100dvh] overflow-hidden bg-neutral-900 md:aspect-[4/3]">
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
          <div className="flex flex-col items-center gap-3 py-9 text-center md:py-10">
            <h2 className="text-[0.7rem] text-black font-bold uppercase tracking-[0.25em] md:text-xs">
              The campaign
            </h2>
            {/* <p className="text-[0.65rem] uppercase tracking-[0.18em] text-neutral-600">
              Watch the film
            </p> */}
            <ShopButton />
          </div>
        </section>
        <SectionBlock
          imageSrc={COLLECTIONS.florance.imageSrc}
          mobileImageSrc="/mob-banners/mob-florance.png"
          imageAlt={COLLECTIONS.florance.imageAlt}
          title={COLLECTIONS.florance.navLabel}
          shopHref={COLLECTIONS.florance.path}
        />
        <SectionBlock
          imageSrc={COLLECTIONS.classic.imageSrc}
          mobileImageSrc="/mob-banners/mob-classic.png"
          imageAlt={COLLECTIONS.classic.imageAlt}
          title={COLLECTIONS.classic.navLabel}
          shopHref={COLLECTIONS.classic.path}
        />

       
      </div>
    </>
  );
}
