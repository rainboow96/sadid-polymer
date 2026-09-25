import Hero from "@/components/sections/hero";
import TrustBar from "@/components/sections/TrustBar";
import Features from "@/components/sections/features";
import Stats from "@/components/sections/stats";
import { PurchaseSteps } from "@/components/sections/purchaseSteps";
import Articles from "@/components/sections/articles";
import FAQ from "@/components/sections/faq";
import MapSection from "@/components/sections/mapSection";

export default function HomePage() {
  return (
    <>
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