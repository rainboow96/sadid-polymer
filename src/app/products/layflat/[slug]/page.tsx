import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhoneCall, CheckCircle2, Scale } from "lucide-react";
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
    .filter((p) => p.category === "layflat")
    .map((product) => ({
      slug: product.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "محصول یافت نشد | سدید پلیمر" };

  const title = `${product.name} | قیمت و خرید لوله لی فلت | سدید پلیمر`;
  const description = `${product.shortDescription} مشخصات فنی و استعلام قیمت انواع لوله لی فلت سدید پلیمر با کیفیت و مقاومت بالا مناسب آبیاری کشاورزی.`;

  return {
    title,
    description,
    keywords: [
      product.name,
      "لوله لی فلت",
      "خرید لوله لی فلت",
      "قیمت لوله لی فلت",
      "شیلنگ لی فلت",
      "شیلنگ آبیاری",
      "شلنگ آبیاری",
      "لوله تاشو آبیاری",
      "سدید پلیمر",
    ],
    alternates: {
      canonical: `${SITE_URL}/products/layflat/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/products/layflat/${product.slug}`,
      siteName: "سدید پلیمر",
      locale: "fa_IR",
      type: "website",
      images: product.images?.[0]
        ? [
            {
              url: product.images[0].startsWith("http")
                ? product.images[0]
                : `${SITE_URL}${product.images[0]}`,
              width: 800,
              height: 600,
              alt: product.name,
            },
          ]
        : [],
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

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description || product.shortDescription,
    image: product.images?.map((img) =>
      img.startsWith("http") ? img : `${SITE_URL}${img}`
    ),
    brand: {
      "@type": "Brand",
      name: "سدید پلیمر",
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/products/layflat/${product.slug}`,
      priceCurrency: "IRR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "سدید پلیمر",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "صفحه اصلی",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "لوله‌های لی‌فلت",
        item: `${SITE_URL}/products/layflat`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${SITE_URL}/products/layflat/${product.slug}`,
      },
    ],
  };

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumb className="mb-4" items={breadcrumbItems} />

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
        {/* ستون گالری محصول: در دسکتاپ کوچکتر و جمع‌وجورتر شده تا مینی‌تصاویر بلافاصله دیده شوند */}
        <div className="w-full lg:col-span-5 lg:sticky lg:top-24">
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <ProductGallery
              images={product.images || []}
              title={product.name}
            />
          </div>
        </div>

        {/* ستون توضیحات و مشخصات محصول */}
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
              {product.weight && (
                <li className="flex items-center gap-2 font-medium text-cyan-200 bg-cyan-950/30 p-2.5 rounded-xl border border-cyan-500/20">
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
