export type CollectionSlug = "signature" | "classic" | "heritage" | "florance";

const q = "auto=format&fit=crop&w=2400&q=85";

const SPLIT_VIDEO_SRC = "/Zartash-home-page.mp4";

export type CollectionStripImage = { src: string; alt: string };

export type CollectionSpotlight = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  body: string;
};

export type CollectionSplitMedia = {
  videoSrc: string;
  imageSrc: string;
  imageAlt: string;
  videoLabel?: string;
};

export type CollectionConfig = {
  slug: CollectionSlug;
  path: `/${string}`;
  navLabel: string;
  documentTitle: string;
  imageSrc: string;
  imageAlt: string;
  heroKicker: string;
  tagline: string;
  intro: string;
  splitMedia: CollectionSplitMedia;
  spotlight: CollectionSpotlight;
  stripImages: readonly [CollectionStripImage, CollectionStripImage, CollectionStripImage];
  banner: { src: string; alt: string };
};

export const COLLECTIONS: Record<CollectionSlug, CollectionConfig> = {
  heritage: {
    slug: "heritage",
    path: "/heritage",
    navLabel: "HERITAGE",
    documentTitle: "Heritage",
    imageSrc: "/Home-page-pics/heritage-banner.avif",
    imageAlt: "Heritage collection",
    heroKicker: "Lineage",
    tagline: "Tradition, translated for today.",
    intro:
      "Heritage weaves archival motifs into modern proportion—rich texture.",
    splitMedia: {
      videoSrc: SPLIT_VIDEO_SRC,
      imageSrc: "/Home-page-pics/heritage-banner.avif",
      imageAlt: "Heritage collection",
      videoLabel: "Heritage collection film",
    },
    spotlight: {
      imageSrc: `https://images.unsplash.com/photo-1586075010923-2dd4570fb338?${q}`,
      imageAlt: "Folded natural linen fabric",
      title: "Loom scarf",
      body:
        "Hand-finished edges and an open weave that softens with wear. Drapes cleanly at the neck or as a wrap for travel.",
    },
    stripImages: [
      {
        src: `https://images.unsplash.com/photo-1509631179647-0177331693ae?${q}`,
        alt: "Textile and thread detail",
      },
      {
        src: `https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?${q}`,
        alt: "Tailored sleeve and cuff",
      },
      {
        src: `https://images.unsplash.com/photo-1483985988355-763728e1935b?${q}`,
        alt: "Warm interior with natural light",
      },
    ],
    banner: {
      src: `https://images.unsplash.com/photo-1445205170230-053b83016050?${q}`,
      alt: "Gallery hallway with warm light",
    },
  },
  signature: {
    slug: "signature",
    path: "/signature",
    navLabel: "SIGNATURE",
    documentTitle: "Signature",
    imageSrc: "/Home-page-pics/signature-banner.avif",
    imageAlt: "Signature collection",
    heroKicker: "Collection",
    tagline: "Quiet confidence, cut with precision.",
    intro:
      "Signature distills our house codes into confident silhouettes and refined detail—pieces for everyday elevation with lasting presence.",
    splitMedia: {
      videoSrc: SPLIT_VIDEO_SRC,
      imageSrc: "/Home-page-pics/signature-banner.avif",
      imageAlt: "Signature collection",
      videoLabel: "Signature collection film",
    },
    spotlight: {
      imageSrc: `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?${q}`,
      imageAlt: "Gold chain necklace on neutral background",
      title: "Arc collar",
      body:
        "A weighty, hand-polished link that sits at the collarbone. Designed to read sculptural alone or layered with fine chains.",
    },
    stripImages: [
      {
        src: `https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?${q}`,
        alt: "Portrait in soft studio light",
      },
      {
        src: `https://images.unsplash.com/photo-1496747611176-843222e1e57c?${q}`,
        alt: "Editorial full-length look",
      },
      {
        src: `https://images.unsplash.com/photo-1483985988355-763728e1935b?${q}`,
        alt: "Styling detail and silhouette",
      },
    ],
    banner: {
      src: `https://images.unsplash.com/photo-1441986300917-64674bd600d8?${q}`,
      alt: "Minimal boutique interior",
    },
  },
  florance: {
    slug: "florance",
    path: "/florance",
    navLabel: "FLORANCE",
    documentTitle: "Florance",
    imageSrc: "/Home-page-pics/Florance-banner.avif",
    imageAlt: "Florance collection",
    heroKicker: "Occasion",
    tagline: "Light, drape, and the art of arrival.",
    intro:
      "Florance is our most romantic edit—sculptural drape, soft light, and occasion pieces composed with intentional grace.",
    splitMedia: {
      videoSrc: SPLIT_VIDEO_SRC,
      imageSrc: "/Home-page-pics/Florance-banner.avif",
      imageAlt: "Florance collection",
      videoLabel: "Florance collection film",
    },
    spotlight: {
      imageSrc: `https://images.unsplash.com/photo-1522673607200-164d1b6ce486?${q}`,
      imageAlt: "Wedding dress fabric and train detail",
      title: "Veil stud",
      body:
        "A single freshwater pearl on a needle-fine post. Designed to disappear into the ear and catch candlelight at dinner.",
    },
    stripImages: [
      {
        src: `https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?${q}`,
        alt: "Bouquet in bride's hands",
      },
      {
        src: `https://images.unsplash.com/photo-1519225421980-715cb0215aed?${q}`,
        alt: "Celebration table setting",
      },
      {
        src: `https://images.unsplash.com/photo-1511285560929-80b456fea0bc?${q}`,
        alt: "Soft floral arrangement",
      },
    ],
    banner: {
      src: `https://images.unsplash.com/photo-1496747611176-843222e1e57c?${q}`,
      alt: "Open landscape at golden hour",
    },
  },
  classic: {
    slug: "classic",
    path: "/classic",
    navLabel: "CLASSIC",
    documentTitle: "Classic",
    imageSrc: `https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?${q}`,
    imageAlt: "High jewellery necklace on skin",
    heroKicker: "High craft",
    tagline: "Forms that outlive the moment.",
    intro:
      "Classic honours enduring shapes and patient setting work—jewellery that feels timeless yet unmistakably contemporary.",
    splitMedia: {
      videoSrc: SPLIT_VIDEO_SRC,
      imageSrc: `https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?${q}`,
      imageAlt: "High jewellery necklace on skin",
      videoLabel: "Classic collection film",
    },
    spotlight: {
      imageSrc: `https://images.unsplash.com/photo-1605100804763-247f67b3557e?${q}`,
      imageAlt: "Diamond ring on white surface",
      title: "Solstice band",
      body:
        "A low-profile pavé band with milgrain detail along the edge. Light catches in a soft, continuous line—made to stack or wear alone.",
    },
    stripImages: [
      {
        src: `https://images.unsplash.com/photo-1490481651871-ab68de25d43d?${q}`,
        alt: "Jewellery still life with earrings",
      },
      {
        src: `https://images.unsplash.com/photo-1611591437281-460bfbe1220a?${q}`,
        alt: "Hands adjusting a bracelet",
      },
      {
        src: `https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?${q}`,
        alt: "Close-up of gemstone setting",
      },
    ],
    banner: {
      src: `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?${q}`,
      alt: "Gold jewellery atelier surface",
    },
  },
};

export const COLLECTION_SLUGS: CollectionSlug[] = [
  "heritage",
  "signature",
  "florance",
  "classic",
];

const HEADER_COLLECTION_ORDER: readonly CollectionSlug[] = [
  "heritage",
  "signature",
  "classic",
  "florance",
];

export const HEADER_COLLECTION_DROPDOWN_ITEMS = HEADER_COLLECTION_ORDER.map(
  (slug) => ({
    slug,
    label: COLLECTIONS[slug].documentTitle,
    href: COLLECTIONS[slug].path,
  }),
);
