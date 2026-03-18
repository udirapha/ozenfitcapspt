const IngredientsSection = () => {
  const ingredients = [
    {
      name: "PSYLLIUM",
      desc: "Fibra solubile estratta dalla buccia dei semi della pianta Plantago ovata.",
      benefits: ["Combatte la stitichezza", "Riduce il colesterolo cattivo", "Controlla la glicemia"],
    },
    {
      name: "GUARANÀ IN POLVERE",
      desc: "Integratore che offre diversi benefici per la salute, incluso il dimagrimento.",
      benefits: ["Aumento dell'energia", "Favorisce il dimagrimento", "Aumento della concentrazione", "Miglioramento dell'umore"],
    },
    {
      name: "CROMO",
      desc: "Regola i livelli di zucchero nel sangue e migliora l'azione dell'insulina.",
      benefits: ["Controlla l'appetito", "Riduce la fame compulsiva", "Stabilizza il glucosio"],
    },
    {
      name: "TRIPTOFANO",
      desc: "Aminoacido essenziale che svolge un ruolo importante nell'organismo.",
      benefits: ["Aumento della serotonina", "Controllo dell'appetito", "Miglioramento del sonno", "Riduzione dello stress"],
    },
    {
      name: "CURCUMA",
      desc: "Conosciuta per le sue proprietà antinfiammatorie e antiossidanti.",
      benefits: ["Riduce l'infiammazione", "Aiuta nella riduzione dei dolori", "Combatte l'aumento di peso"],
    },
    {
      name: "ACIDO CLOROGENICO",
      desc: "Fitochimico concentrato nel caffè verde, vitale per chi desidera dimagrire.",
      benefits: ["Inibisce l'accumulo di grasso", "Riduce la concentrazione di glucosio", "Promuove il metabolismo"],
    },
    {
      name: "ANTOCIANINA",
      desc: "Composti presenti in molti frutti, responsabili della colorazione viola e rossastra.",
      benefits: ["Antiossidanti", "Combattono le alterazioni metaboliche", "Diminuiscono l'accumulo di grasso"],
    },
    {
      name: "PIPERINA",
      desc: "Sostanza con proprietà antimicrobiche, antinfiammatorie e antiossidanti.",
      benefits: ["Combatte l'accumulo di grasso", "Riduce l'appetito", "Riduce il colesterolo"],
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
          Scopri i principali componenti della <span className="text-primary">Formula Americana</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          che sta avendo un ENORME SUCCESSO in Italia
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
          <a href="#prezzo" className="btn-cta">VOGLIO PROVARLO</a>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
