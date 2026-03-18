import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Cos'è OZENFIT CAPS?",
      a: "OZENFIT CAPS è un prodotto naturale che combina i benefici di Psyllium, Vitamina C, Cromo, Olio di Cartamo, Curcuma e Caffeina. Promuove sazietà, dimagrimento, energia e salute per il corpo.",
    },
    {
      q: "Come devo usare OZENFIT CAPS?",
      a: "Si consiglia di assumere 2 capsule al giorno: una prima di pranzo e un'altra prima di cena. È importante bere almeno 2 litri d'acqua al giorno. Evitare di assumerlo con bevande calde.",
    },
    {
      q: "OZENFIT CAPS ha effetti collaterali?",
      a: "OZENFIT CAPS non presenta controindicazioni, effetti collaterali o ormoni. Il prodotto è indicato per qualsiasi persona che desideri dimagrire in modo sano.",
    },
    {
      q: "Come funziona il pagamento alla consegna?",
      a: "Compila il modulo con i tuoi dati e indirizzo. Riceverai il tuo ordine in 24-72 ore e pagherai direttamente al corriere al momento della consegna. Semplice e sicuro!",
    },
    {
      q: "Quali sono i tempi di consegna in Italia?",
      a: "La consegna avviene in 24-72 ore su tutto il territorio italiano. Spediamo in modo discreto e sicuro.",
    },
    {
      q: "Posso restituirlo se non mi piace?",
      a: "Sì! Offriamo una garanzia di soddisfazione di 90 giorni. Se non sei soddisfatto dei risultati, ti rimborsiamo il 100% dei tuoi soldi.",
    },
  ];

  return (
    <section className="bg-background py-12 md:py-16 px-4">
      <div className="container max-w-2xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
          DOMANDE FREQUENTI
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left bg-background hover:bg-muted transition-colors"
              >
                <span className="font-heading font-bold text-sm text-foreground pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
