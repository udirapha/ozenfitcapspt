import guaranteeBadge from "@/assets/guarantee-badge.png";

const GuaranteeSection = () => {
  return (
    <section className="bg-background py-12 md:py-16 px-4">
      <div className="container max-w-3xl mx-auto text-center">
        <img
          src={guaranteeBadge}
          alt="Garantia de 90 dias"
          className="w-32 md:w-40 mx-auto mb-6"
        />
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          90 Dias com Resultados ou o Seu Dinheiro de Volta!
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
          Não acredita em nós? Colocamos toda a nossa confiança na nossa fórmula, ao ponto de oferecer uma{" "}
          <strong className="text-foreground">garantia de satisfação de 90 dias.</strong> Se não estiver completamente
          satisfeito com os resultados, <strong className="text-foreground">reembolsamos 100% do seu dinheiro.</strong>{" "}
          Sem riscos, apenas resultados eficazes.
        </p>
        <a href="#preco" className="btn-cta">QUERO EXPERIMENTAR</a>
        <p className="mt-3 text-sm font-semibold text-muted-foreground">💰 Pagamento apenas na entrega!</p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
