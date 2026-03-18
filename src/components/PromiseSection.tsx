import { Ban, Salad, Dumbbell, Clock } from "lucide-react";

const PromiseSection = () => {
  const promises = [
    { icon: Salad, text: "Senza diete restrittive" },
    { icon: Dumbbell, text: "Senza esercizi fisici intensi" },
    { icon: Ban, text: "Senza effetto yo-yo o rimbalzo" },
    { icon: Clock, text: "Risultati già nelle prime settimane" },
  ];

  return (
    <section className="section-dark py-10 md:py-14 px-4">
      <div className="container max-w-3xl mx-auto text-center">
        <h2
          className="font-heading text-2xl md:text-3xl font-black mb-2"
          style={{ color: "hsl(var(--section-dark-foreground))" }}
        >
          DIMAGRISCI IN MODO <span className="text-primary">NATURALE E DEFINITIVO</span>
        </h2>
        <p
          className="text-sm md:text-base mb-8 max-w-xl mx-auto"
          style={{ color: "hsl(var(--section-dark-foreground) / 0.7)" }}
        >
          Basta soffrire con metodi che non funzionano. OzenFit Caps è stato sviluppato per chi vuole risultati reali.
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

        <a href="#prezzo" className="btn-cta pulse-animation text-base md:text-lg">
          VOGLIO INIZIARE ORA! 🔥
        </a>
      </div>
    </section>
  );
};

export default PromiseSection;
