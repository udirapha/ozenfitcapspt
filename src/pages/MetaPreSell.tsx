import { Shield, Lock, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo-ozenfit.png";

const MetaPreSell = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center space-y-8">
        {/* Secure connection badge */}
        <div className="flex items-center justify-center gap-2 text-primary animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
          <Shield className="w-5 h-5" />
          <Lock className="w-4 h-4" />
          <span className="text-sm font-medium font-heading tracking-wide">
            Connessione Sicura e Protetta
          </span>
        </div>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-primary/20 mx-auto animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "both" }} />

        {/* Logo */}
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
          <img src={logo} alt="OzenFit Caps" className="w-48 md:w-64 h-auto" />
        </div>
        

        {/* Subtitle */}
        <p className="text-muted-foreground text-base leading-relaxed max-w-xs mx-auto animate-fade-in" style={{ animationDelay: "0.7s", animationFillMode: "both" }}>
          Scopri il metodo che sta cambiando le abitudini di tante persone in Italia.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/it-pag")}
          className="group inline-flex items-center justify-center gap-3 w-full max-w-xs mx-auto px-8 py-4 rounded-xl font-heading font-bold text-lg text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-lg animate-fade-in"
          style={{ background: "var(--gradient-green)", animationDelay: "0.9s", animationFillMode: "both" }}
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
