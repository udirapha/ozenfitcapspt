import productBottle from "@/assets/product-bottle.png";
import productBundle from "@/assets/product-bundle.png";

const OffersSection = () => {
  const offers = [
    {
      featured: true,
      label: "O MAIS VENDIDO",
      title: "TRATAMENTO 5 MESES",
      subtitle: "PAGUE 3 E LEVE 5! + E-book",
      image: productBundle,
      price: "€79,90",
      priceNote: "ou 3x de €26,63",
      originalPrice: "€199,50",
      shipping: "Portes grátis",
    },
    {
      featured: false,
      label: "",
      title: "TRATAMENTO 3 MESES",
      subtitle: "PAGUE 2 E LEVE 3! + E-book",
      image: productBundle,
      price: "€59,90",
      priceNote: "ou 3x de €19,97",
      originalPrice: "€119,70",
      shipping: "Portes grátis",
    },
    {
      featured: false,
      label: "",
      title: "TRATAMENTO 1 MÊS",
      subtitle: "Para experimentar LEVE 1!",
      image: productBottle,
      price: "€39,90",
      priceNote: "",
      originalPrice: "€59,90",
      shipping: "Portes: €4,99",
    },
  ];

  return (
    <section id="preco" className="bg-background py-12 md:py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-lg">🔒</span>
          <span className="font-heading font-bold text-sm md:text-base text-primary uppercase tracking-wide">
            Compra 100% Segura com Pagamento na Entrega!
          </span>
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
          Escolha o <span className="text-primary">MELHOR TRATAMENTO</span> para si!
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-sm">
          Comece hoje mesmo a emagrecer com saúde. Pagamento na entrega!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {offers.map((o, i) => (
            <div key={i} className={`card-offer ${o.featured ? "card-offer-featured" : ""} flex flex-col`}>
              {o.featured && (
                <div className="badge-featured text-center py-2 text-xs font-bold uppercase tracking-wider">
                  {o.label}
                </div>
              )}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-foreground text-center text-sm mb-1">{o.title}</h3>
                <p className="font-heading text-primary text-center text-xs font-semibold mb-4">{o.subtitle}</p>
                <div className="flex justify-center mb-4">
                  <img src={o.image} alt={o.title} className="w-28 h-28 object-contain" />
                </div>
                <div className="text-center mb-4 mt-auto">
                  <p className="text-xs text-muted-foreground line-through">{o.originalPrice}</p>
                  <p className="font-heading text-2xl font-black text-primary">{o.price}</p>
                  {o.priceNote && <p className="text-xs text-muted-foreground">{o.priceNote}</p>}
                </div>
                <a href="#formulario" className="btn-cta w-full text-center text-sm py-3">
                  ENCOMENDAR AGORA
                </a>
                <p className="text-xs text-center text-primary font-bold mt-2">💰 Pague só na entrega!</p>
                <p className="text-xs text-center text-muted-foreground mt-3">{o.shipping}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl mx-auto">
          {[
            { icon: "🔒", text: "Compra Segura" },
            { icon: "✅", text: "Satisfação Garantida" },
            { icon: "🚚", text: "Entrega 24-72h em Portugal" },
            { icon: "🔐", text: "Privacidade Protegida" },
            { icon: "💰", text: "Pagamento na Entrega" },
            { icon: "🛡️", text: "Site 100% Seguro" },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="text-lg">{badge.icon}</span>
              <span className="font-semibold">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
