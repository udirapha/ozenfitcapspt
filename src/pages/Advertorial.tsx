import { Link } from "react-router-dom";
import { Check, Clock, Leaf, Heart, Star, Shield, Quote } from "lucide-react";
import heroImg from "@/assets/advertorial-hero.jpg";
import lifestyle1 from "@/assets/advertorial-lifestyle1.jpg";
import lifestyle2 from "@/assets/advertorial-lifestyle2.jpg";
import lifestyle3 from "@/assets/advertorial-lifestyle3.jpg";

const Advertorial = () => {
  const today = new Date().toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Sponsored content labels */}
      <div className="bg-gray-50 border-b border-gray-100 py-2 px-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between text-[11px] text-gray-400 uppercase tracking-wider">
          <span>Contenuto sponsorizzato</span>
          <span>Articolo informativo</span>
        </div>
      </div>

      <article className="max-w-2xl mx-auto px-4 py-8 md:py-14">
        {/* Category */}
        <div className="mb-5">
          <span
            className="inline-block text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-[hsl(142,50%,95%)] text-[hsl(142,60%,30%)]"
          >
            Salute & Benessere
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-[1.65rem] md:text-[2.25rem] font-bold text-gray-900 leading-[1.25] mb-4">
          Perché sempre più persone in Italia stanno parlando di questo approccio naturale al benessere
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-6">
          Un numero crescente di italiani sta riscoprendo il valore di piccole abitudini quotidiane legate alla tradizione erboristica. Cosa c'è dietro questo interesse?
        </p>

        {/* Author & date */}
        <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-100">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-[hsl(142,50%,95%)] text-[hsl(142,60%,30%)]">
            MR
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">
              Di Marco Rossi
            </p>
            <p className="text-xs text-gray-400">
              Aggiornato il {today} · <Clock className="w-3 h-3 inline" /> 5 min di lettura
            </p>
          </div>
        </div>

        {/* Hero image */}
        <figure className="mb-10">
          <img
            src={heroImg}
            alt="Scena di vita quotidiana in Italia"
            className="w-full rounded-xl object-cover"
            style={{ maxHeight: "460px" }}
            width={1200}
            height={800}
          />
          <figcaption className="text-[11px] text-gray-400 mt-2 text-center italic">
            Lo stile di vita italiano, da sempre legato a natura e tradizione
          </figcaption>
        </figure>

        {/* Introduction */}
        <div className="space-y-5 text-[15px] md:text-base text-gray-700 leading-[1.85]">
          <p>
            Viviamo in un periodo storico in cui i ritmi quotidiani sono diventati sempre più intensi. Tra impegni lavorativi, gestione familiare e le sfide della vita moderna, trovare il tempo per prendersi cura di sé è diventato una vera e propria necessità per molte persone.
          </p>
          <p>
            In Italia, dove la cultura del benessere ha radici profonde — dalla dieta mediterranea all'uso secolare di erbe e rimedi naturali — questo bisogno si manifesta in modo particolare. Sempre più persone cercano soluzioni semplici, che si integrino nella routine senza richiedere cambiamenti drastici.
          </p>
          <p>
            Non stiamo parlando di tendenze passeggere o soluzioni miracolose, ma di un interesse genuino verso abitudini quotidiane più consapevoli, basate su ingredienti che la tradizione erboristica utilizza da generazioni.
          </p>
        </div>

        {/* Pull quote */}
        <blockquote className="my-10 py-6 px-6 border-l-4 border-[hsl(142,50%,70%)] bg-gray-50 rounded-r-lg">
          <Quote className="w-5 h-5 text-gray-300 mb-2" />
          <p className="text-gray-600 italic text-[15px] leading-relaxed">
            "La vera sfida di oggi non è trovare informazioni, ma trovare un equilibrio che funzioni nella propria vita quotidiana."
          </p>
        </blockquote>

        {/* Lifestyle image 1 */}
        <figure className="my-10">
          <img
            src={lifestyle1}
            alt="Ingredienti naturali in una cucina italiana"
            className="w-full rounded-xl object-cover"
            style={{ maxHeight: "380px" }}
            loading="lazy"
            width={1200}
            height={800}
          />
          <figcaption className="text-[11px] text-gray-400 mt-2 text-center italic">
            La tradizione erboristica mediterranea, parte integrante della cultura italiana
          </figcaption>
        </figure>

        {/* Discovery section */}
        <div className="space-y-5 text-[15px] md:text-base text-gray-700 leading-[1.85]">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-gray-900 mt-2">
            Un interesse che cresce, un approccio che incuriosisce
          </h2>
          <p>
            Negli ultimi mesi, alcune persone hanno iniziato a parlare online di un approccio naturale al benessere quotidiano. Non si tratta di qualcosa di nuovo in senso assoluto — le basi affondano nella tradizione erboristica — ma la crescente attenzione sembra riflettere un bisogno collettivo di semplicità.
          </p>
          <p>
            Quello che colpisce è la motivazione di chi se ne interessa: non la ricerca di risultati immediati, ma il desiderio di integrare nella propria giornata qualcosa di naturale, come si farebbe con una tisana o un alimento funzionale.
          </p>
        </div>

        {/* Explanation section */}
        <div className="my-10 p-6 md:p-8 rounded-xl bg-[hsl(142,30%,97%)]">
          <div className="flex items-center gap-2 mb-5">
            <Leaf className="w-5 h-5 text-[hsl(142,60%,38%)]" />
            <h2 className="font-heading text-lg md:text-xl font-bold text-gray-900">
              Cosa si intende per "approccio naturale"?
            </h2>
          </div>
          <div className="space-y-4 text-[15px] text-gray-600 leading-[1.85]">
            <p>
              Quando si parla di approccio naturale al benessere, ci si riferisce generalmente all'utilizzo di <strong>estratti vegetali e ingredienti di origine naturale</strong> che la ricerca moderna sta continuando a studiare.
            </p>
            <p>
              Alcuni utenti riportano esperienze positive nell'integrare questi elementi nella propria routine, sottolineando come la semplicità d'uso sia uno degli aspetti più apprezzati. Naturalmente, ogni persona è diversa e le esperienze individuali possono variare.
            </p>
            <p>
              L'aspetto che sembra attrarre di più è la possibilità di <strong>supportare il proprio benessere generale</strong> attraverso un gesto semplice e quotidiano, senza la necessità di modificare radicalmente le proprie abitudini.
            </p>
          </div>
        </div>

        {/* Lifestyle image 2 */}
        <figure className="my-10">
          <img
            src={lifestyle2}
            alt="Coppia che passeggia in un parco"
            className="w-full rounded-xl object-cover"
            style={{ maxHeight: "380px" }}
            loading="lazy"
            width={1200}
            height={800}
          />
          <figcaption className="text-[11px] text-gray-400 mt-2 text-center italic">
            Il benessere si costruisce un giorno alla volta, con scelte consapevoli
          </figcaption>
        </figure>

        {/* Bullet points */}
        <div className="space-y-5 text-[15px] md:text-base text-gray-700 leading-[1.85]">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-gray-900">
            Cosa cercano le persone in un integratore naturale?
          </h2>
          <p>
            Dalle conversazioni online e dalle esperienze condivise, emergono alcune caratteristiche comuni che le persone considerano importanti:
          </p>
        </div>

        <div className="my-6 space-y-3">
          {[
            { icon: Heart, text: "Supporto al benessere generale nella vita di tutti i giorni" },
            { icon: Leaf, text: "Ingredienti di origine naturale e composizione trasparente" },
            { icon: Shield, text: "Semplicità di integrazione nella routine quotidiana" },
            { icon: Check, text: "Un approccio graduale, senza cambiamenti drastici" },
            { icon: Star, text: "Esperienze condivise da altre persone in contesti simili" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 bg-[hsl(142,50%,95%)]">
                <item.icon className="w-4 h-4 text-[hsl(142,60%,38%)]" />
              </div>
              <span className="text-gray-600 text-sm leading-relaxed">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Lifestyle image 3 */}
        <figure className="my-10">
          <img
            src={lifestyle3}
            alt="Erbe e ingredienti naturali"
            className="w-full rounded-xl object-cover"
            style={{ maxHeight: "380px" }}
            loading="lazy"
            width={1200}
            height={800}
          />
          <figcaption className="text-[11px] text-gray-400 mt-2 text-center italic">
            Ingredienti che la tradizione erboristica conosce da secoli
          </figcaption>
        </figure>

        {/* Social proof */}
        <div className="space-y-5 text-[15px] md:text-base text-gray-700 leading-[1.85]">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-gray-900">
            Alcune esperienze condivise
          </h2>
          <p>
            Abbiamo raccolto alcune testimonianze di persone che hanno deciso di provare questo approccio. Come sempre, le esperienze individuali possono variare.
          </p>
        </div>

        <div className="my-6 space-y-4">
          {[
            {
              name: "Laura M.",
              city: "Milano",
              text: "Ho iniziato per curiosità, dopo aver letto alcune esperienze online. Lo ho inserito nella mia routine mattutina senza difficoltà. Apprezzo soprattutto la semplicità.",
            },
            {
              name: "Giovanni R.",
              city: "Roma",
              text: "Cercavo qualcosa di semplice da aggiungere alle mie abitudini. Non mi aspettavo nulla di particolare, ma mi trovo bene e continuo ad usarlo.",
            },
            {
              name: "Francesca D.",
              city: "Napoli",
              text: "Mi piace sapere cosa assumo. Ho apprezzato la trasparenza degli ingredienti e il fatto che sia a base naturale. Lo consiglio a chi è curioso.",
            },
          ].map((t, i) => (
            <div key={i} className="p-5 rounded-xl border border-gray-100 bg-white shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold bg-[hsl(142,50%,95%)] text-[hsl(142,60%,30%)]">
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

        <p className="text-[11px] text-gray-400 text-center mb-10">
          * Le esperienze riportate sono personali e soggettive. I risultati possono variare da persona a persona.
        </p>

        {/* CTA section */}
        <div className="my-12 p-8 md:p-10 rounded-2xl text-center bg-[hsl(142,30%,97%)] border border-[hsl(142,30%,90%)]">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-gray-900 mb-3">
            Vuoi saperne di più?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-md mx-auto text-[15px]">
            Guarda questo breve video per saperne di più su questo approccio naturale al benessere.
          </p>
          <Link
            to="/it-cod"
            className="inline-flex items-center justify-center font-heading font-bold text-base px-8 py-4 rounded-xl text-white transition-all duration-300 hover:opacity-90 hover:translate-y-[-2px] bg-[hsl(142,60%,38%)]"
            style={{ boxShadow: "0 8px 24px -6px hsl(142 60% 38% / 0.25)" }}
          >
            Scopri di più →
          </Link>
          <p className="mt-4 text-[11px] text-gray-400">
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
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] text-gray-400 mb-3 leading-relaxed">
            Questo contenuto è a scopo informativo e non intende sostituire il parere di un medico o professionista sanitario. Le esperienze riportate sono soggettive e i risultati possono variare. Prima di assumere qualsiasi integratore, si consiglia di consultare il proprio medico.
          </p>
          <div className="flex justify-center gap-4 text-[11px] text-gray-300">
            <span>Informativa sulla Privacy</span>
            <span>·</span>
            <span>Termini di Utilizzo</span>
          </div>
          <p className="text-[11px] text-gray-300 mt-3">
            © 2026 — Tutti i diritti riservati
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Advertorial;
