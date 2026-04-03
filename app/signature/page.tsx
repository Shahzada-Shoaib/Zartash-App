import { CollectionPage } from "@/components/collections/CollectionPage";
import { COLLECTIONS } from "@/lib/collections";

const c = COLLECTIONS.signature;

export const metadata = {
  title: `${c.documentTitle} — Zartash`,
  description: c.intro,
};

export default function SignaturePage() {
  return <CollectionPage slug="signature" priority />;
}
