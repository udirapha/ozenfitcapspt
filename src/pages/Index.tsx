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

const UNLOCK_TIME_SECONDS = 7 * 60 + 30; // 7:30

const Index = () => {
  const [contentUnlocked, setContentUnlocked] = useState(false);

  useEffect(() => {
    // Listen for ConverteAI smartplayer time events
    const handleMessage = (event: MessageEvent) => {
      if (contentUnlocked) return;

      try {
        // ConverteAI sends postMessage with player events
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        
        // Check for time update events from smartplayer
        if (data?.type === "player_event" && data?.event === "timeupdate") {
          if (data.currentTime >= UNLOCK_TIME_SECONDS) {
            setContentUnlocked(true);
          }
        }
        
        // Alternative event format from ConverteAI
        if (data?.event === "smartplayer_timeupdate" || data?.eventName === "timeupdate") {
          const time = data?.currentTime || data?.time || 0;
          if (time >= UNLOCK_TIME_SECONDS) {
            setContentUnlocked(true);
          }
        }

        // Generic smartplayer event format
        if (typeof event.data === "string" && event.data.includes("smartplayer")) {
          const parsed = JSON.parse(event.data);
          if (parsed?.currentTime >= UNLOCK_TIME_SECONDS) {
            setContentUnlocked(true);
          }
        }
      } catch {
        // Not a JSON message, ignore
      }
    };

    window.addEventListener("message", handleMessage);

    // Fallback: also check via smartplayer global API
    const interval = setInterval(() => {
      if (contentUnlocked) return;
      try {
        const players = (window as any).smartplayer?.instances;
        if (players && players.length > 0) {
          const player = players[0];
          if (player.smartAutoPlay?.currentTime >= UNLOCK_TIME_SECONDS || 
              player.video?.currentTime >= UNLOCK_TIME_SECONDS ||
              player.currentTime >= UNLOCK_TIME_SECONDS) {
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
