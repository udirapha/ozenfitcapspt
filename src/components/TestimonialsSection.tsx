import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sofia Rossi",
      age: 34,
      text: "Lo consiglio tantissimo! Il prodotto corrisponde ai risultati che ho ottenuto, ho già fatto un nuovo ordine. Ringrazio tutto il team!",
    },
    {
      name: "Anna Bianchi",
      age: 38,
      text: "Mi sento molto più sicura con i cambiamenti nel mio corpo. La mia pancia era sempre gonfia, sembrava che fossi malata. Sono molto soddisfatta del trattamento! Lo consiglio a tutti!",
    },
    {
      name: "Marco Ferrari",
      age: 47,
      text: "Il prodotto funziona davvero. Un cambiamento incredibile già nei primi giorni, sto già notando la differenza sulla pancia e anche sulla sazietà.",
    },
    {
      name: "Giulia Colombo",
      age: 41,
      text: "Il prodotto è arrivato velocissimo, prima ancora della data prevista. Ho adorato OZENFIT CAPS, sicuramente lo comprerò di nuovo. Lo consiglio a tutti!",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
          Testimonianze
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-sm">{t.name}, {t.age} anni</p>
                  <p className="text-xs text-primary font-semibold">Profilo verificato ✓</p>
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
          <a href="#prezzo" className="btn-cta">VOGLIO PROVARLO</a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
