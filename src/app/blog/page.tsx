import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock3, ArrowLeft } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import Breadcrumb from "@/components/ui/breadcrumb";
import PageLayout from "@/components/layout/PageLayout";
import { hydrofixGuideContent } from "@/components/data/content/hydrofix-guide";
import { layflatPunchingGuideContent } from "@/components/data/content/layflat-punching";
import { seedlingBagGuideContent } from "@/components/data/content/seedling-bag-guide";

const allArticles = [
  hydrofixGuideContent,
  layflatPunchingGuideContent,
  seedlingBagGuideContent,
];

export const metadata: Metadata = {
  title: "مقالات و پایگاه دانش فنی | سدید پلیمر",
  description:
    "مقالات تخصصی و راهنمای فنی لوله‌های لی‌فلت، آبیاری قطره‌ای و مهندسی پلیمر — سدید پلیمر.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const breadcrumbItems = [
    { label: "صفحه اصلی", href: "/" },
    { label: "وبلاگ" },
  ];

  return (
    <PageLayout>
      <div className="flex justify-center">
        <Breadcrumb className="mb-3 sm:mb-4" items={breadcrumbItems} />
      </div>

      <section className="pb-8 text-center">
        <Reveal>
          <h1 className="text-gradient text-2xl font-extrabold leading-snug sm:text-4xl sm:leading-tight">
            مقالات و راهنمای تخصصی آبیاری
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
            بررسی علمی ساختار لوله‌ها، آموزش‌های عملیاتی نصب و اتصال، و راهکارهای کاهش استهلاک خطوط انتقال آب
          </p>
        </Reveal>
      </section>

      <section className="pb-10 sm:pb-14" aria-label="فهرست مقالات">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allArticles.map((article, index) => {
            const articleUrl = `/blog/${article.slug}`;

            return (
              <Reveal key={article.slug} delay={index * 0.1}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-md transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-slate-900/80 hover:shadow-[0_12px_25px_-8px_rgba(6,182,212,0.25)]">
                  
                  <Link
                    href={articleUrl}
                    tabIndex={-1}
                    aria-hidden="true"
                    className="relative block aspect-[16/9] w-full overflow-hidden bg-slate-950"
                  >
                    <Image
                      src={article.image || "/images-blog/default.webp"}
                      alt={article.title}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out transform-gpu group-hover:scale-105"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"
                      aria-hidden="true"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col p-6 text-right">
                    <div className="flex-1 space-y-2.5">
                      <h2 className="line-clamp-2 text-sm font-extrabold leading-7 text-white transition-colors group-hover:text-cyan-300 sm:text-base">
                        <Link href={articleUrl}>
                          {article.title}
                        </Link>
                      </h2>
                      <p className="line-clamp-3 text-xs leading-6 text-slate-400">
                        {article.heroExcerpt}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Clock3 className="size-3.5 text-cyan-400" aria-hidden="true" />
                        <span className="tabular-nums">{article.readingTime}</span>
                      </span>

                      <Link
                        href={articleUrl}
                        className="flex items-center gap-1 text-xs font-semibold text-cyan-300 transition-transform group-hover:-translate-x-1"
                      >
                        <span>مطالعه مقاله</span>
                        <ArrowLeft className="size-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
}
