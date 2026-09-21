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
    default: "سدید پلیمر | تولیدکننده شیلنگ باغبانی و کیسه نهال",
    template: "%s | سدید پلیمر",
  },
  description:
    "تولید و عرضه شیلنگ و نوارهای باغبانی باکیفیت و کیسه‌های مشکی کاشت نهال. سدید پلیمر، انتخاب مطمئن باغداران و نهال‌کاران.",
  keywords: [
    "شیلنگ باغبانی",
    "کیسه نهال",
    "کیسه کاشت نهال",
    "نوار تیپ",
    "سدید پلیمر",
    "تولیدکننده شیلنگ",
  ],
  icons: {
    icon: "/favicon.png",
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

