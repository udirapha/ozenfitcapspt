import { Award, ShieldCheck, Microscope } from "lucide-react";

const AuthoritySection = () => {
  return (
    <section className="bg-background py-12 md:py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
          Aprovado por <span className="text-primary">Especialistas em Saúde</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          A fórmula do OzenFit Caps é baseada em estudos científicos e recomendada por profissionais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Doctor quote */}
          <div className="testimonial-card">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-2xl flex-shrink-0">
                Dr
              </div>
              <div>
                <p className="font-heading font-bold text-foreground">Dr. Ricardo Mendes</p>
                <p className="text-xs text-primary font-semibold">Médico Nutrologista — CRM 52.847</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              "O OzenFit Caps combina ingredientes com eficácia comprovada na redução do apetite e aceleração do metabolismo. 
              A sinergia entre psyllium, cromo e cúrcuma proporciona resultados consistentes quando aliados a hábitos de vida saudáveis. 
              É uma alternativa natural e segura ao Ozempic injetável."
            </p>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            {[
              {
                icon: ShieldCheck,
                title: "Fórmula Testada e Aprovada",
                desc: "Todos os ingredientes passam por rigorosos testes de qualidade e são aprovados pela EFSA (Autoridade Europeia de Segurança Alimentar).",
              },
              {
                icon: Award,
                title: "Registo DGAV",
                desc: "Produto registado junto da Direção-Geral de Alimentação e Veterinária, garantindo conformidade com a legislação portuguesa.",
              },
              {
                icon: Microscope,
                title: "Base Científica",
                desc: "Ingredientes com estudos clínicos publicados que comprovam a eficácia no controlo do apetite e perda de peso.",
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
