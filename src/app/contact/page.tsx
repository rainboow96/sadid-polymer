import type { Metadata } from "next";
import type { ComponentType } from "react";
import {
  Clock3,
  Building2,
  ChevronLeft,
  PhoneCall,
  Phone,
  Mail,
  MessageCircle,
  Send,
  MapPin,
  Truck,
  FileText,
  BadgePercent,
} from "lucide-react";
import {
  company,
  contractFacts,
  shippingHighlights,
  contractSteps,
} from "@/components/data/content";
import Reveal from "@/components/ui/reveal";
import Breadcrumb from "@/components/ui/breadcrumb";
import PageLayout from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: `تماس با ما و استعلام قیمت | ${company.name}`,
  description: company.description,
  alternates: { canonical: "/contact" },
};

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const channelIcons: Record<string, ComponentType<{ className?: string }>> = {
  phone: PhoneCall,
  office_phone: Phone,
  whatsapp: MessageCircle,
  telegram: Send,
  rubika: Send,
  instagram: InstagramIcon,
  email: Mail,
};

export default function ContactPage() {
  return (
    <PageLayout>
      <div
        className="pointer-events-none absolute right-0 top-0 h-96 w-full bg-[radial-gradient(ellipse_60%_50%_at_80%_-10%,rgba(6,182,212,0.18),transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-0 top-1/3 h-96 w-full bg-[radial-gradient(ellipse_50%_40%_at_10%_50%,rgba(37,99,235,0.12),transparent_70%)]"
        aria-hidden="true"
      />

      <section className="relative pb-6 sm:pb-8">
        <Breadcrumb
          className="mb-3 sm:mb-4"
          items={[
            { label: "صفحه اصلی", href: "/" },
            { label: "تماس با ما" },
          ]}
        />

        <Reveal>
          <h1 className="mt-4 text-2xl font-black text-white sm:text-4xl lg:text-5xl">
            ارتباط با کارشناسان{" "}
            <span className="text-gradient">{company.name}</span>
          </h1>
          <p className="mt-3 max-w-2xl text-xs leading-7 text-slate-300 sm:text-sm sm:leading-8">
            برای استعلام قیمت روز لوله‌های لی‌فلت، دریافت پیش‌فاکتور، نمونه محصول
            یا مشاوره تخصصی خطوط انتقال آب، کارشناسان ما آماده پاسخگویی هستند.
          </p>
        </Reveal>
      </section>

      <section className="relative py-6 sm:py-10">
        <Reveal delay={0.1}>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-slate-300">
              <Clock3 className="size-4 shrink-0 text-cyan-400 sm:size-5" aria-hidden="true" />
              <span className="font-bold text-white">ساعات کاری:</span>
              <span className="text-slate-400">{company.workingHours}</span>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0e1626]/40 shadow-xl shadow-black/30 backdrop-blur-xl">
            <ul className="divide-y divide-white/10">
              {company.channels.map((channel) => {
                const Icon = channelIcons[channel.id] || Send;
                const targetHref =
                  channel.id === "email" && !channel.href.startsWith("mailto:")
                    ? `mailto:${channel.href}`
                    : channel.href;

                return (
                  <li key={channel.id}>
                    <a
                      href={targetHref}
                      target={targetHref.startsWith("http") ? "_blank" : undefined}
                      rel={
                        targetHref.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center justify-between px-4 py-4 transition-all duration-200 hover:bg-white/[0.05] sm:px-6"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-all group-hover:scale-105 group-hover:bg-cyan-500/20">
                          <Icon className="size-5" aria-hidden="true" />
                        </div>
                        <div>
                          <span className="block text-sm font-semibold text-white transition-colors group-hover:text-cyan-300">
                            {channel.title}
                          </span>
                          {channel.id === "phone" && (
                            <span className="text-xs text-slate-400">
                              خط مستقیم واحد فروش
                            </span>
                          )}
                          {channel.id === "office_phone" && (
                            <span className="text-xs text-slate-400">
                              دفتر فروش و پیگیری سفارش‌ها
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className="font-sans text-xs tabular-nums text-slate-300 transition-colors group-hover:text-cyan-200 sm:text-sm"
                          dir={channel.ltr ? "ltr" : "rtl"}
                        >
                          {channel.value}
                        </span>
                        <ChevronLeft className="size-4 shrink-0 text-slate-500 transition-transform duration-200 group-hover:-translate-x-1 group-hover:text-cyan-400" aria-hidden="true" />
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="py-6 sm:py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal delay={0.2}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#0e1626]/40 p-6 shadow-xl backdrop-blur-xl sm:p-8">
              <div>
                <div className="flex items-center gap-2.5 text-cyan-400">
                  <Building2 className="size-5 shrink-0" aria-hidden="true" />
                  <h2 className="text-base font-bold text-white sm:text-lg">
                    دفتر مرکزی و فروش حضوری
                  </h2>
                </div>

                <div className="mt-5 flex flex-col gap-4">
                  {company.addresses.map((addr) => (
                    <div
                      key={addr.title}
                      className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3.5 text-sm text-slate-300"
                    >
                      <MapPin className="mt-0.5 size-5 shrink-0 text-cyan-400" aria-hidden="true" />
                      <div className="leading-6">
                        <strong className="mb-1 block font-bold text-white">
                          {addr.title}
                        </strong>
                        {addr.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="mb-2 flex items-center gap-2 text-sm font-bold text-cyan-300">
                    <BadgePercent className="size-4" aria-hidden="true" />
                    خرید عمده و تعاونی‌ها
                  </div>
                  <p className="text-xs leading-7 text-slate-300 sm:text-sm">
                    برای تعاونی‌های کشاورزی، پروژه‌های جهاد کشاورزی، پیمانکاران
                    و فروشگاه‌های توزیع، امکان عقد قرارداد رسمی با{" "}
                    <span className="font-semibold text-cyan-300">تخفیف پله‌ای</span>،
                    صدور فاکتور رسمی و پرداخت مرحله‌ای فراهم است.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2.5 border-t border-white/5 pt-4">
                {contractFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-lg border border-white/5 bg-black/20 p-2.5 text-right"
                  >
                    <span className="block text-xs text-slate-400">
                      {fact.label}
                    </span>
                    <span className="mt-0.5 block line-clamp-1 text-xs font-semibold text-slate-200">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#0e1626]/40 p-6 shadow-xl backdrop-blur-xl sm:p-8">
              <div>
                <div className="flex items-center gap-2.5 text-cyan-400">
                  <Truck className="size-5 shrink-0" aria-hidden="true" />
                  <h2 className="text-base font-bold text-white sm:text-lg">
                    ارسال سفارش و پشتیبانی باربری
                  </h2>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {shippingHighlights.map((ship) => (
                    <div
                      key={ship.label}
                      className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-right"
                    >
                      <div className="text-sm font-extrabold text-cyan-400">
                        {ship.label}
                      </div>
                      <div className="mt-1 text-xs text-slate-400">
                        {ship.description}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="mb-3 flex items-center gap-2 text-sm font-bold text-cyan-300">
                    <FileText className="size-4" aria-hidden="true" />
                    مراحل ثبت سفارش رسمی
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-300 sm:text-sm">
                    {contractSteps.map((step, index) => (
                      <li key={step} className="flex items-start gap-2">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-400">
                          {index + 1}
                        </span>
                        <span className="leading-5 text-slate-300">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
