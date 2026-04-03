export function ShopButton({ label = "Shop now" }: { label?: string }) {
  return (
    <a
      href="#"
      className="inline-block bg-black px-10 py-3 text-[0.65rem] font-normal uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90"
    >
      {label}
    </a>
  );
}
