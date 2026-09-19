import Link from "next/link";
import Image from "next/image";
import type { ComponentType } from "react";
import {
  ArrowUp,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  Send,
} from "lucide-react";

import { company } from "../data/content";

interface NavLink {
  title: string;
  href: string;
}

const navLinks: NavLink[] = [
  { title: "صفحه اصلی", href: "#home" },
  { title: "محصولات", href: "#products" },
  { title: "سوالات متداول", href: "#faq" },
  { title: "تماس با ما", href: "#contact" },
];

const products = [
  "لی‌فلت ۲ اینچ",
  "لی‌فلت ۳ اینچ",
  "لی‌فلت ۴ اینچ",
  "لی‌فلت ۵ و ۶ اینچ",
  "کیسه کاشت نهال",
];
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

type SocialIconProps = {
  className?: string;
};

const socialIcons: Record<string, ComponentType<SocialIconProps>> = {
  instagram: InstagramIcon,
  telegram: Send,
  whatsapp: MessageCircle,
};

export default function Footer() {
  const phoneChannel = company.channels.find(
    (channel) => channel.id === "phone",
  );

  const emailChannel = company.channels.find(
    (channel) => channel.id === "email",
  );

  const socialChannels = company.channels.filter((channel) =>
    ["instagram", "telegram", "whatsapp"].includes(channel.id),
  );

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/[0.07] bg-[#040814]"
    >

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-[#00e0ff]/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">

          <div>
            <Image
              src="/logo-sadid.svg"
              alt={company.name}
              width={180}
              height={180}
              priority
            />

            <p className="mt-4 max-w-sm text-[13px] leading-[2.1] text-slate-400">
              {company.description}
            </p>

            <div className="mt-5 flex gap-2.5">
              {socialChannels.map((channel) => {
                const Icon = socialIcons[channel.id];

                if (!Icon) return null;

                return (
                  <a
                    key={channel.id}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={channel.title}
                    title={channel.title}
                    className="btn-ghost flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition hover:text-white"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="دسترسی سریع">
            <p className="text-[14px] font-extrabold text-white">
              دسترسی سریع
            </p>

            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative inline-block pb-1 text-[13.5px] font-medium text-slate-400 transition hover:text-slate-100"
                  >
                    {link.title}
                    <span className="absolute bottom-0 left-0 h-[2px] w-full origin-center scale-x-0 rounded-full bg-brand-blue-gradient transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="محصولات">
            <p className="text-[14px] font-extrabold text-white">محصولات</p>

            <ul className="mt-4 space-y-2.5 text-[13.5px] font-medium text-slate-400">
              {products.map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="transition hover:text-[#7df9ff]"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[14px] font-extrabold text-white">
              ارتباط با ما
            </p>

            <ul className="mt-4 space-y-3 text-[13px] font-medium text-slate-400">
              {phoneChannel && (
                <li className="flex items-start gap-2.5">
                  <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-[#00e0ff]" />

                  <a
                    href={phoneChannel.href}
                    dir="ltr"
                    className="transition hover:text-white"
                  >
                    {company.phoneDisplay}
                  </a>
                </li>
              )}

              {emailChannel && (
                <li className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#00e0ff]" />

                  <a
                    href={emailChannel.href}
                    dir="ltr"
                    className="transition hover:text-white"
                  >
                    {emailChannel.value}
                  </a>
                </li>
              )}

              {company.addresses[0] && (
                <li className="flex items-start gap-2.5 leading-6">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#00e0ff]" />
                  <span>{company.addresses[0].value}</span>
                </li>
              )}
            </ul>

            <a
              href="#top"
              className="btn-ghost mt-5 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-[12.5px] font-bold text-white"
            >
              <ArrowUp className="h-4 w-4 text-[#00e0ff]" />
              بازگشت به بالا
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] pt-6 text-[12px] font-medium text-slate-500 sm:flex-row">
          <p>{company.copyright}</p>

          <p dir="ltr">Designed &amp; Built by Rainbow</p>
        </div>
      </div>
    </footer>
  );
}
