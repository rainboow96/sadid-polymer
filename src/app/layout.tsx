import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "./globals.css";

import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { GoogleAnalytics } from "@next/third-parties/google";

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

const SITE_URL = "https://sadidpolymer.ir";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "سدید پلیمر | پخش تخصصی لوله‌های لی‌فلت، شیلنگ باغبانی و کیسه کاشت نهال",
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
    "سدید پلیمر",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "سدید پلیمر | پخش تخصصی لوله‌های لی‌فلت و شیلنگ باغبانی",
    description: "توزیع و پخش عمده لوله لی‌فلت آبیاری، شیلنگ باغبانی و کیسه کاشت نهال.",
    url: SITE_URL,
    siteName: "سدید پلیمر",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "سدید پلیمر | لوله لی فلت و شیلنگ باغبانی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "سدید پلیمر | پخش تخصصی لوله‌های لی‌فلت و شیلنگ باغبانی",
    description: "توزیع و پخش عمده لوله لی‌فلت آبیاری، شیلنگ باغبانی و کیسه کاشت نهال.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "سدید پلیمر",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  description:
    "مرکز پخش و توزیع تخصصی لوله‌های لی‌فلت آبیاری، شیلنگ‌های باغبانی و کیسه کاشت نهال.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+98-9372296015", 
    contactType: "sales",
    areaServed: "IR",
    availableLanguage: "Persian",
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={cn("scroll-smooth", vazir.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="flex min-h-dvh w-full flex-col font-sans bg-background text-foreground antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        <SmoothScroll>
          <Navbar />
          <main className="w-full flex-1 min-w-0 overflow-x-clip">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <GoogleAnalytics gaId="G-XNX5LVRK27" />
      </body>
    </html>
  );
}
