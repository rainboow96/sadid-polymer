import FAQ from "@/components/sections/faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سوالات متداول | سدید پلیمر",
  description: "پاسخ به سوالات پرتکرار درباره لوله لی‌فلت، اتصالات و کیسه کاشت نهال سدید پلیمر",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-20">
      <FAQ />
    </main>
  );
} 