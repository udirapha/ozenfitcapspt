import { Ban, Salad, Dumbbell, Clock } from "lucide-react";

const PromiseSection = () => {
  const promises = [
    { icon: Salad, text: "Sem dietas restritivas" },
    { icon: Dumbbell, text: "Sem exercícios físicos intensos" },
    { icon: Ban, text: "Sem efeito sanfona ou rebote" },
    { icon: Clock, text: "Resultados logo nas primeiras semanas" },
  ];

  return (
    <section className="section-dark py-10 md:py-14 px-4">
      <div className="container max-w-3xl mx-auto text-center">
        <h2
          className="font-heading text-2xl md:text-3xl font-black mb-2"
          style={{ color: "hsl(var(--section-dark-foreground))" }}
        >
          EMAGREÇA DE FORMA <span className="text-primary">NATURAL E DEFINITIVA</span>
        </h2>
        <p
          className="text-sm md:text-base mb-8 max-w-xl mx-auto"
          style={{ color: "hsl(var(--section-dark-foreground) / 0.7)" }}
        >
          Chega de sofrer com métodos que não funcionam. O OzenFit Caps foi desenvolvido para quem quer resultados reais.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {promises.map((p, i) => (
            <div
              key={i}
              className="rounded-xl p-4 flex flex-col items-center gap-3"
              style={{ background: "hsl(var(--section-dark-foreground) / 0.08)" }}
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <p.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <span
                className="font-heading font-bold text-xs md:text-sm text-center"
                style={{ color: "hsl(var(--section-dark-foreground))" }}
              >
                {p.text}
              </span>
            </div>
          ))}
        </div>

        <a href="#preco" className="btn-cta pulse-animation text-base md:text-lg">
          QUERO COMEÇAR AGORA! 🔥
        </a>
      </div>
    </section>
  );
};

export default PromiseSection;
