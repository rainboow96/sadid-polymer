import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";
import { 
  Clock3, 
  Building2, 
  ChevronLeft, 
  PhoneCall, 
  Mail, 
  MessageCircle, 
  Send, 
  MapPin 
} from "lucide-react";
import { company } from "@/components/data/content";
import { FadeIn } from "@/components/ui/fade-in";

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

      <header className="relative pb-8 pt-28 sm:pb-12 sm:pt-36">
        <div className="mx-auto max-w-5xl px-5 text-right">
          <FadeIn>
            <nav aria-label="مسیر صفحه" className="mb-4 flex items-center justify-start gap-2 text-xs text-slate-400">
              <Link href="/" className="transition hover:text-cyan-400">صفحه اصلی</Link>
              <ChevronLeft className="size-3.5 text-slate-600" />
              <span className="font-medium text-cyan-400">تماس با ما</span>
            </nav>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              ارتباط با کارشناسان <span className="text-cyan-400">{company.name}</span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
              برای استعلام قیمت روز محصولات، پیش‌فاکتور و مشاوره تخصصی سیستم‌های آبیاری در کنار شماییم.
            </p>
          </FadeIn>
        </div>
      </header>


      <section className="relative py-4">
        <div className="mx-auto max-w-5xl px-5">
          <FadeIn delay={0.1}>
            <div className="mb-4 flex items-center gap-2.5 text-xs text-slate-300 sm:text-sm">
              <Clock3 className="size-4.5 shrink-0 text-cyan-400" />
              <span className="font-bold text-white">ساعات کاری:</span>
              <span className="text-slate-400">{company.workingHours}</span>
            </div>

            <ul className="divide-y divide-white/10 border-y border-white/10">
              {company.channels.map((channel) => {
                const Icon = channelIcons[channel.id] || Send;
                return (
                  <li key={channel.id}>
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center justify-between px-3 py-4 transition-all duration-200 hover:bg-white/[0.04] sm:px-4"
                    >
                      <div className="flex items-center gap-3.5">
                        <Icon className="size-5 text-cyan-500" />
                        <span className="text-sm font-semibold text-white transition-colors group-hover:text-cyan-300">
                          {channel.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-400 transition-colors group-hover:text-slate-200 sm:text-sm" dir={channel.ltr ? "ltr" : "rtl"}>
                          {channel.value}
                        </span>
                        <ChevronLeft className="size-4 shrink-0 text-slate-600 transition-transform duration-200 group-hover:-translate-x-1 group-hover:text-cyan-400" />
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </FadeIn>
        </div>
      </section>

  
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-5 text-right">
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-2 text-cyan-400">
              <Building2 className="size-5 shrink-0" />
              <h2 className="text-base font-bold text-white sm:text-lg">خرید عمده و قراردادهای دولتی</h2>
            </div>
            
            <div className="mt-4 flex flex-col gap-2.5">
              {company.addresses.map((addr, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                  <MapPin className="mt-0.5 size-4.5 shrink-0 text-cyan-400" />
                  <p className="leading-6">
                    <strong className="font-bold text-slate-200">{addr.title}:</strong> {addr.value}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-4 max-w-2xl text-xs leading-7 text-slate-300 sm:text-sm">
              برای تعاونی‌های کشاورزی، پروژه‌های جهاد کشاورزی، پیمانکاران و فروشگاه‌های توزیع، امکان عقد قرارداد رسمی با <strong className="font-semibold text-cyan-300">تخفیف پله‌ای</strong> و تحویل فوری فراهم است.
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
