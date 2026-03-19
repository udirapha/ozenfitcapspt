import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import PromiseSection from "@/components/PromiseSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import IngredientsSection from "@/components/IngredientsSection";
import UsageSection from "@/components/UsageSection";
import AuthoritySection from "@/components/AuthoritySection";
import GuaranteeSection from "@/components/GuaranteeSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import OffersSection from "@/components/OffersSection";
import CODForm from "@/components/CODForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import { shouldUnlockFromPayload, shouldUnlockFromSmartplayer } from "@/lib/vsl-unlock";

const UNLOCK_TIME_SECONDS = 7 * 60 + 30; // 7:30

const Index = () => {
  const [contentUnlocked, setContentUnlocked] = useState(false);

  useEffect(() => {
    if (contentUnlocked) return;

    const pageLoadTime = Date.now();
    const unlockContent = () => setContentUnlocked(true);

    const handleMessage = (event: MessageEvent) => {
      if (shouldUnlockFromPayload(event.data, UNLOCK_TIME_SECONDS)) {
        unlockContent();
      }
    };

    window.addEventListener("message", handleMessage);

    const interval = window.setInterval(() => {
      const elapsedSeconds = (Date.now() - pageLoadTime) / 1000;
      if (elapsedSeconds >= UNLOCK_TIME_SECONDS) {
        unlockContent();
        return;
      }
      if (shouldUnlockFromSmartplayer(UNLOCK_TIME_SECONDS)) {
        unlockContent();
      }
    }, 1000);

    return () => {
      window.removeEventListener("message", handleMessage);
      window.clearInterval(interval);
    };
  }, [contentUnlocked]);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <div
        className={`transition-all duration-700 ${
          contentUnlocked
            ? "opacity-100 max-h-none"
            : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
        }`}
      >
        <BenefitsSection />
        <PromiseSection />
        <HowItWorksSection />
        <IngredientsSection />
        <UsageSection />
        <AuthoritySection />
        <GuaranteeSection />
        <BeforeAfterSection />
        <OffersSection />
        <CODForm />
        <TestimonialsSection />
        <FAQSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
