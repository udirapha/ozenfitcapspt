import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sofia Ferreira",
      age: 34,
      text: "Super recomendo! O produto corresponde aos resultados que tive, já fiz nova encomenda. Desde já agradeço a toda a equipa!",
    },
    {
      name: "Ana Rodrigues",
      age: 38,
      text: "Sinto-me muito mais confiante com as mudanças no meu corpo. A minha barriga vivia inchada, parecia que estava doente. Estou muito satisfeita com o tratamento! Recomendo imenso!",
    },
    {
      name: "Miguel Santos",
      age: 47,
      text: "O produto realmente funciona. Mudança incrível logo nos primeiros dias, já estou a sentir diferença na barriga e também na saciedade.",
    },
    {
      name: "Catarina Oliveira",
      age: 41,
      text: "O produto chegou super rápido, antes mesmo da data prevista. Adorei o OZENFIT CAPS, com certeza comprarei mais vezes. Recomendo a toda a gente!",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
          Depoimentos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-sm">{t.name}, {t.age} anos</p>
                  <p className="text-xs text-primary font-semibold">Perfil verificado ✓</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">"{t.text}"</p>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-gold text-gold" />
                ))}
                <span className="text-xs text-muted-foreground ml-1">5/5</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#preco" className="btn-cta">QUERO EXPERIMENTAR</a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
