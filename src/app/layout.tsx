import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";



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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa" dir="rtl"
      className={cn("font-sans", vazir.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
