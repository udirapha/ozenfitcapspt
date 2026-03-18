import { Flame, UtensilsCrossed, Zap, Droplets, Shield, Leaf } from "lucide-react";

const HowItWorksSection = () => {
  const features = [
    {
      icon: Flame,
      title: "Aiuta a dimagrire",
      desc: "Aumenta il metabolismo attraverso la buona nutrizione delle cellule e promuove il dimagrimento accelerato. L'organismo utilizza più carboidrati come fonte di energia, aiutando nella perdita di peso, soprattutto nella zona addominale.",
    },
    {
      icon: UtensilsCrossed,
      title: "Riduce la fame eccessiva",
      desc: "Il psyllium, il chitosano e il cromo che compongono questa potente formula riducono la voglia di mangiare costantemente! Promuovono un senso di sazietà senza causare danni alla salute.",
    },
    {
      icon: Zap,
      title: "Energia per la vita quotidiana",
      desc: "Una potente fonte di proteine, la spirulina contenuta nella formula fornisce buone quantità di energia. Rafforza i batteri buoni dell'intestino e aumenta la produzione di vitamina B6.",
    },
    {
      icon: Droplets,
      title: "Elimina il grasso corporeo",
      desc: "Oltre a dimagrire accelerando il metabolismo, grazie alla sua composizione ricca di psyllium, migliora il transito intestinale senza danneggiare la salute del corpo.",
    },
    {
      icon: Shield,
      title: "Antiossidante, promuove la salute",
      desc: "Formula innovativa con sostanza ad alto potere antiossidante. Allo stesso tempo che promuove il dimagrimento, aiuta a prevenire malattie nell'organismo.",
    },
    {
      icon: Leaf,
      title: "Naturale e buono per il corpo",
      desc: "Tutti i componenti sono 100% naturali e sono stati dosati correttamente per produrre dimagrimento senza causare danni al corpo.",
    },
  ];

  return (
    <section className="bg-background py-12 md:py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
          Qual è il segreto di OZENFIT e perché <span className="text-primary">funziona davvero?</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">Acquisto 100% sicuro e soddisfazione garantita!</p>

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
          <a href="#prezzo" className="btn-cta">VOGLIO PROVARLO</a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
