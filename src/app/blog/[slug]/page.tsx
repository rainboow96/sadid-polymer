import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock3, Calendar, Info, CheckCircle2, ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import Breadcrumb from "@/components/ui/breadcrumb";
import PageLayout from "@/components/layout/PageLayout";

import {
  articles,
  getArticleBySlug,
  type ArticleSection,
  type ArticlePoint,
  type SpecRow,
  type ComparisonRow,
} from "@/components/data/content/articles";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "مقاله یافت نشد | سدید پلیمر" };

  return {
    title: `${article.title} | سدید پلیمر`,
    description: article.heroExcerpt,
    alternates: { canonical: `/blog/${article.slug}` },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "صفحه اصلی", href: "/" },
              { label: "وبلاگ", href: "/blog" },
              { label: article.title },
            ]}
          />
        </div>

        <Reveal>
          <header className="mb-10 text-right">
            <h1 className="text-2xl font-black leading-tight text-white sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-3 text-sm leading-7 text-cyan-300/80 sm:text-base">
              {article.subtitle}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-start gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock3 className="size-4 text-cyan-400" aria-hidden="true" />
                <span className="tabular-nums">{article.readingTime}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="size-4 text-cyan-400" aria-hidden="true" />
                <span className="tabular-nums">{article.publishedAt}</span>
              </span>
            </div>
          </header>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
            <Image
              src={article.image || "/images/default-blog.webp"}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </Reveal>

        <div className="space-y-12 text-slate-200">
          <section className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-sm sm:p-8">
            {article.introParagraphs?.map((paragraph: string, idx: number) => (
              <p key={idx} className="text-sm leading-8 text-slate-300 sm:text-base">
                {paragraph}
              </p>
            ))}
          </section>

          {article.sections?.map((section: ArticleSection) => (
            <section key={section.id} id={section.id} className="space-y-6 pt-4">
              <h2 className="border-r-4 border-cyan-400 pr-3 text-lg font-bold text-white sm:text-2xl">
                {section.title}
              </h2>
              {section.description && (
                <p className="text-sm leading-8 text-slate-300 sm:text-base">
                  {section.description}
                </p>
              )}

              {section.paragraphs?.map((paragraph: string, idx: number) => (
                <p key={idx} className="text-sm leading-8 text-slate-300 sm:text-base">
                  {paragraph}
                </p>
              ))}

              {section.points && (
                <div className="mt-4 grid gap-4">
                  {section.points.map((pt: ArticlePoint, i: number) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/5 bg-slate-900/60 p-5 transition-colors hover:border-cyan-500/30"
                    >
                      <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-cyan-400 sm:text-base">
                        <CheckCircle2 className="size-4 shrink-0 text-cyan-400" aria-hidden="true" />
                        {pt.title}
                      </h3>
                      <p className="pr-6 text-xs leading-7 text-slate-400 sm:text-sm">
                        {pt.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {section.callout && (
                <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-5 text-sm backdrop-blur-sm sm:text-base">
                  <div className="mb-2 flex items-center gap-2 font-bold text-cyan-400">
                    <Info className="size-5 shrink-0 text-cyan-400" aria-hidden="true" />
                    <span>{section.callout.title}</span>
                  </div>
                  <p className="text-xs leading-7 text-slate-300 sm:text-sm">
                    {section.callout.text}
                  </p>
                </div>
              )}
            </section>
          ))}
          {article.specsTable && (
            <section className="space-y-4 pt-6">
              <h2 className="border-r-4 border-cyan-400 pr-3 text-lg font-bold text-white sm:text-2xl">
                جدول مشخصات فنی و ابعاد لوله‌های لی‌فلت
              </h2>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-md shadow-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-center text-xs sm:text-sm">
                    <thead className="border-b border-white/10 bg-slate-950/80 text-cyan-300">
                      <tr>
                        <th className="w-1/3 py-4 px-4 font-bold text-right sm:text-center">
                          {article.specsTable.headers.size}
                        </th>
                        <th className="w-1/3 py-4 px-4 font-bold">
                          {article.specsTable.headers.width}
                        </th>
                        <th className="w-1/3 py-4 px-4 font-bold text-left sm:text-center">
                          {article.specsTable.headers.weight}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-200">
                      {article.specsTable.rows.map((row: SpecRow, i: number) => (
                        <tr
                          key={i}
                          className="transition-colors hover:bg-cyan-500/10 even:bg-white/[0.02]"
                        >
                          <td className="py-3.5 px-4 font-semibold text-right sm:text-center">
                            {row.productSlug ? (
                              <Link
                                href={`/products/layflat/${row.productSlug}`}
                                className="inline-flex items-center gap-1.5 text-cyan-400 transition-colors hover:text-cyan-200 hover:underline"
                              >
                                <span>{row.size}</span>
                                <ChevronRight className="size-3.5 rotate-180 opacity-70" />
                              </Link>
                            ) : (
                              <span className="text-cyan-400">{row.size}</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-slate-300">
                            {row.width}
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-slate-100 text-left sm:text-center">
                            {row.weight}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}




          {article.conclusion && (
            <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950 p-6 sm:p-8">
              <h2 className="mb-4 text-lg font-bold text-white sm:text-xl">
                {article.conclusion.title}
              </h2>
              <div className="space-y-3 text-xs leading-7 text-slate-300 sm:text-sm">
                {article.conclusion.paragraphs?.map((paragraph: string, i: number) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
          )}

          <div className="pt-6 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-cyan-300 sm:text-sm"
            >
              <ChevronRight className="size-4" aria-hidden="true" />
              <span>بازگشت به فهرست مقالات</span>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
