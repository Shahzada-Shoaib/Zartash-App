import { ProductPageView } from "@/components/product/ProductPageView";
import { productPageMetadata } from "@/lib/product-page-content";

export const metadata = {
  title: productPageMetadata.title,
  description: productPageMetadata.description,
};

export default function ProductPage() {
  return <ProductPageView />;
}
