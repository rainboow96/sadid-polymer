"use client";

import type { LucideIcon } from "lucide-react";
import { BadgeCheck, Factory, Headset, Leaf, Tags, Truck } from "lucide-react";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";

interface TrustItem {
  icon: LucideIcon;
  text: string;
}

const ITEMS: readonly TrustItem[] = [
  { icon: Factory, text: "تولید ملی با مواد درجه‌یک" },
  { icon: BadgeCheck, text: "مقاوم در برابر اشعه UV" },
  { icon: Leaf, text: "۴۰٪ صرفه‌جویی در مصرف آب" },
  { icon: Truck, text: "ارسال سریع به سراسر کشور" },
  { icon: Headset, text: "مشاوره فنی رایگان" },
  { icon: Tags, text: "قیمت رقابتی مستقیم از کارخانه" },
] as const;

export default function TrustBar() {
  const { containerRef, isVisible } = useIntersectionObserver({
    rootMargin: "100px",
  });

  return (
    <aside
      ref={containerRef}
      aria-label="ویژگی‌ها و مزایای کلیدی"
      className="relative mt-5 select-none border-y border-white/[0.07] bg-[#060d1a]/80 p-5 backdrop-blur-xl"
      dir="ltr"
    >
      <div 
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#060d1a] to-transparent sm:w-32" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#060d1a] to-transparent sm:w-32" 
        aria-hidden="true" 
      />

      <div className="overflow-hidden">
        <div
          className={`flex w-max items-center gap-4 hover:[animation-play-state:paused] motion-reduce:animate-none ${
            isVisible ? "animate-marquee" : ""
          }`}
          dir="rtl"
        >
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="flex shrink-0 items-center gap-4"
              aria-hidden={copyIndex === 1}
            >
              {ITEMS.map((it) => (
                <div
                  key={it.text}
                  className="flex shrink-0 items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 transition-colors hover:border-[#00e0ff]/40 hover:bg-white/[0.06]"
                >
                  <it.icon className="size-4 text-[#00e0ff]" aria-hidden="true" />
                  <span className="whitespace-nowrap text-xs font-semibold text-slate-300 sm:text-sm">
                    {it.text}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
