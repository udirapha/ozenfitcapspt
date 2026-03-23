import { Link } from "react-router-dom";
import { Check, Clock, Leaf, Heart, Star, Shield } from "lucide-react";
import heroImg from "@/assets/advertorial-hero.jpg";
import lifestyle1 from "@/assets/advertorial-lifestyle1.jpg";
import lifestyle2 from "@/assets/advertorial-lifestyle2.jpg";
import lifestyle3 from "@/assets/advertorial-lifestyle3.jpg";

const Advertorial = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="border-b border-gray-100 py-2 px-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between text-xs text-gray-400">
          <span>Contenuto informativo</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> 4 min di lettura
          </span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        {/* Category tag */}
        <div className="mb-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full" style={{ background: "hsl(142, 50%, 95%)", color: "hsl(142, 60%, 30%)" }}>
            Benessere & Stile di Vita
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
          Perché sempre più persone in Italia stanno scegliendo un approccio naturale per il proprio benessere
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-6">
          In un mondo fatto di ritmi frenetici e abitudini poco salutari, un numero crescente di italiani sta riscoprendo il valore degli ingredienti naturali nella propria routine quotidiana.
        </p>

        {/* Author & date */}
        <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-100">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "hsl(142, 50%, 95%)", color: "hsl(142, 60%, 30%)" }}>
            RC
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Redazione Benessere</p>
            <p className="text-xs text-gray-400">Aggiornato il 23 Marzo 2026</p>
          </div>
        </div>

        {/* Hero image */}
        <figure className="mb-8">
          <img
            src={heroImg}
            alt="Donna italiana che cammina in una piazza soleggiata"
            className="w-full rounded-xl object-cover"
            style={{ maxHeight: "480px" }}
            width={1200}
            height={800}
          />
          <figcaption className="text-xs text-gray-400 mt-2 text-center">
            Lo stile di vita mediterraneo continua ad ispirare chi cerca un equilibrio naturale
          </figcaption>
        </figure>

        {/* Introduction */}
        <div className="prose-article">
          <p>
            Viviamo in un'epoca in cui lo stress, la sedentarietà e le abitudini alimentari poco equilibrate fanno parte della quotidianità di milioni di persone. Tra impegni lavorativi, vita familiare e ritmi sempre più serrati, prendersi cura del proprio benessere può sembrare un lusso.
          </p>
          <p>
            Eppure, negli ultimi mesi, un trend interessante sta emergendo in Italia: sempre più persone stanno cercando soluzioni semplici e naturali da integrare nella propria routine, senza stravolgere le proprie abitudini o ricorrere a misure drastiche.
          </p>
          <p>
            Non si tratta di mode passeggere, ma di una presa di coscienza collettiva: il desiderio di ritrovare un equilibrio naturale, partendo da piccoli gesti quotidiani.
          </p>
        </div>

        {/* Lifestyle image 1 */}
        <figure className="my-10">
          <img
            src={lifestyle1}
            alt="Preparazione di una colazione sana a casa"
            className="w-full rounded-xl object-cover"
            style={{ maxHeight: "400px" }}
            loading="lazy"
            width={1200}
            height={800}
          />
          <figcaption className="text-xs text-gray-400 mt-2 text-center">
            Piccole abitudini quotidiane possono fare una grande differenza
          </figcaption>
        </figure>

        {/* Story section */}
        <div className="prose-article">
          <h2>La ricerca di alternative semplici e accessibili</h2>
          <p>
            In Italia, la cultura del benessere ha radici profonde. Dalla dieta mediterranea all'uso di erbe e rimedi tradizionali, il legame con la natura è sempre stato parte del nostro DNA. Oggi, questo legame si rinnova attraverso nuove formulazioni che uniscono la sapienza della tradizione con la ricerca moderna.
          </p>
          <p>
            Sempre più persone raccontano di aver trovato un supporto nella propria routine quotidiana grazie a integratori a base di ingredienti naturali. Non una soluzione miracolosa, ma un alleato discreto per chi desidera prendersi cura di sé con consapevolezza.
          </p>
        </div>

        {/* Informational section */}
        <div className="my-10 p-6 md:p-8 rounded-xl" style={{ background: "hsl(142, 30%, 97%)" }}>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="w-5 h-5" style={{ color: "hsl(142, 60%, 38%)" }} />
            <h2 className="font-heading text-xl font-bold text-gray-900">Un approccio basato sulla naturalità</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            L'interesse crescente verso gli ingredienti naturali non è casuale. La ricerca scientifica continua a esplorare il potenziale di estratti vegetali utilizzati da secoli nella tradizione erboristica. L'obiettivo? Supportare il benessere generale senza interferire con le abitudini quotidiane.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Ciò che rende questo approccio interessante è la sua semplicità: integrare nella propria giornata un supporto naturale, proprio come si farebbe con una tisana o un alimento funzionale, senza sforzi aggiuntivi.
          </p>
        </div>

        {/* Lifestyle image 2 */}
        <figure className="my-10">
          <img
            src={lifestyle2}
            alt="Coppia che cammina in un parco autunnale"
            className="w-full rounded-xl object-cover"
            style={{ maxHeight: "400px" }}
            loading="lazy"
            width={1200}
            height={800}
          />
          <figcaption className="text-xs text-gray-400 mt-2 text-center">
            Il benessere si costruisce giorno dopo giorno, con scelte consapevoli
          </figcaption>
        </figure>

        {/* Benefits bullets */}
        <div className="prose-article">
          <h2>Cosa cercano le persone in un integratore naturale?</h2>
          <p>
            Dalle conversazioni e dalle esperienze condivise online, emergono alcune esigenze comuni:
          </p>
        </div>

        <div className="my-6 space-y-3">
          {[
            { icon: Heart, text: "Supporto al benessere generale e alla vitalità quotidiana" },
            { icon: Leaf, text: "Ingredienti di origine naturale, senza sostanze aggressive" },
            { icon: Shield, text: "Facilità di integrazione nella routine di tutti i giorni" },
            { icon: Check, text: "Un approccio gentile, senza cambiamenti drastici" },
            { icon: Star, text: "Esperienze positive condivise da altre persone" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5" style={{ background: "hsl(142, 50%, 95%)" }}>
                <item.icon className="w-4 h-4" style={{ color: "hsl(142, 60%, 38%)" }} />
              </div>
              <span className="text-gray-700 text-sm leading-relaxed">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Lifestyle image 3 */}
        <figure className="my-10">
          <img
            src={lifestyle3}
            alt="Ingredienti naturali ed erbe su un piano di marmo"
            className="w-full rounded-xl object-cover"
            style={{ maxHeight: "400px" }}
            loading="lazy"
            width={1200}
            height={800}
          />
          <figcaption className="text-xs text-gray-400 mt-2 text-center">
            La tradizione erboristica incontra la ricerca moderna
          </figcaption>
        </figure>

        {/* Social proof */}
        <div className="prose-article">
          <h2>Cosa dicono le persone che lo hanno provato</h2>
          <p>
            Abbiamo raccolto alcune esperienze di persone che hanno deciso di integrare questo approccio nella propria routine:
          </p>
        </div>

        <div className="my-6 space-y-4">
          {[
            {
              name: "Laura M.",
              city: "Milano",
              text: "Ho iniziato ad usarlo per curiosità, dopo aver letto diverse esperienze online. Mi trovo bene e lo ho inserito nella mia routine mattutina senza difficoltà.",
            },
            {
              name: "Giovanni R.",
              city: "Roma",
              text: "Cercavo qualcosa di semplice da aggiungere alle mie abitudini quotidiane. È diventato parte della mia giornata, come il caffè del mattino.",
            },
            {
              name: "Francesca D.",
              city: "Napoli",
              text: "Apprezzo molto il fatto che sia a base di ingredienti naturali. Mi piace sapere cosa assumo e questo prodotto è molto trasparente nella composizione.",
            },
          ].map((t, i) => (
            <div key={i} className="p-5 rounded-xl border border-gray-100 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "hsl(142, 50%, 95%)", color: "hsl(142, 60%, 30%)" }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.city}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed italic">"{t.text}"</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 text-center mb-10">
          * Le esperienze riportate sono personali e possono variare da persona a persona.
        </p>

        {/* CTA section */}
        <div className="my-12 p-8 md:p-10 rounded-2xl text-center" style={{ background: "hsl(142, 30%, 97%)", border: "1px solid hsl(142, 30%, 90%)" }}>
          <h2 className="font-heading text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Vuoi saperne di più?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-lg mx-auto">
            Guarda questo breve video per scoprire come funziona e perché sempre più persone lo stanno scegliendo per il proprio benessere quotidiano.
          </p>
          <Link
            to="/it-cod"
            className="inline-flex items-center justify-center font-heading font-bold text-base md:text-lg px-8 py-4 rounded-xl text-white transition-all duration-300 hover:opacity-90 hover:translate-y-[-2px]"
            style={{ background: "hsl(142, 60%, 38%)", boxShadow: "0 8px 24px -6px hsl(142 60% 38% / 0.3)" }}
          >
            Guarda il video →
          </Link>
          <p className="mt-4 text-xs text-gray-400">
            Contenuto informativo · Nessun obbligo
          </p>
        </div>

        {/* Trust elements */}
        <div className="flex flex-wrap justify-center gap-6 my-10 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" /> Contenuto informativo
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5" /> Basato su esperienze reali
          </span>
          <span className="flex items-center gap-1.5">
            <Leaf className="w-3.5 h-3.5" /> Ingredienti naturali
          </span>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-gray-400 mb-3">
            Questo articolo ha finalità esclusivamente informative e non intende sostituire il parere di un medico o professionista sanitario. I risultati possono variare da persona a persona. Prima di assumere qualsiasi integratore, consultare il proprio medico.
          </p>
          <div className="flex justify-center gap-4 text-xs text-gray-300">
            <span>Informativa sulla Privacy</span>
            <span>Termini di Utilizzo</span>
          </div>
          <p className="text-xs text-gray-300 mt-3">
            © 2026 — Tutti i diritti riservati
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Advertorial;
