import { useState, useEffect } from "react";
import HeroSectionCombined from "@/components/HeroSectionCombined";
import BenefitsSection from "@/components/BenefitsSection";
import PromiseSection from "@/components/PromiseSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import IngredientsSection from "@/components/IngredientsSection";
import UsageSection from "@/components/UsageSection";
import AuthoritySection from "@/components/AuthoritySection";
import GuaranteeSection from "@/components/GuaranteeSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import OffersSectionCombined from "@/components/OffersSectionCombined";
import CODFormCombined from "@/components/CODFormCombined";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Combined = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSectionCombined contentVisible={visible} />
      <div className={`transition-all duration-700 ${visible ? "opacity-100" : "opacity-0 max-h-0 overflow-hidden"}`}>
        <BenefitsSection />
        <PromiseSection />
        <HowItWorksSection />
        <IngredientsSection />
        <UsageSection />
        <AuthoritySection />
        <GuaranteeSection />
        <BeforeAfterSection />
        <OffersSectionCombined />
        <CODFormCombined />
        <TestimonialsSection />
        <FAQSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Combined;
