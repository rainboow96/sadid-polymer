import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock3, ArrowLeft, Tag } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import Breadcrumb from "@/components/ui/breadcrumb";
import { hydrofixGuideContent } from "../../components/data/content/hydrofix-guide";
import { layflatPunchingGuideContent } from "../../components/data/content/layflat-punching";
import { seedlingBagGuideContent } from "../../components/data/content/seedling-bag-guide";



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
    return (
        <>
            <section className="relative pt-24 pb-6 sm:pt-32 sm:pb-8">
                <div className="mx-auto max-w-7xl px-5 text-center">
                    <Breadcrumb
                        items={[
                            { label: "صفحه اصلی", href: "/" },
                            { label: "وبلاگ" },
                        ]}
                    />
                    <Reveal>
                        <h1 className="text-2xl sm:text-4xl font-extrabold text-gradient tracking-tight mt-4">
                            مقالات و راهنمای تخصصی آبیاری
                        </h1>
                        <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
                            بررسی علمی ساختار لوله‌ها، آموزش‌های عملیاتی نصب و اتصال، و راهکارهای کاهش استهلاک خطوط انتقال آب
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="py-10 sm:py-14" aria-label="فهرست مقالات">
                <div className="mx-auto max-w-7xl px-5">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {allArticles.map((a, index) => (
                            <Reveal key={a.slug} delay={index * 0.1}>
                                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-slate-900/80 hover:shadow-[0_12px_25px_-8px_rgba(6,182,212,0.25)]">

                                    <Link
                                        href={`/blog/${a.slug}`}
                                        className="relative aspect-[16/9] w-full block overflow-hidden bg-slate-950"
                                    >
                                        <Image
                                            src={a.image || "/images-blog/default.webp"}
                                            alt={a.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                                    </Link>

                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="flex-1">
                                            <h2 className="text-sm font-extrabold leading-7 text-white sm:text-base line-clamp-2 group-hover:text-cyan-300 transition-colors">
                                                <Link href={`/blog/${a.slug}`}>{a.title}</Link>
                                            </h2>
                                            <p className="mt-2.5 text-xs leading-6 text-slate-400 line-clamp-3">
                                                {a.heroExcerpt}
                                            </p>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400">
                                            <span className="flex items-center gap-1.5">
                                                <Clock3 className="size-3.5 text-cyan-400" />
                                                {a.readingTime}
                                            </span>

                                            <Link
                                                href={`/blog/${a.slug}`}
                                                className="flex items-center gap-1 text-cyan-300 font-semibold text-xs group-hover:-translate-x-1 transition-transform"
                                            >
                                                مطالعه مقاله
                                                <ArrowLeft className="size-3.5" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
