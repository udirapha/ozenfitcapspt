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

const Index = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div className={`transition-all duration-700 ${visible ? "opacity-100" : "opacity-0 max-h-0 overflow-hidden"}`}>
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
