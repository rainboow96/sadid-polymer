"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Droplets, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import GridBackground from "../ui/gridBackground";
import StatCard from "./statCard";
import { toPersianDigits } from "../utils/formatters";

const stats = [
  {
    value: `${toPersianDigits("3")} بار`,
    label: "تحمل فشار کاری",
    icon: Gauge,
  },
  {
    value: `${toPersianDigits("40")}%`,
    label: "صرفه‌جویی در آب",
    icon: Droplets,
  },
  {
    value: `+ ${toPersianDigits("8")}`,
    label: "طول عمر مفید",
    icon: ShieldCheck,
  },
];

// منحنی سرعت بسیار نرم، لوکس و پیوسته
// درست و بدون خطا
const smoothEase = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <GridBackground gridSize={70}>
      <section
        id="top"
        dir="rtl"
        className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:min-h-dvh lg:pt-24 lg:pb-10"
      >
        <div className="relative mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-10">

          {/* ستون متن و مشخصات */}
          <div className="relative z-20 flex w-full flex-col items-center text-center lg:items-start lg:text-right">
            <div className="w-full max-w-xl">
              <FadeIn delay={0.15}>
                <h1 className="text-3xl font-black leading-snug text-slate-100 sm:text-4xl lg:text-4xl xl:text-5xl xl:leading-tight">
                  جریان هوشمند آب،
                  <br />
                  <span className="text-gradient">از رول تا ریشه</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-300/90 sm:text-base">
                  سدید پلیمر توزیع‌کننده تخصصی لوله‌های لی‌فلت آبیاری قطره‌ای و کیسه‌های کاشت نهال با مقاومت صنعتی، انعطاف‌پذیری بی‌نظیر و دوامی که برای شرایط سخت کشاورزی ایران طراحی شده است.
                </p>
              </FadeIn>
            </div>

            <FadeIn
              delay={0.45}
              className="mt-6 flex w-full flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <Button
                nativeButton={false}
                size="lg"
                render={<Link href="/products" />}
                className="relative h-11 min-w-[140px] border-0 bg-[image:var(--background-image-brand-blue-gradient)] px-6 text-base font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98] sm:h-12"
              >
                مشاهده محصولات
              </Button>

              <Button
                nativeButton={false}
                variant="outline"
                size="lg"
                render={<a href="#why-sadid" />}
                className="h-11 min-w-[140px] border-white/20 bg-slate-900/50 px-6 text-base font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-800/80 hover:text-white hover:shadow-[0_0_24px_rgba(6,182,212,0.35)] active:scale-[0.98] sm:h-12"
              >
                چرا سدید پلیمر؟
              </Button>
            </FadeIn>

            <FadeIn
              delay={0.6}
              className="mt-8 w-full max-w-md sm:max-w-lg"
            >
              <div className="grid grid-cols-3 gap-2.5">
                {stats.map((s) => (
                  <StatCard
                    key={s.label}
                    value={s.value}
                    label={s.label}
                    icon={s.icon}
                  />
                ))}
              </div>
            </FadeIn>
          </div>

          {/* ستون تصاویر ترکیبی سه لایه */}
          <div className="relative z-10 flex w-full items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-2xl lg:scale-110 xl:max-w-3xl">

              {/* هاله نور پس‌زمینه (کاملاً ثابت و فقط فید ملایم در شروع) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-cyan-500/18 blur-3xl"
              />

              {/* ۱. لایه رول لوله (hero1) - رشد نرم و تدریجی، یک‌بار اجرا و بدون لوپ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.1,
                  ease: smoothEase,
                }}
                className="relative w-full"
              >
                <Image
                  src="/hero1.webp"
                  alt="لوله لی فلت آبیاری سدید پلیمر"
                  width={2080}
                  height={2080}
                  priority
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="h-auto w-full object-contain drop-shadow-[0_20px_50px_rgba(0,180,255,0.18)]"
                />
              </motion.div>

              {/* ۲. گلدان اول/بلندتر (hero2) - با تأخیر ۰.۴ ثانیه با آرامش رشد می‌کند و ثابت می‌ماند */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 1.0,
                  ease: smoothEase,
                }}
                className="absolute bottom-[-1%] left-[80%] z-10 w-[25%]"
              >
                <Image
                  src="/hero2.webp"
                  alt="کیسه نهال سدید پلیمر"
                  width={600}
                  height={800}
                  priority
                  className="h-auto w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                />
              </motion.div>

              {/* ۳. گلدان دوم/کوتاه‌تر (hero3) - با تأخیر ۰.۶۵ ثانیه با نرمی کامل می‌نشیند */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 1.0,
                  ease: smoothEase,
                }}
                className="absolute bottom-[-1%] left-[66%] z-20 w-[26%]"
              >
                <Image
                  src="/hero3.webp"
                  alt="کیسه کاشت نهال کشاورزی"
                  width={600}
                  height={900}
                  priority
                  className="h-auto w-full object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                />
              </motion.div>

            </div>
          </div>

        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#060d1d] to-transparent" />
      </section>
    </GridBackground>
  );
}
