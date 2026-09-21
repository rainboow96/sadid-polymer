"use client";

import { BadgeCheck, Award, Leaf, Factory, Truck, Headset, Tags } from "lucide-react";
import { useIntersectionObserver } from "../../app/hooks/useIntersectionObserver";

const ITEMS = [
  { icon: Factory, text: "تولید ملی با مواد درجه‌یک" },
  { icon: BadgeCheck, text: "مقاوم در برابر UV" },
  { icon: Leaf, text: "۴۰٪ صرفه‌جویی در مصرف آب" },
  { icon: Truck, text: "ارسال سراسری به سراسر کشور" },
  { icon: Headset, text: "مشاوره فنی رایگان" },
  { icon: Tags, text: "قیمت رقابتی مستقیم از کارخانه" },
];

export default function TrustBar() {
  const { containerRef, isVisible } = useIntersectionObserver({
    rootMargin: "100px",
  });

  return (
    <div
      ref={containerRef}
      className="relative border-y border-white/[0.07] bg-[#060d1a]/80 p-5 backdrop-blur-xl select-none mt-5"
      dir="ltr"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-32 bg-gradient-to-r from-[#060d1a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-32 bg-gradient-to-l from-[#060d1a] to-transparent" />

      <div className="overflow-hidden">
        <div
          className={`flex w-max items-center gap-4 hover:[animation-play-state:paused] ${
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
              {ITEMS.map((it, i) => (
                <div
                  key={i}
                  className="flex shrink-0 items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 transition-colors hover:border-[#00e0ff]/40 hover:bg-white/[0.06]"
                >
                  <it.icon className="h-4 w-4 text-[#00e0ff]" />
                  <span className="whitespace-nowrap text-[13px] font-semibold text-slate-300">
                    {it.text}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
