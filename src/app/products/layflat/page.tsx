import type { Metadata } from "next";
import { products } from "@/components/data/products";
import { ProductList } from "@/components/product/ProductList";
import Breadcrumb from "@/components/ui/breadcrumb";
import PageLayout from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "لوله‌های لی‌فلت و تاشو کشاورزی | سدید پلیمر",
  description:
    "تولید و عرضه تخصصی لوله‌های لی‌فلت (تاشو) پلی‌اتیلن مقاوم در برابر اشعه UV و فشار کاری استاندارد جهت آبیاری مزارع و باغات.",
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
