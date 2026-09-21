import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/breadcrumb";
import Reveal from "@/components/ui/reveal";
import FAQ from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "سوالات متداول | سدید پلیمر",
  description:
    "پاسخ به سوالات پرتکرار درباره لوله لی‌فلت، اتصالات و کیسه کاشت نهال سدید پلیمر",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <section className="relative pt-24 pb-2 sm:pt-28 sm:pb-4">
        <div className="mx-auto max-w-7xl px-5">
          <Breadcrumb
            items={[
              { label: "صفحه اصلی", href: "/" },
              { label: "سوالات متداول" },
            ]}
          />
        </div>
      </section>

      <section className="py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-5">
          <FAQ />
        </div>
      </section>
    </>
  );
}
