import { Droplets, Feather, Sun, Layers } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import StatCard from "./statCard";
import { toPersianDigits } from "../utils/formatters";

const features = [
  {
    icon: Droplets,
    title: "صرفه‌جویی 40% در آب",
    desc: "سطح داخلی صیقلی لی‌فلت، افت فشار را به حداقل می‌رساند و آب را بدون هدررفت تا انتهای زمین می‌رساند.",
    accent: "from-sky-500/25 to-blue-600/5",
    iconColor: "text-sky-400",
  },
  {
    icon: Feather,
    title: "سبک و منعطف",
    desc: "هر رول ۱۰۰ متری کمتر از ۱۴ کیلوگرم وزن دارد؛ جمع‌کردن، حمل و پهن‌کردن توسط یک نفر در چند دقیقه.",
    accent: "from-cyan-500/25 to-cyan-600/5",
    iconColor: "text-cyan-300",
  },
  {
    icon: Sun,
    title: "مقاوم در برابر UV",
    desc: "افزودن آنتی‌یووی ، لوله و کیسه نهال را در برابر آفتاب مستقیم تا 8 سال بیمه می‌کند.",
    accent: "from-amber-500/20 to-orange-600/5",
    iconColor: "text-amber-300",
  },
  {
    icon: Layers,
    title: "عمر مفید 8 سال",
    desc: "مقاوم در برابر سایش، تا شدن، مواد شیمیایی کود و دماهای ۱۰- تا 50+ درجه.",
    accent: "from-violet-500/25 to-purple-600/5",
    iconColor: "text-violet-300",
  },
];

export default function Features() {
  return (
    <section id="why-sadid" className="relative py-10 sm:py-15">
      <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-electric-600/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="mt-4 text-3xl font-black leading-snug text-white sm:text-[42px]">
            مهندسی‌شده برای <span className="text-gradient">دوام و بازده</span>
          </h2>
          <p className="mt-4 leading-8 text-slate-400">
            هر متر از محصولات سدید، حاصل 30 سال تجربه در پلیمر و صدها ساعت تست میدانی در مزارع واقعی ایران است.
          </p>
        </FadeIn>

        <FadeIn >
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.12} className="h-full">
                <StatCard icon={f.icon}>
                  <h3 className="mt-4 text-lg font-extrabold text-white">
                    {toPersianDigits(f.title)}
                  </h3>

                  <p className="mt-2 text-[13.5px] leading-7 text-slate-400">
                    {toPersianDigits(f.desc)}
                  </p>
                </StatCard>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
