import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const PACKAGES = [
  { value: "5meses", label: "⭐ 5 Mesi — €100,00 (Spedizione gratuita)", price: "100,00" },
  { value: "3meses", label: "3 Mesi — €75,00 (Spedizione gratuita)", price: "75,00" },
  { value: "1mes", label: "1 Mese — €34,00 (+ €4,99 spedizione)", price: "34,00" },
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
        toast.error("Errore nell'elaborazione dell'ordine. Riprova.");
        return;
      }

      if (data?.error) {
        toast.error(data.error);
        return;
      }

      toast.success(
        `Ordine #${data.orderNumber} ricevuto con successo! Ti contatteremo a breve.`
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
      toast.error("Errore imprevisto. Riprova.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="modulo" className="section-dark py-12 md:py-16 px-4">
      <div className="container max-w-lg mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: "hsl(var(--section-dark-foreground))" }}>
          Fai il Tuo Ordine Ora!
        </h2>
        <p className="text-center text-sm mb-8" style={{ color: "hsl(var(--section-dark-foreground) / 0.7)" }}>
          Pagamento alla Consegna — Ricevi in 24-72 ore in Italia
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
              placeholder="Il tuo nome completo"
              className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm border border-border focus:ring-2 focus:ring-primary focus:outline-none"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1" style={{ color: "hsl(var(--section-dark-foreground) / 0.8)" }}>
              Telefono *
            </label>
            <input
              type="tel"
              name="phone"
              required
              minLength={9}
              maxLength={20}
              value={formData.phone}
              onChange={handleChange}
              placeholder="+39 3XX XXX XXXX"
              className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm border border-border focus:ring-2 focus:ring-primary focus:outline-none"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1" style={{ color: "hsl(var(--section-dark-foreground) / 0.8)" }}>
              Indirizzo Completo *
            </label>
            <input
              type="text"
              name="address"
              required
              minLength={5}
              maxLength={200}
              value={formData.address}
              onChange={handleChange}
              placeholder="Via, numero, piano"
              className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm border border-border focus:ring-2 focus:ring-primary focus:outline-none"
              disabled={isSubmitting}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold mb-1" style={{ color: "hsl(var(--section-dark-foreground) / 0.8)" }}>
                Città *
              </label>
              <input
                type="text"
                name="city"
                required
                minLength={2}
                maxLength={100}
                value={formData.city}
                onChange={handleChange}
                placeholder="Roma"
                className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1" style={{ color: "hsl(var(--section-dark-foreground) / 0.8)" }}>
                CAP *
              </label>
              <input
                type="text"
                name="postalCode"
                required
                minLength={4}
                maxLength={10}
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="00100"
                className="w-full px-4 py-3 rounded-lg bg-background text-foreground text-sm border border-border focus:ring-2 focus:ring-primary focus:outline-none"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1" style={{ color: "hsl(var(--section-dark-foreground) / 0.8)" }}>
              Scegli il tuo pacchetto *
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
            {isSubmitting ? "ELABORAZIONE..." : "CONFERMA ORDINE 📦"}
          </button>

          <p className="text-center text-xs" style={{ color: "hsl(var(--section-dark-foreground) / 0.5)" }}>
            💰 Pagamento alla consegna — Paghi solo quando ricevi!
          </p>
        </form>
      </div>
    </section>
  );
};

export default CODForm;
