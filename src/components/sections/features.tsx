import { Droplets, Feather, Sun, Layers } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import StatCard from "./statCard";
import { toPersianDigits } from "../utils/formatters";

const features = [
  {
    icon: Droplets,
    title: "صرفه‌جویی 40% در آب",
    desc: "سطح داخلی صیقلی لی‌فلت، افت فشار را به حداقل می‌رساند و آب را بدون هدررفت تا انتهای زمین می‌رساند.",
  },
  {
    icon: Feather,
    title: "سبک و منعطف",
    desc: "هر رول ۱۰۰ متری کمتر از ۱۴ کیلوگرم وزن دارد؛ جمع‌کردن، حمل و پهن‌کردن توسط یک نفر در چند دقیقه.",
  },
  {
    icon: Sun,
    title: "مقاوم در برابر UV",
    desc: "افزودن آنتی‌یووی، لوله و کیسه نهال را در برابر آفتاب مستقیم تا 2 سال بیمه می‌کند.",
  },
  {
    icon: Layers,
    title: "عمر مفید 8 سال",
    desc: "مقاوم در برابر سایش، تا شدن، مواد شیمیایی کود و دماهای ۱۰- تا 50+ درجه.",
  },
];

export default function Features() {
  return (
    <section id="why-sadid" className="relative py-10 sm:py-14">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-electric-600/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="mt-4 text-3xl font-black leading-snug text-white sm:text-5xl">
            مهندسی‌شده برای <span className="text-gradient">دوام و بازده</span>
          </h2>
          <p className="mt-4 leading-8 text-slate-400">
            هر متر از محصولات سدید، حاصل 30 سال تجربه در پلیمر و صدها ساعت تست میدانی در مزارع واقعی ایران است.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.12} className="h-full">
              <StatCard icon={f.icon}>
                <h3 className="mt-4 text-lg font-extrabold text-white">
                  {toPersianDigits(f.title)}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {toPersianDigits(f.desc)}
                </p>
              </StatCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
