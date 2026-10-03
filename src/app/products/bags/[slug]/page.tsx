import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhoneCall, CheckCircle2 } from "lucide-react";
import { products } from "@/components/data/products";
import { Button } from "@/components/ui/button";
import { ProductGallery } from "@/components/product/ProductGallery";
import Breadcrumb from "@/components/ui/breadcrumb";
import PageLayout from "@/components/layout/PageLayout";

const SITE_URL = "https://sadidpolymer.ir";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products
    .filter((p) => p.category === "bags")
    .map((product) => ({
      slug: product.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "محصول یافت نشد | سدید پلیمر" };

  const canonicalUrl = `${SITE_URL}/products/bags/${product.slug}`;
  const firstImage = product.images?.[0] ? `${SITE_URL}${product.images[0]}` : undefined;

  return {
    title: `${product.name} | کیسه کاشت نهال | سدید پلیمر`,
    description: `${product.shortDescription} خرید مستقیم انواع کیسه نهال و گروبگ با کیفیت صادراتی و قیمت عمده از سدید پلیمر.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${product.name} | سدید پلیمر`,
      description: product.shortDescription,
      url: canonicalUrl,
      siteName: "سدید پلیمر",
      locale: "fa_IR",
      type: "website",
      images: firstImage ? [{ url: firstImage, alt: product.name }] : undefined,
    },
  };
}

export default async function BagsProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "صفحه اصلی", href: "/" },
    { label: "کیسه کاشت نهال و گروبگ", href: "/products/bags" },
    { label: product.name },
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription || product.description,
    image: product.images?.map((img) => `${SITE_URL}${img}`) || [],
    category: "کیسه کاشت نهال و نایلون گروبگ",
    brand: {
      "@type": "Brand",
      name: "سدید پلیمر",
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/products/bags/${product.slug}`,
      priceCurrency: "IRR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "سدید پلیمر",
      },
    },
  };

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <Breadcrumb className="mb-4" items={breadcrumbItems} />

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
        {/* بخش گالری تصاویر: در دسکتاپ ۵ ستون از ۱۲ ستون را می‌گیرد (بهینه‌سازی ابعاد کادر) */}
        <div className="w-full lg:col-span-5 lg:sticky lg:top-24">
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <ProductGallery images={product.images || []} title={product.name} />
          </div>
        </div>

        {/* بخش توضیحات و دکمه‌های تماس: ۷ ستون از ۱۲ ستون */}
        <div className="space-y-6 lg:col-span-7">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gradient sm:text-3xl">
              {product.name}
            </h1>
          </div>

          <p className="border-b border-white/10 pb-5 text-base leading-relaxed text-slate-300">
            {product.shortDescription}
          </p>

          <p className="text-sm leading-relaxed text-slate-400">
            {product.description}
          </p>

          <div className="space-y-3 rounded-2xl bg-slate-900/50 p-5 border border-white/5 backdrop-blur-sm">
            <h2 className="text-sm font-semibold text-cyan-300">
              مشخصات و ویژگی‌ها:
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-300">
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

          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
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
