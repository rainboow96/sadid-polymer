import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/breadcrumb";
import { products } from "@/components/data/products";
import { ProductList } from "@/components/product/ProductList";
import PageLayout from "@/components/layout/PageLayout";

const SITE_URL = "https://sadidpolymer.ir";

export const metadata: Metadata = {
  title: "خرید کیسه کشت و گروبگ کشاورزی (لیست قیمت عمده) | سدید پلیمر",
  description:
    "مرکز فروش و تولید عمده انواع کیسه کشت نهال و گروبگ (Grow Bag) هیدروپونیک در ابعاد استاندارد و سفارشی با زه‌کشی دقیق و قیمت مستقیم کارخانه.",
  keywords: [
    "کیسه کشت",
    "خرید گروبگ",
    "قیمت گروبگ",
    "گروبک",
    "کیسه کاشت نهال",
    "گروبگ کشاورزی",
    "گروبگ هیدروپونیک",
    "کیسه نهال نایلونی",
    "سدید پلیمر",
  ],
  alternates: {
    canonical: `${SITE_URL}/products/bags`,
  },
  openGraph: {
    title: "خرید و قیمت انواع کیسه کشت و گروبگ کشاورزی | سدید پلیمر",
    description:
      "تولید تخصصی کیسه کشت نایلونی و گروبگ مقاوم به UV با بهترین قیمت تولیدی و ارسال به سراسر کشور.",
    url: `${SITE_URL}/products/bags`,
    siteName: "سدید پلیمر",
    locale: "fa_IR",
    type: "website",
  },
};

export default function BagsPage() {
  const filtered = products.filter((p) => p.category === "bags");

  const breadcrumbItems = [
    { label: "صفحه اصلی", href: "/" },
    { label: "کیسه‌های کاشت نهال" },
  ];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "کیسه‌های کاشت نهال و نایلون گروبگ",
    description:
      "عرضه مستقیم کیسه‌های کاشت با متریال مرغوب، مقاوم در برابر نور آفتاب و دارای زهکشی استاندارد در ابعاد متنوع و سفارشی.",
    url: `${SITE_URL}/products/bags`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: filtered.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `${SITE_URL}/products/bags/${product.slug}`,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "صفحه اصلی",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "کیسه‌های کاشت نهال",
        item: `${SITE_URL}/products/bags`,
      },
    ],
  };

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumb className="mb-3 sm:mb-4" items={breadcrumbItems} />
      <ProductList
        title="فروش و قیمت انواع کیسه کشت و گروبگ (Grow Bag)"
        description="عرضه مستقیم و عمده انواع کیسه کشت و گروبگ هیدروپونیک با متریال ضد UV و پانچ زهکشی مناسب. امکان تولید در ابعاد و ضخامت‌های سفارشی برای انواع نهال و صیفی‌جات."
        products={filtered}
      />

    </PageLayout>
  );
}
