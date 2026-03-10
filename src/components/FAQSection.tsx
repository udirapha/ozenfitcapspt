import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "O que é o OZENFIT CAPS?",
      a: "OZENFIT CAPS é um produto natural que combina os benefícios do Psyllium, Vitamina C, Cromo, Óleo de Cártamo, Cúrcuma e Cafeína. Promove saciedade, emagrecimento, energia e saúde para o corpo.",
    },
    {
      q: "Como devo utilizar o OZENFIT CAPS?",
      a: "Recomenda-se tomar 2 cápsulas por dia: uma antes do almoço e outra antes do jantar. É importante beber pelo menos 2 litros de água por dia. Evite tomar com bebidas quentes.",
    },
    {
      q: "O OZENFIT CAPS tem efeitos secundários?",
      a: "OZENFIT CAPS não possui contraindicações, efeitos secundários ou hormonas. O produto é indicado para qualquer pessoa que deseje emagrecer de forma saudável.",
    },
    {
      q: "Como funciona o pagamento na entrega?",
      a: "Preencha o formulário com os seus dados e morada. Receberá a sua encomenda em 24 a 72 horas e paga diretamente ao estafeta no momento da entrega. Simples e seguro!",
    },
    {
      q: "Qual é o prazo de entrega em Portugal?",
      a: "A entrega é feita em 24 a 72 horas para todo o território de Portugal Continental. Enviamos de forma discreta e segura.",
    },
    {
      q: "Posso devolver se não gostar?",
      a: "Sim! Oferecemos uma garantia de satisfação de 90 dias. Se não estiver satisfeito com os resultados, devolvemos 100% do seu dinheiro.",
    },
  ];

  return (
    <section className="bg-background py-12 md:py-16 px-4">
      <div className="container max-w-2xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
          DÚVIDAS FREQUENTES
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
