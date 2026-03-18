const BeforeAfterSection = () => {
  const results = [
    "/images/result-1.jpeg",
    "/images/result-2.jpeg",
    "/images/result-3.jpeg",
    "/images/result-4.jpeg",
    "/images/result-5.jpeg",
  ];

  return (
    <section className="section-alt py-12 md:py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
          Risultati <span className="text-primary">REALI</span> di Chi l'Ha Già Usato
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          I risultati possono variare da persona a persona.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {results.map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={img}
                alt={`Risultato OzenFit Caps ${i + 1}`}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#prezzo" className="btn-cta pulse-animation">
            VOGLIO GLI STESSI RISULTATI! 🔥
          </a>
          <p className="mt-3 text-sm font-semibold text-muted-foreground">💰 Pagamento solo alla consegna!</p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
