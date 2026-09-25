import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/breadcrumb";
import Reveal from "@/components/ui/reveal";
import FAQ from "@/components/sections/faq";
import PageLayout from "@/components/layout/PageLayout";

export const metadata: Metadata = {
  title: "سوالات متداول | سدید پلیمر",
  description:
    "پاسخ به سوالات پرتکرار درباره لوله لی‌فلت، اتصالات و کیسه کاشت نهال سدید پلیمر",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <PageLayout>
      <Breadcrumb
        className="mb-3 sm:mb-4"
        items={[
          { label: "صفحه اصلی", href: "/" },
          { label: "سوالات متداول" },
        ]}
      />
      <Reveal delay={0.1}>
        <FAQ />
      </Reveal>
    </PageLayout>
  );
}
