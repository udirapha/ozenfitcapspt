import { Flame, UtensilsCrossed, Zap, Droplets, Shield, Leaf } from "lucide-react";

const HowItWorksSection = () => {
  const features = [
    {
      icon: Flame,
      title: "Auxilia no emagrecimento",
      desc: "Aumenta o metabolismo através da boa nutrição das células e promove o emagrecimento acelerado. O organismo utiliza mais hidratos de carbono como fonte de energia, ajudando na perda de peso, especialmente na região abdominal.",
    },
    {
      icon: UtensilsCrossed,
      title: "Reduz a fome excessiva",
      desc: "O psyllium, quitosana e cromo que compõem esta potente fórmula reduzem a vontade de comer constantemente! Promovem uma sensação de saciedade sem causar danos à saúde.",
    },
    {
      icon: Zap,
      title: "Energia para o dia a dia",
      desc: "Uma poderosa fonte de proteínas, a spirulina contida na fórmula fornece boas quantidades de energia. Fortalece as bactérias boas do intestino e aumenta a produção de vitamina B6.",
    },
    {
      icon: Droplets,
      title: "Elimina a gordura corporal",
      desc: "Além de emagrecer acelerando o metabolismo, através da sua composição rica em psyllium, melhora o fluxo intestinal sem prejudicar a saúde do corpo.",
    },
    {
      icon: Shield,
      title: "Antioxidante, promove saúde",
      desc: "Fórmula inovadora com substância de alto poder antioxidante. Ao mesmo tempo que promove o emagrecimento, ajuda a prevenir doenças no organismo.",
    },
    {
      icon: Leaf,
      title: "Natural e bom para o corpo",
      desc: "Todos os componentes são 100% naturais e foram doseados corretamente para produzir emagrecimento sem causar danos ao corpo.",
    },
  ];

  return (
    <section className="bg-background py-12 md:py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
          Qual o segredo do OZENFIT e por que <span className="text-primary">realmente funciona?</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">Compra 100% segura e satisfação garantida!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="ingredient-card">
              <div className="w-12 h-12 rounded-lg bg-success-light flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
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

export default HowItWorksSection;
