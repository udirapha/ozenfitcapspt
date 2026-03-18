const UsageSection = () => {
  const steps = [
    {
      num: "1",
      title: "Assumere 2 capsule al giorno",
      desc: "Prendi una capsula prima di pranzo e un'altra prima di cena.",
    },
    {
      num: "2",
      title: "Bere 2 litri d'acqua",
      desc: "Suddividi in 4 bottiglie da 500ml durante la giornata. Evita bevande calde.",
    },
    {
      num: "3",
      title: "Segui il trattamento",
      desc: "Per ottenere i migliori risultati, segui le istruzioni di dosaggio quotidianamente.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16 px-4">
      <div className="container max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
          Qual è il modo corretto di utilizzo?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <span className="font-heading text-xl font-black text-primary-foreground">{s.num}</span>
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2 text-sm">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsageSection;
