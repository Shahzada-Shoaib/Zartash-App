import Image from "next/image";

export function CollectionTextSection({
  // eyebrow,
  body,
}: {
  // eyebrow?: string;
  body: string;
}) {
  return (
    <section className="mx-auto max-w-2xl px-5 py-10 text-center md:py-14">
      <p className="text-sm font-normal leading-relaxed text-neutral-700 md:text-[0.95rem]">
        {body}
      </p>
      <div
        className="mt-5 flex h-6 justify-center text-neutral-800 md:mt-6 md:h-7"
        aria-hidden
      >
        <Image
          src="/Home-page-pics/bird-homepage.png"
          alt=""
          width={24}
          height={24}
          className="h-full w-auto object-contain object-center"
          sizes="(max-width: 768px) 20px, 24px"
        />
      </div>
    </section>
  );
}
