import { products } from "../../../components/data/products";
import { ProductList } from "../../../components/product/ProductList";
import Breadcrumb from "@/components/ui/breadcrumb";

export const metadata = { 
  title: "کیسه‌های کاشت نهال و گروبگ | سدید پلیمر",
  description: "عرضه و فروش تخصصی انواع کیسه کاشت نهال و نایلون گروبگ در ابعاد استاندارد و ابعاد سفارشی به قیمت عمده."
};

export default function BagsPage() {

  const filtered = products.filter((p) => p.category === "bags");

  const breadcrumbItems = [
    { label: "صفحه اصلی", href: "/" },
    { label: "کیسه‌های کاشت نهال" },
  ];

  return (
    <main className="min-h-screen pt-28 pb-16 sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-4 sm:mb-6" dir="rtl">
          <Breadcrumb items={breadcrumbItems} />
        </div>


        <ProductList
          title="فروش انواع کیسه کاشت نهال (گروبگ)"
          description="عرضه مستقیم کیسه‌های کاشت با متریال مرغوب، مقاوم در برابر نور آفتاب و دارای زهکشی استاندارد. علاوه بر سایزهای زیر، فروش در هر ابعاد و سایز سفارشی به درخواست مشتری امکان‌پذیر است."
          products={filtered}
        />
      </div>
    </main>
  );
}
