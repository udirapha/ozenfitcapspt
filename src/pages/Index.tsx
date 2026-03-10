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
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
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
  );
};

export default Index;
