import { Award, ShieldCheck, Microscope } from "lucide-react";

const AuthoritySection = () => {
  return (
    <section className="bg-background py-12 md:py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
          Approvato da <span className="text-primary">Specialisti della Salute</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          La formula di OzenFit Caps è basata su studi scientifici e raccomandata da professionisti.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Doctor quote */}
          <div className="testimonial-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-2xl flex-shrink-0">
                Dr
              </div>
              <div>
                <p className="font-heading font-bold text-foreground">Dr. Marco Bianchi</p>
                <p className="text-xs text-primary font-semibold">Medico Nutrizionista</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              "OzenFit Caps combina ingredienti con efficacia comprovata nella riduzione dell'appetito e nell'accelerazione del metabolismo. 
              La sinergia tra psyllium, cromo e curcuma fornisce risultati consistenti quando abbinati a abitudini di vita sane. 
              È un'alternativa naturale e sicura all'Ozempic iniettabile."
            </p>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            {[
              {
                icon: ShieldCheck,
                title: "Formula Testata e Approvata",
                desc: "Tutti gli ingredienti superano rigorosi test di qualità e sono approvati dall'EFSA (Autorità Europea per la Sicurezza Alimentare).",
              },
              {
                icon: Award,
                title: "Registrazione Ministeriale",
                desc: "Prodotto registrato presso il Ministero della Salute, garantendo conformità con la legislazione italiana.",
              },
              {
                icon: Microscope,
                title: "Base Scientifica",
                desc: "Ingredienti con studi clinici pubblicati che comprovano l'efficacia nel controllo dell'appetito e nella perdita di peso.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-success-light flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
