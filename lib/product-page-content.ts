export type ProductImage = { src: string; alt: string };

export type ProductSpotlightContent = {
  src: string;
  alt: string;
  title: string;
  body: string;
  exploreHref: string;
  exploreLabel?: string;
};

const q = "auto=format&fit=crop&w=2400&q=85";

export const productPageMetadata = {
  title: "Zartash — Product",
  description: "Explore featured pieces and campaign imagery.",
};

export const productPageContent = {
  spotlight: {
    src: `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?${q}`,
    alt: "Gold necklace on neutral background",
    title: "Column line",
    body:
      "A study in weight and proportion. Each link is polished by hand and finished with a discrete clasp that sits flush at the nape.",
    exploreHref: "/signature",
    exploreLabel: "View collection",
  } satisfies ProductSpotlightContent,
  statement: {
    src: `https://images.unsplash.com/photo-1441986300917-64674bd600d8?${q}`,
    alt: "Boutique interior",
  } satisfies ProductImage,
  thumbs: [
    {
      src: `https://images.unsplash.com/photo-1605100804763-247f67b3557e?${q}`,
      alt: "Jewellery detail",
    },
    {
      src: `https://images.unsplash.com/photo-1611591437281-460bfbe1220a?${q}`,
      alt: "Bracelet on wrist",
    },
    {
      src: `https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?${q}`,
      alt: "Gemstone close-up",
    },
  ] as const satisfies readonly [ProductImage, ProductImage, ProductImage],
  mood: {
    src: `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?${q}`,
    alt: "Gold surface and light",
  } satisfies ProductImage,
};
