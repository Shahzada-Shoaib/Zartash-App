import Image from "next/image";

const NAV_LINKS = [
  "SIGNATURE",
  "CLASSIC",
  "HERITAGE",
  "FLORANCE",
] as const;

export function Header() {
  return (
    <header className="border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-4 py-5 md:gap-2 md:px-8 md:py-3">
        <a
          href="/"
          className="block h-16 max-w-none w-fit shrink-0 md:h-20 lg:h-20"
        >
          <Image
            src="/zartash-logo.webp"
            alt="Zartash"
            width={960}
            height={320}
            className="h-full w-auto max-w-none object-contain object-center"
            sizes="(max-width: 768px) 90vw, 24rem"
            priority
          />
        </a>
        <nav
          aria-label="Main"
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[0.72rem] uppercase tracking-[0.2em] text-white md:gap-x-28 md:gap-y-1 md:text-[0.82rem]"
        >
          {NAV_LINKS.map((label) => (
            <a key={label} href="#" className="hover:opacity-60">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
