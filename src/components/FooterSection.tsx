const FooterSection = () => {
  return (
    <footer className="bg-foreground py-8 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <p className="text-xs mb-4" style={{ color: "hsl(0 0% 100% / 0.5)" }}>
          Tutti i Diritti Riservati — OzenFit Caps © 2024-2026
        </p>
        <p className="text-xs mb-4" style={{ color: "hsl(0 0% 100% / 0.4)" }}>
          La vendita di OzenFit attraverso qualsiasi altro sito può mettere a rischio la tua salute.
          Non acquistare prodotti contraffatti e garantisciti un prodotto di qualità acquistando solo attraverso questo sito ufficiale.
        </p>
        <div className="flex justify-center gap-6 text-xs" style={{ color: "hsl(0 0% 100% / 0.4)" }}>
          <span>Informativa sulla Privacy</span>
          <span>Termini di Utilizzo</span>
          <span>Avviso Legale</span>
        </div>
        <p className="text-xs mt-4" style={{ color: "hsl(0 0% 100% / 0.3)" }}>
          Orario di Assistenza: Lun-Ven 9:00 - 18:00
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
