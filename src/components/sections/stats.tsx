"use client";

import { useCountUp } from "@/app/hooks/useCountUp";

interface CounterProps {
  target: number;
  suffix: string;
}

interface StatItem {
  target: number;
  suffix: string;
  label: string;
  sub: string;
}

function Counter({ target, suffix }: CounterProps) {
  const { ref, formattedValue } = useCountUp(target);

  return (
    <span ref={ref} dir="rtl" className="tabular-nums">
      {formattedValue}
      <span className="text-gradient-electric">{suffix}</span>
    </span>
  );
}

const STATS: readonly StatItem[] = [
  { target: 20, suffix: "+", label: "تجربه تأمین و توزیع", sub: "از 1385 در کنار کشاورزان" },
  { target: 250, suffix: "+", label: "پروژه موفق", sub: "در 20 استان کشور" },
  { target: 40, suffix: "٪", label: "صرفه‌جویی آب", sub: "میانگین اندازه‌گیری‌شده" },
  { target: 98, suffix: "٪", label: "رضایت مشتری", sub: "بر اساس نظرسنجی ۱۴۰۴" },
] as const;

export default function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.07] bg-[#060d1a] py-16 sm:py-20">
      <div 
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-1/2 bg-gradient-to-l from-transparent via-[#00e0ff]/50 to-transparent" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_100%,rgba(0,224,255,0.08),transparent_70%)]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-5 sm:px-8 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`text-center ${i !== 0 ? "lg:border-s lg:border-white/10" : ""}`}
          >
            <p className="text-4xl font-black text-white sm:text-5xl">
              <Counter target={s.target} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm font-extrabold text-slate-200 sm:text-base">
              {s.label}
            </p>
            <p className="mt-1 text-xs font-medium text-slate-400">
              {s.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
