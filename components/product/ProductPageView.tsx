import { MoodBanner } from "@/components/product/MoodBanner";
import { ProductSpotlight } from "@/components/product/ProductSpotlight";
import { StatementWithGrid } from "@/components/product/StatementWithGrid";
import { productPageContent } from "@/lib/product-page-content";

export function ProductPageView() {
  const { spotlight, statement, thumbs, mood } = productPageContent;

  return (
    <>
      <ProductSpotlight content={spotlight} />
      <StatementWithGrid statement={statement} thumbs={thumbs} />
      <MoodBanner image={mood} />
    </>
  );
}
