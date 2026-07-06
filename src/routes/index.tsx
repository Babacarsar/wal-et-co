import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Gem,
  Award,
  Sparkles,
  Search,
  Scissors,
  FileCheck,
  Package,
  Quote,
  Globe2,
  Users,
} from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import heroDiamond from "@/assets/hero-diamond.jpg";
import collectionDiamonds from "@/assets/collection-diamonds.jpg";
import aboutCraft from "@/assets/about-craft.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-lux grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
          <div>
            <span className="eyebrow">Maison de diamants — Depuis toujours</span>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
              L'éclat rare, <br />
              <span className="text-gold-gradient italic">taillé pour l'éternité.</span>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
              WAL &amp; Co sélectionne, certifie et vous présente des diamants taillés
              d'exception. Une maison au service des joailliers, grossistes,
              investisseurs et amateurs de pierres précieuses.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/collection" className="btn-gold btn-gold-hover">
                Découvrir la collection <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="btn-outline-gold">
                Demander un devis
              </Link>
            </div>
            <div className="mt-14 flex flex-wrap gap-8 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
              <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-gold" /> Certifié GIA · IGI</span>
              <span className="flex items-center gap-2"><Gem size={14} className="text-gold" /> Provenance tracée</span>
              <span className="flex items-center gap-2"><Award size={14} className="text-gold" /> Sélection maison</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-br from-gold/10 via-transparent to-deep-blue/30 blur-3xl" />
            <div className="relative overflow-hidden border border-border shadow-luxe">
              <img
                src={heroDiamond}
                alt="Diamant taillé brillant WAL & Co"
                width={1600}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 card-lux p-5 hidden md:block">
              <div className="text-[10px] tracking-[0.28em] uppercase text-gold">Signature</div>
              <div className="mt-2 font-display text-2xl">Round Brilliant · 2.14 ct</div>
              <div className="mt-1 text-xs text-muted-foreground">Couleur D · Pureté VVS1</div>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="container-lux grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/60">
          {[
            { icon: Gem, title: "Sélection rigoureuse", text: "Chaque pierre est choisie main." },
            { icon: ShieldCheck, title: "Certification", text: "GIA, IGI et laboratoires reconnus." },
            { icon: Sparkles, title: "Éclat maîtrisé", text: "Taille et symétrie d'exception." },
            { icon: Award, title: "Confiance", text: "Provenance transparente et éthique." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="p-8 flex items-start gap-4">
              <Icon size={22} className="text-gold mt-1 shrink-0" />
              <div>
                <div className="text-sm font-medium tracking-wide">{title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTION FEATURED */}
      <section className="container-lux py-24 lg:py-32">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div>
            <span className="eyebrow">La Collection</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Des pierres <span className="italic text-gold-gradient">d'exception</span>
            </h2>
          </div>
          <Link to="/collection" className="text-[11px] tracking-[0.24em] uppercase text-gold hover:underline">
            Voir toute la collection →
          </Link>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <article key={p.name} className="group card-lux overflow-hidden">
              <div className="aspect-square overflow-hidden bg-secondary/40">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl">{p.name}</h3>
                  <span className="text-[10px] tracking-[0.22em] uppercase text-gold">{p.ref}</span>
                </div>
                <dl className="mt-4 grid grid-cols-4 gap-2 text-xs">
                  {p.specs.map((s) => (
                    <div key={s.label}>
                      <dt className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{s.label}</dt>
                      <dd className="mt-1 text-foreground">{s.value}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-gold hover:text-foreground transition-colors"
                >
                  Demander le prix <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container-lux py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -inset-8 bg-gradient-to-tr from-deep-blue/40 via-transparent to-gold/10 blur-3xl" />
          <img
            src={aboutCraft}
            alt="Expert examinant un diamant à la loupe"
            loading="lazy"
            className="relative w-full h-auto object-cover border border-border"
          />
        </div>
        <div className="order-1 lg:order-2">
          <span className="eyebrow">L'histoire WAL &amp; Co</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Un savoir-faire au service <span className="italic text-gold-gradient">de la rareté</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Depuis nos origines, WAL &amp; Co œuvre à révéler l'âme des diamants.
            Nos experts inspectent chaque pierre à la loupe — carat, couleur, clarté,
            taille — pour ne retenir que celles qui méritent notre signature.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Nous accompagnons joailliers, grossistes, investisseurs et particuliers
            avec la même exigence : la transparence, la qualité, et le respect
            de la provenance.
          </p>
          <Link to="/about" className="mt-8 inline-flex btn-outline-gold">
            Notre maison
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container-lux pb-24">
        <div className="card-lux relative overflow-hidden p-12 lg:p-20 text-center">
          <div
            className="absolute inset-0 opacity-30"
            style={{ backgroundImage: `url(${collectionDiamonds})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
          <div className="relative">
            <span className="eyebrow">Sur mesure</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Une pierre en tête ? <span className="italic text-gold-gradient">Nous la trouvons.</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
              Décrivez-nous le diamant recherché — carat, couleur, clarté, taille,
              budget — nos experts vous répondent sous 24 h.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-gold btn-gold-hover">
                Demander une pierre
              </Link>
              <a href="https://wa.me/" className="btn-outline-gold">
                Contact WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

const featured = [
  {
    name: "Solitaire Étoile",
    ref: "REF · WC-1042",
    image: collectionDiamonds,
    specs: [
      { label: "Carat", value: "1.52" },
      { label: "Couleur", value: "D" },
      { label: "Clarté", value: "VVS1" },
      { label: "Taille", value: "Excellent" },
    ],
  },
  {
    name: "Round Brilliant",
    ref: "REF · WC-1088",
    image: collectionDiamonds,
    specs: [
      { label: "Carat", value: "2.14" },
      { label: "Couleur", value: "E" },
      { label: "Clarté", value: "VS1" },
      { label: "Taille", value: "Excellent" },
    ],
  },
  {
    name: "Émeraude Royale",
    ref: "REF · WC-1120",
    image: collectionDiamonds,
    specs: [
      { label: "Carat", value: "3.05" },
      { label: "Couleur", value: "F" },
      { label: "Clarté", value: "VVS2" },
      { label: "Taille", value: "Very Good" },
    ],
  },
];
