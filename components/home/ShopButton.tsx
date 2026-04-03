import Link from "next/link";

const className =
  "inline-block bg-black px-10 py-3 text-[0.65rem] font-normal uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90";

export function ShopButton({
  label = "Shop now",
  href = "#",
}: {
  label?: string;
  href?: string;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
}
