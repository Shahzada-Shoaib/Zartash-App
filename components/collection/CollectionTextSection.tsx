import { fontSansClass } from "@/lib/typography-classes";

export function CollectionTextSection({
  eyebrow,
  body,
}: {
  eyebrow?: string;
  body: string;
}) {
  return (
    <section
      className={`${fontSansClass} border-t border-neutral-200/80 bg-white`}
      aria-label={eyebrow ?? "Collection introduction"}
    >
      <div className="mx-auto max-w-2xl px-5 py-9 text-center md:px-8 md:py-20">
        {eyebrow ? (
          <p className="text-[0.62rem] font-normal uppercase tracking-[0.32em] text-neutral-400">
            {eyebrow}
          </p>
        ) : null}
        <p
          className={`text-sm font-normal leading-relaxed text-neutral-600 md:text-base md:leading-relaxed ${eyebrow ? "mt-3 md:mt-6" : ""}`}
        >
          {body}
        </p>
      </div>
    </section>
  );
}
