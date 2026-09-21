"use client";

import { ShieldCheck, Droplets, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import GridBackground from "../ui/gridBackground";
import StatCard from "./statCard";
import { toPersianDigits } from "../utils/formatters";
import Link from "next/link";
import Image from "next/image";

const stats = [
  {
    value: toPersianDigits("3") + " بار",
    label: "تحمل فشار کاری",
    icon: Gauge,
  },
  {
    value: toPersianDigits("40") + "%",
    label: "صرفه‌جویی در آب",
    icon: Droplets,
  },
  {
    value: "+ " + toPersianDigits("10"),
    label: "طول عمر مفید",
    icon: ShieldCheck,
  },
];

export default function Hero() {
  return (
    <GridBackground gridSize={70}>
      <section id="top" dir="rtl" className="relative flex min-h-[calc(100svh-120px)] w-full items-center overflow-hidden pt-[100px] lg:pt-[140px]">
        <div className="relative mx-auto grid min-h-[calc(100svh-144px)] w-full max-w-[1600px] grid-cols-1 items-center gap-8 px-5 py-10 sm:gap-10 sm:px-8 lg:grid-cols-2 lg:gap-0 lg:px-10 lg:py-0 xl:px-16">

          <div className="relative z-10 flex min-w-0 w-full flex-col items-center text-center lg:col-start-1 lg:items-start lg:text-right">

            <div className="w-full max-w-[570px]">
              <FadeIn delay={0.15}>
                <h1 className="text-[32px] font-black leading-[1.35] tracking-tight text-gradient sm:text-4xl lg:text-[42px] xl:text-5xl xl:leading-[1.3]">
                  جریان هوشمند آب،
                  <br />
                  <span className="text-gradient">از رول تا ریشه</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="mt-5 max-w-[500px] text-[14px] leading-7 text-slate-300/90 sm:text-[15px]">
                  سدید پلیمر توضیع کننده تخصصی لوله‌های لی‌فلت آبیاری قطره‌ای و کیسه‌های کاشت نهال با مقاومت صنعتی، انعطاف‌پذیری بی‌نظیر و دوامی که برای شرایط سخت کشاورزی ایران طراحی شده است.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.45} className="mt-6 flex w-full flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button
                nativeButton={false}
                size="lg"
                render={<Link href="/products" />}
                className="relative h-11 min-w-[140px] px-6 text-base font-bold sm:h-12 text-white bg-[image:var(--background-image-brand-blue-gradient)] border-0 [transform:translateZ(0)] transition-[transform,filter] duration-300 hover:scale-[1.02] hover:drop-shadow-[0_0_12px_#06b6d470] active:scale-[0.98]"
              >
                مشاهده محصولات
              </Button>



              <Button
                nativeButton={false}
                variant="outline"
                size="lg"
                render={<a href="#why-sadid" />}
                className="h-11 min-w-[140px] px-6 text-base font-semibold sm:h-12 text-slate-200 border-white/20 bg-slate-900/50 [transform:translateZ(0)] transition-[color,background-color,border-color,box-shadow,transform] duration-300 hover:bg-slate-800/80 hover:border-cyan-400/50 hover:text-white hover:shadow-[0_0_24px_rgba(6,182,212,0.35)] active:scale-[0.98]"
              >
                چرا سدید پلیمر؟
              </Button>


            </FadeIn>

            <FadeIn delay={0.6} className="mt-7 w-full max-w-[460px] sm:max-w-[500px]">
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                {stats.map((s) => (
                  <StatCard key={s.label} value={s.value} label={s.label} icon={s.icon} />
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="relative z-10 flex min-w-0 w-full items-center justify-center lg:col-start-2 lg:row-start-1">
            <FadeIn delay={0.25} className="w-full">
              <div dir="ltr" className="relative flex w-full items-center justify-center max-w-xl mx-auto lg:translate-x-10 xl:translate-x-16">

                <Image
                  src="/hero21.webp"
                  alt="سدید پلیمر - لوله لی فلت و کیسه نهال"
                  width={2080}
                  height={2080}
                  priority
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="block h-auto w-full max-w-none object-contain drop-shadow-[0_20px_50px_rgba(0,180,255,0.18)] lg:scale-[1.15] xl:scale-[1.25]"
                />

              </div>
            </FadeIn>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060d1d] to-transparent" />
      </section>
    </GridBackground>
  );
}