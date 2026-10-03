import type { Metadata } from "next";
import { products } from "@/components/data/products";
import { ProductList } from "@/components/product/ProductList";
import Breadcrumb from "@/components/ui/breadcrumb";
import PageLayout from "@/components/layout/PageLayout";

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
    canonical: "https://www.sadidpolymer.ir/products/layflat-hose",
  },
  openGraph: {
    title: "خرید و قیمت لوله لی فلت و شلنگ آبیاری کشاورزی | سدید پلیمر",
    description:
      "تولید و فروش انواع لوله لی‌فلت، تاشو و شلنگ آبیاری کشاورزی مقاوم در برابر آفتاب و فشار.",
    url: "https://www.sadidpolymer.ir/products/layflat-hose",
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

  return (
    <PageLayout>
      <Breadcrumb className="mb-3 sm:mb-4" items={breadcrumbItems} />
      <ProductList
        title="انواع لوله‌های تاشو لی‌فلت"
        description="تمامی محصولات با مواد اولیه درجه یک، مقاوم در برابر UV و با بالاترین استانداردهای صنعتی تولید می‌شوند."
        products={filtered}
      />
    </PageLayout>
  );
}
