import HeroSectionCheckout from "@/components/HeroSectionCheckout";
import BenefitsSection from "@/components/BenefitsSection";
import PromiseSection from "@/components/PromiseSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import IngredientsSection from "@/components/IngredientsSection";
import UsageSection from "@/components/UsageSection";
import AuthoritySection from "@/components/AuthoritySection";
import GuaranteeSection from "@/components/GuaranteeSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import OffersSectionCheckout from "@/components/OffersSectionCheckout";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSectionCheckout />
      <BenefitsSection />
      <PromiseSection />
      <HowItWorksSection />
      <IngredientsSection />
      <UsageSection />
      <AuthoritySection />
      <GuaranteeSection />
      <BeforeAfterSection />
      <OffersSectionCheckout />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Checkout;
