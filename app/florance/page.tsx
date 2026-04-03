import { CollectionPage } from "@/components/collections/CollectionPage";
import { COLLECTIONS } from "@/lib/collections";

const c = COLLECTIONS.florance;

export const metadata = {
  title: `${c.documentTitle} — Zartash`,
  description: c.intro,
};

export default function FlorancePage() {
  return <CollectionPage slug="florance" priority />;
}
