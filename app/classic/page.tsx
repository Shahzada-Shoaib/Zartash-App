import { CollectionPage } from "@/components/collections/CollectionPage";
import { COLLECTIONS } from "@/lib/collections";

const c = COLLECTIONS.classic;

export const metadata = {
  title: `${c.documentTitle} — Zartash`,
  description: c.intro,
};

export default function ClassicPage() {
  return <CollectionPage slug="classic" priority />;
}
