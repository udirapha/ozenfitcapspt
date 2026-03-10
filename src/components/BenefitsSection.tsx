import { Apple, Dumbbell, ThumbsUp } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Apple,
      title: "Sem parar de comer o que gosta.",
      desc: "Com a nossa fórmula americana única, pode emagrecer muito mais rápido com saúde e qualidade de vida!",
    },
    {
      icon: Dumbbell,
      title: "Não precisa de exercícios intensos",
      desc: "A fórmula atua no metabolismo, promovendo queima de gordura mesmo sem atividade física constante.",
    },
    {
      icon: ThumbsUp,
      title: "Resultados satisfatórios",
      desc: "Milhares de portugueses já comprovaram a eficácia do OzenFit Caps no emagrecimento saudável.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
          Com a nossa <span className="text-primary">fórmula americana ÚNICA</span>, pode emagrecer muito mais rápido!
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
          <a href="#preco" className="btn-cta">QUERO EXPERIMENTAR</a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
