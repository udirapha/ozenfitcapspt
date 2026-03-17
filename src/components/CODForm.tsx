import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const PACKAGES = [
  { value: "5meses", label: "⭐ 5 Meses — €100,00 (Portes grátis)", price: "100,00" },
  { value: "3meses", label: "3 Meses — €75,00 (Portes grátis)", price: "75,00" },
  { value: "1mes", label: "1 Mês — €34,00 (+ €4,99 portes)", price: "34,00" },
];

const CODForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    package: "5meses",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("create-cod-order", {
        body: formData,
      });

      if (error) {
        console.error("Error submitting order:", error);
        toast.error("Erro ao processar encomenda. Tente novamente.");
        return;
      }

      if (data?.error) {
        toast.error(data.error);
        return;
      }

      toast.success(
        `Encomenda #${data.orderNumber} recebida com sucesso! Entraremos em contacto em breve.`
      );
      setFormData({
        name: "",
        phone: "",
        address: "",
        city: "",
        postalCode: "",
        package: "5meses",
      });
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("Erro inesperado. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
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
              minLength={2}
              maxLength={100}
              value={formData.name}
              onChange={handleChange}
              placeholder="O seu nome completo"
              className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm border border-border focus:ring-2 focus:ring-primary focus:outline-none"
              disabled={isSubmitting}
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
              minLength={9}
              maxLength={20}
              value={formData.phone}
              onChange={handleChange}
              placeholder="+351 9XX XXX XXX"
              className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm border border-border focus:ring-2 focus:ring-primary focus:outline-none"
              disabled={isSubmitting}
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
              minLength={5}
              maxLength={200}
              value={formData.address}
              onChange={handleChange}
              placeholder="Rua, número, andar"
              className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm border border-border focus:ring-2 focus:ring-primary focus:outline-none"
              disabled={isSubmitting}
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
                minLength={2}
                maxLength={100}
                value={formData.city}
                onChange={handleChange}
                placeholder="Lisboa"
                className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                disabled={isSubmitting}
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
                minLength={4}
                maxLength={10}
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="XXXX-XXX"
                className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                disabled={isSubmitting}
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
              disabled={isSubmitting}
            >
              {PACKAGES.map((pkg) => (
                <option key={pkg.value} value={pkg.value}>
                  {pkg.label}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn-cta w-full text-center pulse-animation disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? "A PROCESSAR..." : "CONFIRMAR ENCOMENDA 📦"}
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
