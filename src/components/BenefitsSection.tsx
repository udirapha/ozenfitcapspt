import { Apple, Dumbbell, ThumbsUp } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Apple,
      title: "Senza smettere di mangiare ciò che ami.",
      desc: "Con la nostra formula americana unica, puoi dimagrire molto più velocemente con salute e qualità della vita!",
    },
    {
      icon: Dumbbell,
      title: "Non servono esercizi intensi",
      desc: "La formula agisce sul metabolismo, promuovendo la combustione dei grassi anche senza attività fisica costante.",
    },
    {
      icon: ThumbsUp,
      title: "Risultati soddisfacenti",
      desc: "Migliaia di italiani hanno già comprovato l'efficacia di OzenFit Caps nel dimagrimento sano.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
          Con la nostra <span className="text-primary">formula americana UNICA</span>, puoi dimagrire molto più velocemente!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {benefits.map((b, i) => (
            <div key={i} className="ingredient-card text-center">
              <div className="w-14 h-14 rounded-full bg-success-light flex items-center justify-center mx-auto mb-4">
                <b.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#prezzo" className="btn-cta">VOGLIO PROVARLO</a>
          <p className="mt-3 text-sm font-semibold text-muted-foreground">💰 Pagamento solo alla consegna!</p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
