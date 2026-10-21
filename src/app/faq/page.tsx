import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/breadcrumb";
import Reveal from "@/components/ui/reveal";
import FAQ from "@/components/sections/faq";
import PageLayout from "@/components/layout/PageLayout";
import { FAQS } from "@/components/data/content"; 

const SITE_URL = "https://sadidpolymer.ir";

export const metadata: Metadata = {
  title: "سوالات متداول | سدید پلیمر",
  description:
    "پاسخ به سوالات پرتکرار درباره لوله لی‌فلت، اتصالات و کیسه کاشت نهال سدید پلیمر",
  alternates: { canonical: `${SITE_URL}/faq` },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
