import Image from "next/image";

const LEFT_IMAGE_SRC = "/Home-page-pics/Zartash-Images-1.avif";
const RIGHT_IMAGE_SRC = "/Home-page-pics/Zartash-Images-2.avif";

export function CollectionImageImageSplit() {
  return (
    <>
    <section className="mx-auto max-w-7xl border-t border-neutral-200/80 bg-white py-8 md:py-12">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-4 px-4 md:grid-cols-2 md:gap-8 md:px-6">
        <div className="relative aspect-[2/3] w-full overflow-hidden bg-neutral-100 md:aspect-[3/4]">
          <Image
            src={LEFT_IMAGE_SRC}
            alt="Accessories detail view"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative aspect-[2/3] w-full overflow-hidden bg-neutral-100 md:aspect-[3/4]">
          <Image
            src={RIGHT_IMAGE_SRC}
            alt="Accessories styled look"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>

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
</>
  );
}
