import type { Metadata } from "next";
import type { ComponentType } from "react";
import {
  Clock3,
  Building2,
  ChevronLeft,
  PhoneCall,
  Mail,
  MessageCircle,
  Send,
  MapPin,
} from "lucide-react";
import { company } from "@/components/data/content";
import Reveal from "@/components/ui/reveal"; // استفاده از Reveal برای یکپارچگی
import Breadcrumb from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: `تماس با ما | ${company.name}`,
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
  whatsapp: MessageCircle,
  telegram: Send,
  rubika: Send,
  instagram: InstagramIcon,
  email: Mail,
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen text-slate-100 selection:bg-cyan-500 selection:text-black">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-full bg-[radial-gradient(ellipse_60%_50%_at_80%_-10%,rgba(6,182,212,0.15),transparent_70%)]" />

      <section className="relative pt-24 pb-6 sm:pt-32 sm:pb-8"> 
        <div className="mx-auto max-w-7xl px-5 text-right"> 
          <Breadcrumb
            items={[
              { label: "صفحه اصلی", href: "/" },
              { label: "تماس با ما" },
            ]}
          />

          <Reveal>
            <h1 className="mt-10 text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
              ارتباط با کارشناسان <span className="text-gradient">{company.name}</span> {/* اضافه کردن text-gradient برای یکپارچگی */}
            </h1>
            <p className="mt-3 max-w-2xl text-xs leading-7 text-slate-300 sm:text-sm sm:leading-8">
              برای استعلام قیمت روز محصولات، پیش‌فاکتور و مشاوره تخصصی سیستم‌های آبیاری در کنار شماییم.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-10 sm:py-14"> 
        <div className="mx-auto max-w-7xl px-5">
          <Reveal delay={0.1}> 
            <div className="mb-4 flex items-center gap-2.5 text-xs text-slate-300 sm:text-sm">
              <Clock3 className="size-4 shrink-0 text-cyan-400 sm:size-[18px]" />
              <span className="font-bold text-white">ساعات کاری:</span>
              <span className="text-slate-400">{company.workingHours}</span>
            </div>


            <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-sm">
              <ul className="divide-y divide-white/10">
                {company.channels.map((channel) => {
                  const Icon = channelIcons[channel.id] || Send;
                  return (
                    <li key={channel.id}>
                      <a
                        href={channel.href}
                        target={channel.href.startsWith("http") ? "_blank" : undefined}
                        rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-center justify-between px-4 py-4 transition-all duration-200 hover:bg-white/[0.04] sm:px-6"
                      >
                        <div className="flex items-center gap-3.5">
                      
                          <div className="flex size-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                            <Icon className="size-4.5 sm:size-5" />
                          </div>
                          <span className="text-sm font-semibold text-white transition-colors group-hover:text-cyan-300">
                            {channel.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span
                            className="text-xs text-slate-400 transition-colors group-hover:text-slate-200 sm:text-sm font-mono"
                            dir={channel.ltr ? "ltr" : "rtl"}
                          >
                            {channel.value}
                          </span>
                          <ChevronLeft className="size-4 shrink-0 text-slate-600 transition-transform duration-200 group-hover:-translate-x-1 group-hover:text-cyan-400" />
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

      <section className="py-10 sm:py-14"> 
        <div className="mx-auto max-w-7xl px-5 text-right"> 
          <Reveal delay={0.2}> 
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-sm sm:p-8">
              <div className="flex items-center gap-2 text-cyan-400">
                <Building2 className="size-5 shrink-0" />
                <h2 className="text-base font-bold text-white sm:text-lg">
                  خرید عمده و قراردادهای دولتی
                </h2>
              </div>

              <div className="mt-5 flex flex-col gap-3">
                {company.addresses.map((addr, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-cyan-400 sm:size-[18px]" />
                    <p className="leading-6">
                      <strong className="font-bold text-slate-200">{addr.title}:</strong>{" "}
                      {addr.value}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 max-w-3xl border-t border-white/5 pt-4 text-xs leading-7 text-slate-300 sm:text-sm">
                برای تعاونی‌های کشاورزی، پروژه‌های جهاد کشاورزی، پیمانکاران و فروشگاه‌های توزیع، امکان عقد قرارداد رسمی با{" "}
                <strong className="font-semibold text-cyan-300">تخفیف پله‌ای</strong> و تحویل فوری فراهم است.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
