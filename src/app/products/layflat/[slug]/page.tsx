import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhoneCall, CheckCircle2, Scale } from "lucide-react";
import { products } from "@/components/data/products";
import { Button } from "@/components/ui/button";
import { ProductGallery } from "@/components/product/ProductGallery";
import Breadcrumb from "@/components/ui/breadcrumb";
import PageLayout from "@/components/layout/PageLayout";

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "محصول یافت نشد | سدید پلیمر" };

  return {
    title: `${product.name} | سدید پلیمر`,
    description: product.shortDescription,
    alternates: {
      canonical: `/products/layflat/${product.slug}`,
    },
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
    <PageLayout>
      <Breadcrumb className="mb-4" items={breadcrumbItems} />

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <ProductGallery
            images={product.images || []}
            title={product.name}
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gradient sm:text-3xl">
              {product.name}
            </h1>
          </div>

          <p className="border-b border-white/10 pb-6 text-base leading-relaxed text-slate-300">
            {product.shortDescription}
          </p>

          <p className="text-sm leading-relaxed text-slate-400">
            {product.description}
          </p>

          <div className="space-y-3 rounded-2xl bg-slate-900/50 p-5">
            <h2 className="text-sm font-semibold text-cyan-300">
              مشخصات و ویژگی‌ها:
            </h2>
            <ul className="space-y-2 text-sm text-slate-300">
              {product.weight && (
                <li className="flex items-center gap-2 font-medium text-cyan-200">
                  <Scale
                    className="size-4 shrink-0 text-cyan-400"
                    aria-hidden="true"
                  />
                  <span>
                    وزن به ازای هر ۱۰۰ متر:{" "}
                    <span className="text-white font-semibold">{product.weight}</span>
                  </span>
                </li>
              )}

              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2
                    className="size-4 shrink-0 text-emerald-400"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 p-0 font-medium text-white shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all hover:from-cyan-400 hover:to-blue-500 sm:w-auto"
              render={
                <a
                  href="tel:09372296015"
                  className="flex size-full items-center justify-center gap-2 px-6 py-3"
                >
                  <PhoneCall className="size-4 shrink-0" aria-hidden="true" />
                  <span>استعلام قیمت و مشاوره تلفنی</span>
                </a>
              }
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
