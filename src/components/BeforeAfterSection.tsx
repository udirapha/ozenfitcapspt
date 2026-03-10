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
          Resultados <span className="text-primary">REAIS</span> de Quem Já Usou
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          Resultados podem variar de pessoa para pessoa.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {results.map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={img}
                alt={`Resultado OzenFit Caps ${i + 1}`}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#preco" className="btn-cta pulse-animation">
            QUERO OS MESMOS RESULTADOS! 🔥
          </a>
          <p className="mt-3 text-sm font-semibold text-muted-foreground">💰 Pagamento apenas na entrega!</p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
