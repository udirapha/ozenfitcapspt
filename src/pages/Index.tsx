import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import IngredientsSection from "@/components/IngredientsSection";
import UsageSection from "@/components/UsageSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OffersSection from "@/components/OffersSection";
import FAQSection from "@/components/FAQSection";
import CODForm from "@/components/CODForm";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <IngredientsSection />
      <UsageSection />
      <GuaranteeSection />
      <TestimonialsSection />
      <OffersSection />
      <CODForm />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
