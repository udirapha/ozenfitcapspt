import { useState } from "react";
import offer1 from "@/assets/offer-1-bottle.png";
import offer3 from "@/assets/offer-3-bottles.png";
import offer5 from "@/assets/offer-5-bottles.png";
import klarnaLogo from "@/assets/logo-klarna.png";

const CHECKOUT_LINKS: Record<string, string> = {
  "1pote": "https://1ievzb-tk.myshopify.com/cart/52816771678544:1?channel=buy_button",
  "3potes": "https://1ievzb-tk.myshopify.com/cart/52816771711312:1?channel=buy_button",
  "5potes": "https://1ievzb-tk.myshopify.com/cart/52816771744080:1?channel=buy_button",
};

type PaymentMode = "online" | "cod";

const OffersSectionCombined = () => {
  const [mode, setMode] = useState<PaymentMode>("online");

  const offers = [
    {
      featured: true,
      label: "IL PIÙ VENDUTO",
      title: "TRATTAMENTO 5 MESI",
      subtitle: "PAGA 3 E RICEVI 5! + E-book",
      image: offer5,
      price: "€119,90",
      priceNote: "o 3x di €39,97",
      originalPrice: "€199,50",
      shipping: "Spedizione gratuita",
      checkoutKey: "5potes",
      codPackage: "5meses",
    },
    {
      featured: false,
      label: "",
      title: "TRATTAMENTO 3 MESI",
      subtitle: "PAGA 2 E RICEVI 3! + E-book",
      image: offer3,
      price: "€89,90",
      priceNote: "o 3x di €29,97",
      originalPrice: "€119,70",
      shipping: "Spedizione gratuita",
      checkoutKey: "3potes",
      codPackage: "3meses",
    },
    {
      featured: false,
      label: "",
      title: "TRATTAMENTO 1 MESE",
      subtitle: "Per provare RICEVI 1!",
      image: offer1,
      price: "€39,90",
      priceNote: "o 3x di €13,30",
      originalPrice: "€59,90",
      shipping: "Spedizione gratuita",
      checkoutKey: "1pote",
      codPackage: "1mes",
    },
  ];

  const handleCodClick = (codPackage: string) => {
    // Set the package in the COD form and scroll to it
    const formSection = document.getElementById("modulo");
    if (formSection) {
      // Dispatch a custom event so the COD form can pick up the selected package
      window.dispatchEvent(
        new CustomEvent("select-cod-package", { detail: { package: codPackage } })
      );
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="prezzo" className="bg-background py-12 md:py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-lg">🔒</span>
          <span className="font-heading font-bold text-sm md:text-base text-primary uppercase tracking-wide">
            Acquisto 100% Sicuro!
          </span>
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
          Scegli il <span className="text-primary">MIGLIOR TRATTAMENTO</span> per te!
        </h2>
        <p className="text-center text-muted-foreground mb-6 text-sm">
          Inizia oggi stesso a dimagrire con salute.
        </p>

        {/* Payment mode toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl border border-border bg-card p-1.5 gap-1">
            <button
              onClick={() => setMode("online")}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                mode === "online"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              💳 Paga Online
            </button>
            <button
              onClick={() => setMode("cod")}
              className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                mode === "cod"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              💰 Paga alla Consegna
            </button>
          </div>
        </div>

        {/* Klarna banner - only for online mode */}
        {mode === "online" && (
          <div className="flex items-center justify-center gap-3 mb-6 bg-card border border-border rounded-lg py-2.5 px-4 max-w-md mx-auto animate-fade-in">
            <img src={klarnaLogo} alt="Klarna" className="h-7 w-auto" />
            <span className="text-sm font-semibold text-foreground">Paga in 3 rate senza interessi con Klarna!</span>
          </div>
        )}

        {mode === "cod" && (
          <div className="flex items-center justify-center gap-3 mb-6 bg-card border border-border rounded-lg py-2.5 px-4 max-w-md mx-auto animate-fade-in">
            <span className="text-lg">📦</span>
            <span className="text-sm font-semibold text-foreground">Non paghi nulla adesso — Paghi solo alla consegna!</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {offers.map((o, i) => (
            <div key={i} className={`card-offer ${o.featured ? "card-offer-featured" : ""} flex flex-col`}>
              {o.featured && (
                <div className="badge-featured text-center py-2 text-xs font-bold uppercase tracking-wider">
                  {o.label}
                </div>
              )}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-foreground text-center text-sm mb-1">{o.title}</h3>
                <p className="font-heading text-primary text-center text-xs font-semibold mb-4">{o.subtitle}</p>
                <div className="flex justify-center mb-4">
                  <img src={o.image} alt={o.title} className="w-28 h-28 object-contain" />
                </div>
                <div className="text-center mb-4 mt-auto">
                  <p className="text-xs text-muted-foreground line-through">{o.originalPrice}</p>
                  <p className="font-heading text-2xl font-black text-primary">{o.price}</p>
                  {o.priceNote && <p className="text-xs text-muted-foreground">{o.priceNote}</p>}
                </div>

                {mode === "online" ? (
                  <>
                    <a
                      href={CHECKOUT_LINKS[o.checkoutKey]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cta w-full text-center text-sm py-3"
                    >
                      COMPRA ORA 🔥
                    </a>
                    {o.priceNote && (
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <img src={klarnaLogo} alt="Klarna" className="h-5 w-auto" />
                        <span className="text-xs text-muted-foreground font-semibold">{o.priceNote}</span>
                      </div>
                    )}
                    <p className="text-xs text-center text-primary font-bold mt-2">💳 Pagamento sicuro online!</p>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleCodClick(o.codPackage)}
                      className="btn-cta w-full text-center text-sm py-3"
                    >
                      ORDINA ORA 📦
                    </button>
                    <p className="text-xs text-center text-primary font-bold mt-2">💰 Paghi solo alla consegna!</p>
                  </>
                )}
                <p className="text-xs text-center text-muted-foreground mt-3">{o.shipping}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl mx-auto">
          {[
            { icon: "🔒", text: "Acquisto Sicuro" },
            { icon: "✅", text: "Soddisfazione Garantita" },
            { icon: "🚚", text: "Consegna 24-72h in Italia" },
            { icon: "🔐", text: "Privacy Protetta" },
            { icon: mode === "online" ? "💳" : "💰", text: mode === "online" ? "Pagamento Sicuro Online" : "Pagamento alla Consegna" },
            { icon: "🛡️", text: "Sito 100% Sicuro" },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="text-lg">{badge.icon}</span>
              <span className="font-semibold">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSectionCombined;
