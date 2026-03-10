import { Flame, Utensils, Zap, ShieldCheck } from "lucide-react";
import productBottle from "@/assets/product-bottle.png";

const HeroSection = () => {
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
          <h1 className="font-heading text-3xl md:text-5xl font-black text-foreground leading-tight mb-4">
            O PODER DO OZEMPIC <span className="text-primary">EM CÁPSULAS.</span>
          </h1>
          <p className="font-heading text-base md:text-lg text-muted-foreground font-semibold mb-8 max-w-2xl mx-auto">
            Chega de gastar fortunas em injeções e ainda sofrer com efeito sanfona ou rebote.
          </p>

          <div className="flex justify-center mb-8">
            <img
              src={productBottle}
              alt="OzenFit Caps - Suplemento para emagrecimento"
              className="w-48 md:w-64 float-animation"
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
