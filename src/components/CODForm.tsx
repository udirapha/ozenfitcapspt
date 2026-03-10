import { useState } from "react";
import { toast } from "sonner";

const CODForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    package: "5meses",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Encomenda recebida com sucesso! Entraremos em contacto em breve.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="formulario" className="section-dark py-12 md:py-16 px-4">
      <div className="container max-w-lg mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: "hsl(var(--section-dark-foreground))" }}>
          Faça a Sua Encomenda Agora!
        </h2>
        <p className="text-center text-sm mb-8" style={{ color: "hsl(var(--section-dark-foreground) / 0.7)" }}>
          Pagamento na Entrega — Receba em 24 a 72 horas em Portugal
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold mb-1" style={{ color: "hsl(var(--section-dark-foreground) / 0.8)" }}>
              Nome Completo *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="O seu nome completo"
              className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm border border-border focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1" style={{ color: "hsl(var(--section-dark-foreground) / 0.8)" }}>
              Telemóvel *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+351 9XX XXX XXX"
              className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm border border-border focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1" style={{ color: "hsl(var(--section-dark-foreground) / 0.8)" }}>
              Morada Completa *
            </label>
            <input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              placeholder="Rua, número, andar"
              className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm border border-border focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold mb-1" style={{ color: "hsl(var(--section-dark-foreground) / 0.8)" }}>
                Cidade *
              </label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                placeholder="Lisboa"
                className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm border border-border focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1" style={{ color: "hsl(var(--section-dark-foreground) / 0.8)" }}>
                Código Postal *
              </label>
              <input
                type="text"
                name="postalCode"
                required
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="XXXX-XXX"
                className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm border border-border focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1" style={{ color: "hsl(var(--section-dark-foreground) / 0.8)" }}>
              Escolha o seu pacote *
            </label>
            <select
              name="package"
              value={formData.package}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm border border-border focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <option value="5meses">⭐ 5 Meses — €79,90 (Portes grátis)</option>
              <option value="3meses">3 Meses — €59,90 (Portes grátis)</option>
              <option value="1mes">1 Mês — €39,90 (+ €4,99 portes)</option>
            </select>
          </div>

          <button type="submit" className="btn-cta w-full text-center pulse-animation">
            CONFIRMAR ENCOMENDA 📦
          </button>

          <p className="text-center text-xs" style={{ color: "hsl(var(--section-dark-foreground) / 0.5)" }}>
            💰 Pagamento na entrega — Só paga quando receber!
          </p>
        </form>
      </div>
    </section>
  );
};

export default CODForm;
