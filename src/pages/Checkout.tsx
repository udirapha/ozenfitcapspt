import { useState, useEffect } from "react";
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

const UNLOCK_TIME_SECONDS = 7 * 60 + 30; // 7:30

const Checkout = () => {
  const [contentUnlocked, setContentUnlocked] = useState(false);

  useEffect(() => {
    if (contentUnlocked) return;

    const handleMessage = (event: MessageEvent) => {
      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;

        if (data?.type === "player_event" && data?.event === "timeupdate") {
          if (data.currentTime >= UNLOCK_TIME_SECONDS) setContentUnlocked(true);
        }
        if (data?.event === "smartplayer_timeupdate" || data?.eventName === "timeupdate") {
          const time = data?.currentTime || data?.time || 0;
          if (time >= UNLOCK_TIME_SECONDS) setContentUnlocked(true);
        }
        if (typeof event.data === "string" && event.data.includes("smartplayer")) {
          const parsed = JSON.parse(event.data);
          if (parsed?.currentTime >= UNLOCK_TIME_SECONDS) setContentUnlocked(true);
        }
      } catch {}
    };

    window.addEventListener("message", handleMessage);

    const interval = setInterval(() => {
      try {
        const players = (window as any).smartplayer?.instances;
        if (players && players.length > 0) {
          const player = players[0];
          if (
            player.smartAutoPlay?.currentTime >= UNLOCK_TIME_SECONDS ||
            player.video?.currentTime >= UNLOCK_TIME_SECONDS ||
            player.currentTime >= UNLOCK_TIME_SECONDS
          ) {
            setContentUnlocked(true);
          }
        }
      } catch {}
    }, 1000);

    return () => {
      window.removeEventListener("message", handleMessage);
      clearInterval(interval);
    };
  }, [contentUnlocked]);

  return (
    <div className="min-h-screen bg-background">
      <HeroSectionCheckout contentUnlocked={contentUnlocked} />

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
        <OffersSectionCheckout />
        <TestimonialsSection />
        <FAQSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Checkout;
