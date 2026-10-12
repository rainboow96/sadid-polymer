import Hero from "@/components/sections/hero";
import TrustBar from "@/components/sections/TrustBar";
import Features from "@/components/sections/features";
import Stats from "@/components/sections/stats";
import { PurchaseSteps } from "@/components/sections/purchaseSteps";
import Articles from "@/components/sections/articles";
import FAQ from "@/components/sections/faq";
import MapSection from "@/components/sections/mapSection";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "سدید پلیمر",
    url: "https://sadidpolymer.ir",
    logo: "https://sadidpolymer.ir/favicon.png",
    description: "مرکز پخش و توزیع تخصصی لوله‌های لی‌فلت آبیاری، شیلنگ‌های باغبانی و کیسه کاشت نهال.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+98-9372296015", 
      contactType: "sales",
      areaServed: "IR",
      availableLanguage: "Persian",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <TrustBar />
      <Features />
      <Stats />
      <PurchaseSteps />
      <Articles />
      <FAQ />
      <MapSection />
    </>
  );
}
