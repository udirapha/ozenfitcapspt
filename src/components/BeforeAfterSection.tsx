import { TrendingDown } from "lucide-react";

const BeforeAfterSection = () => {
  const results = [
    {
      name: "Maria L.",
      age: 42,
      lost: "14kg em 3 meses",
      quote: "Nunca pensei que fosse possível perder tanto peso sem passar fome. O OzenFit mudou a minha vida!",
    },
    {
      name: "João P.",
      age: 38,
      lost: "11kg em 2 meses",
      quote: "Já tinha tentado de tudo. Com o OzenFit Caps finalmente vi resultados reais na balança.",
    },
    {
      name: "Carla S.",
      age: 35,
      lost: "9kg em 5 semanas",
      quote: "A minha barriga diminuiu logo nas primeiras semanas. Sinto-me outra pessoa!",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
          Resultados <span className="text-primary">REAIS</span> de Quem Já Usou
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          Resultados podem variar de pessoa para pessoa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {results.map((r, i) => (
            <div key={i} className="testimonial-card text-center">
              <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                <TrendingDown className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="font-heading font-black text-primary text-lg mb-1">{r.lost}</p>
              <p className="font-heading font-bold text-foreground text-sm mb-1">
                {r.name}, {r.age} anos
              </p>
              <p className="text-xs text-primary font-semibold mb-3">Resultado verificado ✓</p>
              <p className="text-sm text-muted-foreground leading-relaxed italic">"{r.quote}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#preco" className="btn-cta pulse-animation">QUERO OS MESMOS RESULTADOS! 🔥</a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
