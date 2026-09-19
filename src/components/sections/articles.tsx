import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock } from "lucide-react";
import Reveal from "../ui/reveal";
import SectionHead from "./sectionHead";
import { hydrofixGuideContent } from "../../components/data/content/hydrofix-guide";
import { layflatPunchingGuideContent } from "../../components/data/content/layflat-punching";
import { seedlingBagGuideContent } from "../../components/data/content/seedling-bag-guide";

const allArticles = [
  hydrofixGuideContent,
  seedlingBagGuideContent,
  layflatPunchingGuideContent,

];


const recentArticles = [...allArticles].reverse().slice(0, 3);

export default function Articles() {
  return (
    <section id="articles" className="relative scroll-mt-28 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            align="right"
            title="مقالات و"
            highlight="راهنماهای تخصصی"
            desc="راهنماهای کاربردی برای شناخت متریال، اصول پانچ، نصب و افزایش طول عمر سیستم آبیاری."
          />
          <Reveal delay={0.2}>
            <Link
              href="/blog"
              className="btn-ghost group flex items-center gap-2 rounded-2xl px-5 py-3 text-[13.5px] font-bold text-white transition hover:text-cyan-300"
            >
              مشاهده همه مقالات
              <ArrowLeft className="h-4 w-4 text-[#00e0ff] transition-transform group-hover:-translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {recentArticles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.12}>
              <Link href={`/blog/${a.slug}`} className="block h-full">
                <article className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-slate-900/80 hover:shadow-[0_12px_25px_-8px_rgba(6,182,212,0.25)]">
                  
                  <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-[16px] font-extrabold leading-[1.9] text-white transition group-hover:text-[#7df9ff] line-clamp-2">
                      {a.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[13px] leading-[2] text-slate-400 line-clamp-3">
                      {a.heroExcerpt}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4 text-[11.5px] font-medium text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-cyan-400" />
                        {a.readingTime}
                      </span>
                      
                      <span className="flex items-center gap-1 font-semibold text-cyan-300 transition-transform group-hover:-translate-x-1">
                        مطالعه
                        <ArrowLeft className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
