import type { Metadata } from "next";
import { products } from "@/components/data/products";
import { ProductList } from "@/components/product/ProductList";
import Breadcrumb from "@/components/ui/breadcrumb";
import PageLayout from "@/components/layout/PageLayout";

const SITE_URL = "https://sadidpolymer.ir";

export const metadata: Metadata = {
  title: "خرید و قیمت لوله لی فلت و شلنگ آبیاری کشاورزی | سدید پلیمر",
  description:
    "تولید و فروش انواع لوله لی‌فلت (لوله تاشو) و شلنگ آبیاری کشاورزی و باغبانی پلی‌اتیلن، مقاوم در برابر اشعه UV و فشار بالا با ضمانت کیفیت سدید پلیمر.",
  keywords: [
    "لوله لی فلت",
    "لوله تاشو کشاورزی",
    "شلنگ ابیاری کشاورزی",
    "شلنگ باغبانی",
    "قیمت لوله لی فلت",
    "خرید شلنگ ابیاری",
    "سدید پلیمر",
  ],
  alternates: {
    canonical: `${SITE_URL}/products/layflat-hose`,
  },
  openGraph: {
    title: "خرید و قیمت لوله لی فلت و شلنگ آبیاری کشاورزی | سدید پلیمر",
    description:
      "تولید و فروش انواع لوله لی‌فلت، تاشو و شلنگ آبیاری کشاورزی مقاوم در برابر آفتاب و فشار.",
    url: `${SITE_URL}/products/layflat-hose`,
    siteName: "سدید پلیمر",
    locale: "fa_IR",
    type: "website",
  },
};

export default function LayflatPage() {
  const filtered = products.filter((p) => p.category === "layflat");

  const breadcrumbItems = [
    { label: "صفحه اصلی", href: "/" },
    { label: "لوله‌های لی‌فلت" },
  ];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "خرید و قیمت لوله لی فلت و شلنگ آبیاری کشاورزی",
    description:
      "تولید و فروش انواع لوله لی‌فلت تاشو و شلنگ آبیاری کشاورزی و باغبانی پلی‌اتیلن مقاوم در برابر UV.",
    url: `${SITE_URL}/products/layflat-hose`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: filtered.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `${SITE_URL}/products/layflat-hose/${product.slug}`,
      })),
    },
  };

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <Breadcrumb className="mb-3 sm:mb-4" items={breadcrumbItems} />
      <ProductList
        title="انواع لوله‌های تاشو لی‌فلت"
        description="تمامی محصولات با مواد اولیه درجه یک، مقاوم در برابر UV و با بالاترین استانداردهای صنعتی تولید می‌شوند."
        products={filtered}
      />
    </PageLayout>
  );
}
