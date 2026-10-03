import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/breadcrumb";
import { products } from "@/components/data/products";
import { ProductList } from "@/components/product/ProductList";
import PageLayout from "@/components/layout/PageLayout";

const SITE_URL = "https://www.sadidpolymer.ir";

export const metadata: Metadata = {
  title: "خرید و قیمت کیسه کاشت نهال و گروبگ | سدید پلیمر",
  description:
    "فروش عمده انواع کیسه کاشت نهال، نایلون گروبگ کشاورزی، گلدان نایلونی مشکی در ابعاد استاندارد و سفارشی با متریال مقاوم و زهکشی استاندارد به قیمت تولیدی.",
  keywords: [
    "کیسه کاشت نهال",
    "گروبگ",
    "کیسه نهال",
    "قیمت کیسه کاشت نهال",
    "خرید گروبگ هیدروپونیک",
    "گلدان نایلونی",
    "گلدان پلاستیکی",
    "نایلون کشاورزی نهال",
    "سدید پلیمر",
  ],
  alternates: {
    canonical: `${SITE_URL}/products/bags`,
  },
  openGraph: {
    title: "خرید و قیمت انواع کیسه کاشت نهال و گروبگ | سدید پلیمر",
    description:
      "تولید و عرضه تخصصی انواع کیسه نهال و گروبگ در ابعاد سفارشی و استاندارد، مقاوم در برابر آفتاب و دارای پانچ زهکشی مناسب.",
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
        title="فروش انواع کیسه کاشت نهال (گروبگ)"
        description="عرضه مستقیم کیسه‌های کاشت با متریال مرغوب، مقاوم در برابر نور آفتاب و دارای زهکشی استاندارد. علاوه بر سایزهای زیر، فروش در هر ابعاد و سایز سفارشی به درخواست مشتری امکان‌پذیر است."
        products={filtered}
      />
    </PageLayout>
  );
}
