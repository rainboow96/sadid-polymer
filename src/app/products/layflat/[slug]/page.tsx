import { notFound } from "next/navigation";
import Link from "next/link";
import { PhoneCall, CheckCircle2, ChevronLeft } from "lucide-react";
import { products } from "@/components/data/products";
import { Button } from "@/components/ui/button";
import { ProductGallery } from "@/components/product/ProductGallery";
import Breadcrumb from "@/components/ui/breadcrumb";



type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products
    .filter((p) => p.category === "layflat")
    .map((product) => ({
      slug: product.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "محصول یافت نشد" };

  return {
    title: `${product.name} | سدید پلیمر`,
    description: product.shortDescription,
  };
}


export default async function LayflatProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "صفحه اصلی", href: "/" },
    { label: "لوله‌های لی‌فلت", href: "/products/layflat" },
    { label: product.name }, 
  ];

  return (
    <main className="min-h-screen text-white pt-34 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/5">
          <Breadcrumb items={breadcrumbItems} />
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <div className="space-y-4">
            <ProductGallery
              images={product.images || []}
              title={product.name}
            />
          </div>


          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                {product.name}
              </h1>
            </div>


            <p className="text-slate-300 leading-relaxed text-base border-b border-white/10 pb-6">
              {product.shortDescription}
            </p>

            <p className="text-slate-400 leading-relaxed text-sm">
              {product.description}
            </p>

            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5 space-y-3">
              <h2 className="font-semibold text-cyan-300 text-sm">مشخصات و ویژگی‌ها:</h2>
              <ul className="space-y-2 text-sm text-slate-300">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-400 hover:to-blue-500 gap-2 shadow-[0_0_25px_rgba(6,182,212,0.3)]"
                render={
                  <a href="tel:09372796015">
                    <PhoneCall className="size-4" />
                    استعلام قیمت و مشاوره تلفنی
                  </a>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
