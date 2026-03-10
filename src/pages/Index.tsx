import HeroSection from "@/components/HeroSection";
import VSLSection from "@/components/VSLSection";
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
      {/* 1-2. Scarcity + Headline + Product */}
      <HeroSection />
      {/* 3. VSL Video */}
      <VSLSection />
      {/* 4. Quick Benefits */}
      <BenefitsSection />
      {/* 5. Strong Promise */}
      <PromiseSection />
      {/* 6. How the Formula Works */}
      <HowItWorksSection />
      {/* 7. Ingredients */}
      <IngredientsSection />
      {/* 8. How to Use */}
      <UsageSection />
      {/* 9. Authority / Doctor */}
      <AuthoritySection />
      {/* 10. Guarantee */}
      <GuaranteeSection />
      {/* 11. Before & After Results */}
      <BeforeAfterSection />
      {/* 12. Offers + COD Form */}
      <OffersSection />
      <CODForm />
      {/* 13. Testimonials */}
      <TestimonialsSection />
      {/* 14. FAQ */}
      <FAQSection />
      {/* 15. Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;
