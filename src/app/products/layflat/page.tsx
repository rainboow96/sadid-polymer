import { products } from "../../../components/data/products";
import { ProductList } from "../../../components/product/ProductList";
import Breadcrumb from "@/components/ui/breadcrumb";

export const metadata = { title: "لوله‌های لی‌فلت" };

export default function LayflatPage() {
  const filtered = products.filter((p) => p.slug.includes("layflat"));

  const breadcrumbItems = [
    { label: "صفحه اصلی", href: "/" },
    { label: "لوله‌های لی‌فلت" },
  ];

  return (

    <main className="min-h-screen pt-28 pb-16 sm:pt-32 lg:pt-34">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* نوار برودکرامب با فاصله مناسب از عنوان زیرین */}
        <div className="mb-4 sm:mb-6" dir="rtl">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* لیست محصولات کاملاً تمیز و تراز */}
        <ProductList
          title="انواع لوله‌های تاشو لی‌فلت"
          description="تمامی محصولات با مواد اولیه درجه یک، مقاوم در برابر UV و با بالاترین استانداردهای صنعتی تولید می‌شوند."
          products={filtered}
        />
      </div>
    </main>
  );
}
