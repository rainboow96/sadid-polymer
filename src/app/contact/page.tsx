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
  ShieldCheck,
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
    <main className="relative min-h-screen text-slate-100 selection:bg-cyan-500 selection:text-black pb-16">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-full bg-[radial-gradient(ellipse_60%_50%_at_80%_-10%,rgba(6,182,212,0.18),transparent_70%)]" />
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-full bg-[radial-gradient(ellipse_50%_40%_at_10%_50%,rgba(37,99,235,0.12),transparent_70%)]" />

      <section className="relative pt-28 pb-6 sm:pt-36 sm:pb-8">
        <div className="mx-auto max-w-7xl px-5 text-right">
          <Breadcrumb
            items={[
              { label: "صفحه اصلی", href: "/" },
              { label: "تماس با ما" },
            ]}
          />

          <Reveal>
            <h1 className="mt-8 text-2xl font-black tracking-tight sm:text-4xl lg:text-5xl text-white">
              ارتباط با کارشناسان{" "}
              <span className="text-gradient">{company.name}</span>
            </h1>
            <p className="mt-3 max-w-2xl text-xs leading-7 text-slate-300 sm:text-sm sm:leading-8">
              برای استعلام قیمت روز لوله‌های لی‌فلت، دریافت پیش‌فاکتور، نمونه محصول
              یا مشاوره تخصصی خطوط انتقال آب، کارشناسان ما آماده پاسخگویی هستند.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-6 sm:py-10">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal delay={0.1}>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock3 className="size-4 shrink-0 text-cyan-400 sm:size-[18px]" />
                <span className="font-bold text-white">ساعات کاری:</span>
                <span className="text-slate-400">{company.workingHours}</span>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0e1626]/40 backdrop-blur-xl shadow-xl shadow-black/30">
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
                          <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all">
                            <Icon className="size-5" />
                          </div>
                          <div>
                            <span className="block text-sm font-semibold text-white transition-colors group-hover:text-cyan-300">
                              {channel.title}
                            </span>
                            {channel.id === "phone" && (
                              <span className="text-[11px] text-slate-400">
                                خط مستقیم واحد فروش
                              </span>
                            )}
                            {channel.id === "office_phone" && (
                              <span className="text-[11px] text-slate-400">
                                دفتر فروش و پیگیری سفارش‌ها
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span
                            className="text-xs text-slate-300 transition-colors group-hover:text-cyan-200 sm:text-sm font-sans"
                            dir={channel.ltr ? "ltr" : "rtl"}
                          >
                            {channel.value}
                          </span>
                          <ChevronLeft className="size-4 shrink-0 text-slate-500 transition-transform duration-200 group-hover:-translate-x-1 group-hover:text-cyan-400" />
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-6 sm:py-10">
        <div className="mx-auto max-w-7xl px-5 text-right">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            
            <Reveal delay={0.2}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#0e1626]/40 p-6 backdrop-blur-xl shadow-xl sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-cyan-400">
                    <Building2 className="size-5 shrink-0" />
                    <h2 className="text-base font-bold text-white sm:text-lg">
                      دفتر مرکزی و فروش حضوری
                    </h2>
                  </div>

                  <div className="mt-5 flex flex-col gap-4">
                    {company.addresses.map((addr, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-xl bg-white/[0.02] border border-white/5 p-3.5 text-sm text-slate-300"
                      >
                        <MapPin className="mt-0.5 size-5 shrink-0 text-cyan-400" />
                        <div className="leading-6">
                          <strong className="block font-bold text-white mb-1">
                            {addr.title}
                          </strong>
                          {addr.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-bold mb-2">
                      <BadgePercent className="size-4" />
                      خرید عمده و تعاونی‌ها
                    </div>
                    <p className="text-xs leading-7 text-slate-300 sm:text-sm">
                      برای تعاونی‌های کشاورزی، پروژه‌های جهاد کشاورزی، پیمانکاران
                      و فروشگاه‌های توزیع، امکان عقد قرارداد رسمی با{" "}
                      <span className="text-cyan-300 font-semibold">تخفیف پله‌ای</span>،
                      صدور فاکتور رسمی و پرداخت مرحله‌ای فراهم است.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2.5 pt-4 border-t border-white/5">
                  {contractFacts.map((fact, i) => (
                    <div
                      key={i}
                      className="rounded-lg bg-black/20 p-2.5 text-right border border-white/5"
                    >
                      <span className="block text-[11px] text-slate-400">
                        {fact.label}
                      </span>
                      <span className="text-xs font-semibold text-slate-200 line-clamp-1 mt-0.5">
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#0e1626]/40 p-6 backdrop-blur-xl shadow-xl sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-cyan-400">
                    <Truck className="size-5 shrink-0" />
                    <h2 className="text-base font-bold text-white sm:text-lg">
                      ارسال سفارش و پشتیبانی باربری
                    </h2>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2">
                    {shippingHighlights.map((ship, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-right"
                      >
                        <div className="text-sm font-extrabold text-cyan-400">
                          {ship.label}
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                          {ship.description}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-bold mb-3">
                      <FileText className="size-4" />
                      مراحل ثبت سفارش رسمی
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                      {contractSteps.map((step, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-[11px] font-bold text-cyan-400 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="leading-5 text-slate-300">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 p-3 text-xs text-cyan-300">
                  <ShieldCheck className="size-5 shrink-0 text-cyan-400" />

                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </main>
  );
}
