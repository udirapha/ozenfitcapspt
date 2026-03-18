import guaranteeBadge from "@/assets/guarantee-badge.png";

const GuaranteeSection = () => {
  return (
    <section className="bg-background py-12 md:py-16 px-4">
      <div className="container max-w-3xl mx-auto text-center">
        <img
          src={guaranteeBadge}
          alt="Garanzia di 90 giorni"
          className="w-32 md:w-40 mx-auto mb-6"
        />
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          90 Giorni con Risultati o i Tuoi Soldi Indietro!
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
          Non ci credi? Riponiamo tutta la nostra fiducia nella nostra formula, al punto da offrirti una{" "}
          <strong className="text-foreground">garanzia di soddisfazione di 90 giorni.</strong> Se non sei completamente
          soddisfatto dei risultati, <strong className="text-foreground">ti rimborsiamo il 100% dei tuoi soldi.</strong>{" "}
          Nessun rischio, solo risultati efficaci.
        </p>
        <a href="#prezzo" className="btn-cta">VOGLIO PROVARLO</a>
        <p className="mt-3 text-sm font-semibold text-muted-foreground">💰 Pagamento solo alla consegna!</p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
