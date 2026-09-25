import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/breadcrumb";
import { products } from "@/components/data/products";
import { ProductList } from "@/components/product/ProductList";
import PageLayout from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "کیسه‌های کاشت نهال و گروبگ | سدید پلیمر",
  description:
    "عرضه و فروش تخصصی انواع کیسه کاشت نهال و نایلون گروبگ در ابعاد استاندارد و ابعاد سفارشی به قیمت عمده.",
};

export default function BagsPage() {
  const filtered = products.filter((p) => p.category === "bags");

  const breadcrumbItems = [
    { label: "صفحه اصلی", href: "/" },
    { label: "کیسه‌های کاشت نهال" },
  ];

  return (
    <PageLayout>
      <Breadcrumb className="mb-3 sm:mb-4" items={breadcrumbItems} />
      <ProductList
        title="فروش انواع کیسه کاشت نهال (گروبگ)"
        description="عرضه مستقیم کیسه‌های کاشت با متریال مرغوب، مقاوم در برابر نور آفتاب و دارای زهکشی استاندارد. علاوه بر سایزهای زیر، فروش در هر ابعاد و سایز سفارشی به درخواست مشتری امکان‌پذیر است."
        products={filtered}
      />
    </PageLayout>
  );
}
