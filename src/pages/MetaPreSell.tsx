import { Shield, Lock, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MetaPreSell = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center space-y-8">
        {/* Secure connection badge */}
        <div className="flex items-center justify-center gap-2 text-primary">
          <Shield className="w-5 h-5" />
          <Lock className="w-4 h-4" />
          <span className="text-sm font-medium font-heading tracking-wide">
            Connessione Sicura e Protetta
          </span>
        </div>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-primary/20 mx-auto" />

        {/* Logo / Brand */}
        <h1 className="text-3xl font-bold font-heading text-foreground tracking-tight">
          OzenFit
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-base leading-relaxed max-w-xs mx-auto">
          Scopri il metodo che sta cambiando le abitudini di tante persone in Italia.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/it-pag")}
          className="group inline-flex items-center justify-center gap-3 w-full max-w-xs mx-auto px-8 py-4 rounded-xl font-heading font-bold text-lg text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
          style={{ background: "var(--gradient-green)" }}
        >
          <Play className="w-5 h-5 fill-current" />
          Guarda il Video
        </button>

        {/* Trust text */}
        <p className="text-xs text-muted-foreground">
          🔒 I tuoi dati sono al sicuro. Nessun pagamento richiesto.
        </p>
      </div>
    </div>
  );
};

export default MetaPreSell;
