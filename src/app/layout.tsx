import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "./globals.css";

import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import SmoothScroll from "@/components/ui/SmoothScroll";

const vazir = localFont({
  src: [
    {
      path: "./fonts/Vazir-Regular-FD.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Vazir-Medium-FD.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Vazir-Bold-FD.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "سدید پلیمر | پخش تخصصی لوله‌های لی‌فلت، شیلنگ باغبانی و کیسه نهال",
    template: "%s | سدید پلیمر",
  },
  description:
    "مرکز پخش و توزیع تخصصی لوله‌های لی‌فلت آبیاری، شیلنگ‌های باغبانی و کیسه کاشت نهال. تأمین تجهیزات باکیفیت برای باغداران و گلخانه‌داران سراسر کشور.",
  keywords: [
    "لوله لی فلت",
    "شیلنگ باغبانی",
    "کیسه نهال",
    "کیسه کاشت نهال",
    "پخش لوله لی فلت",
    "پخش شیلنگ باغبانی",
    "نوار تیپ",
    "تجهیزات آبیاری قطره ای",
    "سدید پلیمر",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "سدید پلیمر | پخش تخصصی لوله‌های لی‌فلت و شیلنگ باغبانی",
    description: "توزیع و پخش عمده لوله لی‌فلت آبیاری، شیلنگ باغبانی و کیسه کاشت نهال.",
    locale: "fa_IR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={cn("font-sans", vazir.variable)}
    >
      <body className="flex min-h-screen w-full flex-col overflow-x-clip">
        <SmoothScroll>
          <Navbar />
          <main className="min-w-0 flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

