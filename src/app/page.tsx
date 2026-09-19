import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import TrustBar from "@/components/sections/TrustBar";
import Stats from "@/components/sections/stats";
import Articles from "@/components/sections/articles";
import FAQ from "@/components/sections/faq";
import { PurchaseSteps } from "@/components/sections/purchaseSteps";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Features />
      <Stats/>
      <PurchaseSteps/>
      <Articles/>
      <FAQ/>


    </>
  );
}
