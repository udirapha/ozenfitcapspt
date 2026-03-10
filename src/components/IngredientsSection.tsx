const IngredientsSection = () => {
  const ingredients = [
    {
      name: "PSYLLIUM",
      desc: "Fibra solúvel extraída da casca das sementes da planta Plantago ovata.",
      benefits: ["Combate a prisão de ventre", "Reduz o colesterol mau", "Controla a glicemia"],
    },
    {
      name: "GUARANÁ EM PÓ",
      desc: "Suplemento que oferece diversos benefícios para a saúde, incluindo o emagrecimento.",
      benefits: ["Aumento da disposição", "Favorece o emagrecimento", "Aumento da concentração", "Melhora do humor"],
    },
    {
      name: "CROMO",
      desc: "Regula os níveis de açúcar no sangue e melhora a ação da insulina.",
      benefits: ["Controla o apetite", "Reduz a compulsão alimentar", "Estabiliza a glicose"],
    },
    {
      name: "TRIPTOFANO",
      desc: "Aminoácido essencial que desempenha um papel importante no organismo.",
      benefits: ["Aumento da serotonina", "Controlo do apetite", "Melhora do sono", "Redução do stresse"],
    },
    {
      name: "CÚRCUMA",
      desc: "Conhecida pelas suas propriedades anti-inflamatórias e antioxidantes.",
      benefits: ["Reduz a inflamação", "Auxilia na diminuição das dores", "Combate o ganho de peso"],
    },
    {
      name: "ÁCIDO CLOROGÉNICO",
      desc: "Fitoquímico concentrado no café verde, vital para quem deseja emagrecer.",
      benefits: ["Inibe o acúmulo de gordura", "Reduz a concentração de glicose", "Promove o metabolismo"],
    },
    {
      name: "ANTOCIANINA",
      desc: "Compostos encontrados em muitas frutas, responsáveis pela coloração roxa e avermelhada.",
      benefits: ["Antioxidantes", "Combatem alterações metabólicas", "Diminuem o acúmulo de gordura"],
    },
    {
      name: "PIPERINA",
      desc: "Substância com propriedades antimicrobiana, anti-inflamatória e antioxidante.",
      benefits: ["Combate o acúmulo de gordura", "Reduz o apetite", "Reduz o colesterol"],
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
          Conheça os principais componentes da <span className="text-primary">Fórmula Americana</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          que está a ser um SUCESSO em Portugal
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ingredients.map((ing, i) => (
            <div key={i} className="ingredient-card">
              <h3 className="font-heading font-bold text-primary text-sm mb-2">{ing.name}</h3>
              <p className="text-xs text-muted-foreground mb-3">{ing.desc}</p>
              <ul className="space-y-1">
                {ing.benefits.map((b, j) => (
                  <li key={j} className="text-xs text-foreground flex items-start gap-1.5">
                    <span className="text-primary mt-0.5">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
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

export default IngredientsSection;
