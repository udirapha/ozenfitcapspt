const FooterSection = () => {
  return (
    <footer className="bg-foreground py-8 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <p className="text-xs mb-4" style={{ color: "hsl(0 0% 100% / 0.5)" }}>
          Todos os Direitos Reservados — OzenFit Caps © 2024-2026
        </p>
        <p className="text-xs mb-4" style={{ color: "hsl(0 0% 100% / 0.4)" }}>
          A venda do OzenFit através de qualquer outro site pode colocar a sua saúde em risco.
          Não compre falsificações e garanta um produto de qualidade comprando apenas através deste site oficial.
        </p>
        <div className="flex justify-center gap-6 text-xs" style={{ color: "hsl(0 0% 100% / 0.4)" }}>
          <span>Política de Privacidade</span>
          <span>Termos de Uso</span>
          <span>Aviso Legal</span>
        </div>
        <p className="text-xs mt-4" style={{ color: "hsl(0 0% 100% / 0.3)" }}>
          Horário de Atendimento: Seg-Sex 9:00h às 18:00h
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
