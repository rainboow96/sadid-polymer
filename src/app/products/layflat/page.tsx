import type { Metadata } from "next";
import { products } from "@/components/data/products";
import { ProductList } from "@/components/product/ProductList";
import Breadcrumb from "@/components/ui/breadcrumb";
import PageLayout from "@/components/layout/PageLayout";

const SITE_URL = "https://sadidpolymer.ir";

export const metadata: Metadata = {
  title: "خرید و قیمت لوله لی فلت و شلنگ آبیاری | سدید پلیمر",
  description:
    "تولید و فروش انواع لوله لی‌فلت، لیفلت و لیفت تاشو و شلنگ آبیاری کشاورزی پلی‌اتیلن، مقاوم در برابر نور خورشید و فشار بالا با ضمانت کیفیت کارخانه سدید پلیمر.",
  keywords: [
    "لوله لی فلت",
    "لوله لیفلت",
    "لوله لیفت",
    "لوله تاشو کشاورزی",
    "شلنگ ابیاری کشاورزی",
    "قیمت لوله لی فلت",
    "قیمت لوله لیفلت",
    "سدید پلیمر",
  ],
  alternates: {
    canonical: `${SITE_URL}/products/layflat`,
  },
  openGraph: {
    title: "خرید و قیمت لوله لی فلت و شلنگ آبیاری | سدید پلیمر",
    description:
      "تولید و فروش انواع لوله لی‌فلت (لیفلت) تاشو و شلنگ آبیاری کشاورزی مقاوم در برابر فشار و UV.",
    url: `${SITE_URL}/products/layflat`,
    siteName: "سدید پلیمر",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "لوله لی فلت و شلنگ آبیاری سدید پلیمر",
      },
    ],
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
    name: "خرید و قیمت لوله لی فلت، لیفلت و شلنگ آبیاری کشاورزی",
    description:
      "تولید و فروش انواع لوله لی‌فلت تاشو، لیفلت و شلنگ آبیاری کشاورزی و باغبانی پلی‌اتیلن مقاوم در برابر UV.",
    url: `${SITE_URL}/products/layflat`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: filtered.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `${SITE_URL}/products/layflat/${product.slug}`,
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
        title="انواع لوله‌های تاشو لی‌فلت و لیفلت"
        description="تمامی محصولات لی‌فلت و لیفت کشاورزی با مواد اولیه درجه یک پلی‌اتیلن، مقاوم در برابر اشعه UV و با بالاترین استانداردهای صنعتی سدید پلیمر تولید می‌شوند."
        products={filtered}
      />
    </PageLayout>
  );
}
