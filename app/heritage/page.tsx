import { CollectionPage } from "@/components/collections/CollectionPage";
import { COLLECTIONS } from "@/lib/collections";

const c = COLLECTIONS.heritage;

export const metadata = {
  title: `${c.documentTitle} — Zartash`,
  description: c.intro,
};

export default function HeritagePage() {
  return <CollectionPage slug="heritage" priority />;
}
