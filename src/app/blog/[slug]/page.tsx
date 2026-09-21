import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock3, Calendar, Info, CheckCircle2, ChevronLeft } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import Breadcrumb from "@/components/ui/breadcrumb";

import { 
    articles, 
    getArticleBySlug, 
    ArticleSection, 
    ArticlePoint,
    ComparisonRow
} from "../../../components/data/content/articles"; 

type ArticlePageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
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
        <article className="pt-34 pb-16">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
                
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
                    <header className="mb-10 text-center sm:text-right">
                        <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">{article.title}</h1>
                        <p className="mt-3 text-sm sm:text-base text-cyan-300/80 leading-7">{article.subtitle}</p>
                        <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-5 text-xs text-slate-400">
                            <span className="flex items-center gap-1.5"><Clock3 className="size-4 text-cyan-400" />{article.readingTime}</span>
                            <span className="flex items-center gap-1.5"><Calendar className="size-4 text-cyan-400" />{article.publishedAt}</span>
                        </div>
                    </header>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl mb-12">
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
                    <section className="space-y-4 rounded-3xl border border-white/10 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-sm">
                        {article.introParagraphs.map((p: string, idx: number) => (
                            <p key={idx} className="text-sm sm:text-base leading-8 text-slate-300">{p}</p>
                        ))}
                    </section>

                    {article.sections.map((section: ArticleSection) => (
                        <section key={section.id} id={section.id} className="space-y-6 pt-4">
                            <h2 className="text-lg sm:text-2xl font-bold text-white border-r-4 border-cyan-400 pr-3">{section.title}</h2>
                            {section.description && <p className="text-sm sm:text-base text-slate-300 leading-8">{section.description}</p>}

                            {section.paragraphs?.map((p: string, idx: number) => (
                                <p key={idx} className="text-sm sm:text-base text-slate-300 leading-8">{p}</p>
                            ))}

                            {section.points && (
                                <div className="grid gap-4 mt-4">
                                    {section.points.map((pt: ArticlePoint, i: number) => (
                                        <div key={i} className="rounded-2xl border border-white/5 bg-slate-900/60 p-5 hover:border-cyan-500/30 transition-colors">
                                            <h3 className="flex items-center gap-2 font-bold text-cyan-400 text-sm sm:text-base mb-2">
                                                <CheckCircle2 className="size-4 text-cyan-400 flex-shrink-0" />
                                                {pt.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-slate-400 leading-7 pr-6">{pt.description}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {section.callout && (
                                <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-5 text-sm sm:text-base backdrop-blur-sm">
                                    <div className="flex items-center gap-2 font-bold text-cyan-400 mb-2">
                                        <Info className="size-5 text-cyan-400" />
                                        {section.callout.title}
                                    </div>
                                    <p className="text-xs sm:text-sm text-slate-300 leading-7">{section.callout.text}</p>
                                </div>
                            )}
                        </section>
                    ))}


                    {article.comparisonTable && (
                        <section className="space-y-4 pt-6">
                            <h2 className="text-lg sm:text-2xl font-bold text-white border-r-4 border-cyan-400 pr-3">
                                مقایسه جامع
                            </h2>
                            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-slate-900/60">
                                <table className="w-full text-right text-xs sm:text-sm">
                                    <thead className="bg-slate-950/80 text-cyan-300 ">
                                        <tr>
                                            <th className="p-4 whitespace-nowrap">{article.comparisonTable.headers.feature}</th>
                                            <th className="p-4 text-cyan-200 whitespace-nowrap">{article.comparisonTable.headers.ldpe}</th>
                                            <th className="p-4 whitespace-nowrap">{article.comparisonTable.headers.hdpe}</th>
                                            <th className="p-4 whitespace-nowrap">{article.comparisonTable.headers.pvc}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 text-slate-300">
                                        {article.comparisonTable.rows.map((row: ComparisonRow, i: number) => (
                                            <tr key={i} className="hover:bg-white/[0.02]">
                                                <td className="p-4 font-semibold text-white whitespace-nowrap">{row.feature}</td>
                                                <td className="p-4 text-cyan-300/90 font-medium bg-cyan-950/10 whitespace-nowrap">{row.ldpe}</td>
                                                <td className="p-4 whitespace-nowrap">{row.hdpe}</td>
                                                <td className="p-4 whitespace-nowrap">{row.pvc}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    )}

                    {article.conclusion && (
                        <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950 p-6 sm:p-8">
                            <h2 className="text-lg sm:text-xl font-bold text-white mb-4">{article.conclusion.title}</h2>
                            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-7">
                                {article.conclusion.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
                            </div>
                        </section>
                    )}

                    <div className="pt-6 text-center">
                        <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 hover:text-cyan-300 transition-colors">
                            <ChevronLeft className="size-4" />
                            بازگشت به فهرست مقالات
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
