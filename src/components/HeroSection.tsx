import { Flame, Utensils, Zap, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";
import productBundle from "@/assets/product-bundle.webp";
import logo from "@/assets/logo-ozenfit.png";

const HeroSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    s.async = true;
    document.head.appendChild(s);

    if (iframeRef.current) {
      iframeRef.current.src =
        "https://scripts.converteai.net/e10f2ed1-387e-42b5-add3-183c76638cc5/players/69b02f89820829989cca9ec9/v4/embed.html" +
        (location.search || "?") +
        "&vl=" +
        encodeURIComponent(location.href);
    }

    return () => {
      try { document.head.removeChild(s); } catch {}
    };
  }, []);

  return (
    <>
      {/* Urgency bars */}
      <div className="urgency-bar text-center py-2.5 px-4 text-sm md:text-base font-bold">
        ⚠️ ATENÇÃO: Devido à elevada procura, os nossos frascos de OZENFIT CAPS estão quase esgotados! ÚLTIMAS UNIDADES!
      </div>
      <div className="green-bar text-center py-2 px-4 text-xs md:text-sm font-semibold">
        ATENÇÃO: Este produto está prestes a esgotar, por isso tem uma oferta especial apenas hoje!
      </div>

      {/* Hero */}
      <section className="bg-background py-8 md:py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img
              src={logo}
              alt="OzenFit Caps"
              className="w-48 md:w-72 h-auto"
            />
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
            O PODER DO OZEMPIC <span className="text-primary">EM CÁPSULAS.</span>
          </h1>
          <p className="font-heading text-base md:text-lg text-muted-foreground font-semibold mb-8 max-w-2xl mx-auto">
            Chega de gastar fortunas em injeções e ainda sofrer com efeito sanfona ou rebote.
          </p>

          {/* VSL Video */}
          <div className="max-w-[720px] mx-auto mb-10">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div
                id="ifr_69b02f89820829989cca9ec9_wrapper"
                style={{ margin: "0 auto", width: "100%" }}
              >
                <div
                  style={{ position: "relative", padding: "56.25% 0 0 0" }}
                  id="ifr_69b02f89820829989cca9ec9_aspect"
                >
                  <iframe
                    ref={iframeRef}
                    frameBorder="0"
                    allowFullScreen
                    src="about:blank"
                    id="ifr_69b02f89820829989cca9ec9"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    referrerPolicy="origin"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <a href="#preco" className="btn-cta pulse-animation text-base md:text-lg">
                QUERO EXPERIMENTAR AGORA! 🔥
              </a>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <img
              src={productBundle}
              alt="OzenFit Caps - Suplemento para emagrecimento"
              className="w-56 md:w-80 float-animation"
            />
          </div>

          {/* Benefits quick list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8 text-left">
            {[
              { icon: Flame, text: "Queime calorias sem exercícios constantes" },
              { icon: Utensils, text: "Reduz a vontade de comer e aumenta a saciedade" },
              { icon: Zap, text: "Melhora o funcionamento do intestino" },
              { icon: ShieldCheck, text: "100% natural, sem efeitos secundários" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-success-light flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{item.text}</span>
              </div>
            ))}
          </div>

          <p className="font-heading text-lg md:text-xl font-bold text-foreground mb-6">
            SEM DIETAS LOUCAS OU EXERCÍCIOS FÍSICOS
          </p>

          <a href="#preco" className="btn-cta pulse-animation text-base md:text-lg">
            QUERO EXPERIMENTAR! 🔥
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
