import { PhoneCall } from "lucide-react";
import SectionHead from "./sectionHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { purchaseSteps } from "../data/content";
import { company } from "../data/content";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/fade-in";

type PurchaseStepsProps = {
  productName?: string;
  id?: string;
  className?: string;
};

export function PurchaseSteps({
  id = "purchase-steps",
  className,
}: PurchaseStepsProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        "relative border-y border-white/5 bg-slate-950/40 py-16 sm:py-20",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-5">
        {/* هدر بخش */}
        <FadeIn>
          <SectionHead
            title="خرید بدون دردسر … به همین راحتی!"
            desc="در تمامی مراحل خرید و تحویل بار همراه شما هستیم. کافیست با کارشناسان ما تماس بگیرید."
            align="center"
          />
        </FadeIn>

        {/* لیست ۵ مرحله‌ای خرید */}
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {purchaseSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.order} className="flex flex-col list-none">
                <FadeIn delay={index * 0.1} className="flex h-full flex-col">
                  {/* اضافه شدن gap-4 و py-6 برای تنفس بیشتر کارت */}
                  <Card className="items-center gap-4 py-6 text-center">
                    {/* آیکون مرحله (با margin-bottom اضافی) */}
                    <span className="mb-1 grid size-12 place-items-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 transition-colors group-hover:bg-cyan-500/20 group-hover:text-cyan-200">
                      <Icon aria-hidden className="size-6" />
                    </span>

                    {/* عنوان مرحله */}
                    <h3 className="text-sm font-bold text-white">
                      <span className="text-cyan-400">{step.order}- </span>
                      {step.title}
                    </h3>

                    {/* توضیحات (افزایش فاصله خطوط و پدینگ افقی برای خوانایی بهتر) */}
                    <p className="flex-1 px-1 text-[12px] leading-7 text-slate-300/80">
                      {step.description}
                    </p>

                    {/* برچسب هایلایت */}
                    {step.highlight ? (
                      <span className="mt-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                        {step.highlight}
                      </span>
                    ) : null}
                  </Card>
                </FadeIn>
              </li>
            );
          })}
        </ol>

        {/* دکمه تماس */}
        <FadeIn delay={0.4}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              render={
                <a href={`tel:${company.phone}`}>
                  <PhoneCall aria-hidden className="size-4" />
                  تماس با تیم فروش
                </a>
              }
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
