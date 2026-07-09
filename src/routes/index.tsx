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
import heroAsset from "@/assets/hero-diamonds.jpeg.asset.json";
import cutAsset from "@/assets/diamonds-cut.jpeg.asset.json";
import pouchAsset from "@/assets/diamonds-pouch.jpeg.asset.json";
import roughAsset from "@/assets/diamonds-rough.jpeg.asset.json";

const heroDiamond = heroAsset.url;
const collectionDiamonds = cutAsset.url;
const aboutCraft = roughAsset.url;
const pouchDiamonds = pouchAsset.url;

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* HERO — full bleed cinématique */}
      <section className="relative min-h-[88vh] sm:min-h-[640px] lg:h-[92vh] w-full overflow-hidden flex items-center py-24 lg:py-0">
        {/* Image de fond animée — même style que collection & savoir-faire */}
        <div className="img-dynamic absolute inset-0">
          <img
            src={heroDiamond}
            alt="Diamant taillé brillant WAL & Co"
          />
          <span className="img-sparkle" style={{ top: "22%", left: "58%", animationDelay: "0s" }} />
          <span className="img-sparkle" style={{ top: "44%", left: "72%", animationDelay: "1.1s" }} />
          <span className="img-sparkle" style={{ top: "68%", left: "40%", animationDelay: "2.2s" }} />
        </div>

        {/* Voile lumineux pour lisibilité + halo doré */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30 sm:from-background/85 sm:via-background/55 sm:to-background/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[380px] h-[380px] sm:w-[520px] sm:h-[520px] rounded-full bg-gold/20 blur-[120px] float-slow pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[380px] h-[380px] sm:w-[520px] sm:h-[520px] rounded-full bg-accent/20 blur-[120px] float-slow pointer-events-none" />


        {/* Contenu */}
        <div className="relative container-lux w-full">
          <div className="max-w-2xl fade-up">
            <span className="eyebrow">Maison de diamants — WAL &amp; Co</span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight">
              L'éclat rare, <br className="hidden sm:inline" />
              <span className="text-diamond-gradient italic">taillé pour l'éternité.</span>
            </h1>
            <p className="mt-6 sm:mt-8 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
              WAL &amp; Co sélectionne, taille et certifie des diamants naturels d'exception —
              du brut congolais au sertissage final, avec transparence et savoir-faire.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link to="/collection" className="btn-gold btn-gold-hover w-full sm:w-auto">
                Découvrir la collection <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="btn-outline-gold w-full sm:w-auto">
                Demander un devis
              </Link>
            </div>
            <div className="mt-10 sm:mt-14 flex flex-wrap gap-x-6 gap-y-3 text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.22em] uppercase text-muted-foreground">
              <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-gold shrink-0" /> Certifié GIA · IGI</span>
              <span className="flex items-center gap-2"><Gem size={14} className="text-gold shrink-0" /> Provenance tracée</span>
              <span className="flex items-center gap-2"><Award size={14} className="text-gold shrink-0" /> Sélection maison</span>
            </div>
          </div>
        </div>

        {/* Carte signature flottante */}
        <div className="hidden xl:block absolute bottom-14 right-10 card-lux p-5 float-slow">
          <div className="text-[10px] tracking-[0.28em] uppercase text-gold">Signature</div>
          <div className="mt-2 font-display text-2xl">Round Brilliant · 2.14 ct</div>
          <div className="mt-1 text-xs text-muted-foreground">Couleur D · Pureté VVS1</div>
        </div>

        {/* Indicateur de scroll */}
        <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
          <span>Scroll</span>
          <span className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>


      {/* VALEURS */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="container-lux grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border/60">
          {[
            { icon: Gem, title: "Sélection rigoureuse", text: "Chaque pierre est choisie main." },
            { icon: ShieldCheck, title: "Certification", text: "GIA, IGI et laboratoires reconnus." },
            { icon: Sparkles, title: "Éclat maîtrisé", text: "Taille et symétrie d'exception." },
            { icon: Award, title: "Confiance", text: "Provenance transparente et éthique." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="p-5 sm:p-6 md:p-8 flex items-start gap-3 sm:gap-4">
              <Icon size={20} className="text-gold mt-1 shrink-0" />
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-medium tracking-wide">{title}</div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTION FEATURED */}
      <section className="container-lux py-16 sm:py-20 lg:py-28">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div>
            <span className="eyebrow">La Collection</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
              Des pierres <span className="italic text-diamond-gradient">d'exception</span>
            </h2>
          </div>
          <Link to="/collection" className="text-[11px] tracking-[0.24em] uppercase text-gold hover:underline">
            Voir toute la collection →
          </Link>
        </div>

        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featured.map((p) => (
            <article key={p.name} className="group card-lux overflow-hidden">
              <div className="img-dynamic aspect-square bg-secondary/40">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
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
      <section className="container-lux py-16 sm:py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -inset-8 bg-gradient-to-tr from-deep-blue/20 via-transparent to-gold/15 blur-3xl float-slow" />
          <div className="img-dynamic relative aspect-[4/5] border border-border">
            <img
              src={aboutCraft}
              alt="Expert examinant un diamant à la loupe"
              loading="lazy"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="eyebrow">L'histoire WAL &amp; Co</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
            Un savoir-faire au service <span className="italic text-diamond-gradient">de la rareté</span>
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

      {/* STATS */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="container-lux py-12 sm:py-16 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-center">
          {[
            { k: "20+", v: "années d'expertise" },
            { k: "100%", v: "diamants certifiés" },
            { k: "3", v: "continents desservis" },
            { k: "24 h", v: "délai de réponse" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl sm:text-4xl md:text-5xl text-diamond-gradient">
                {s.k}
              </div>
              <div className="mt-2 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-lux py-16 sm:py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow">Notre processus</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
            De la mine <span className="italic text-diamond-gradient">à votre écrin</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Un circuit court, maîtrisé à chaque étape, qui garantit la
            traçabilité, l'éthique et la qualité de la pierre que vous recevez.
          </p>
        </div>

        <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Search,
              step: "01",
              title: "Approvisionnement",
              text: "Sélection du brut à la source, en République démocratique du Congo et auprès de partenaires vérifiés.",
            },
            {
              icon: Scissors,
              step: "02",
              title: "Taille & polissage",
              text: "Optimisation par des maîtres-tailleurs pour révéler l'éclat, la symétrie et la brillance maximale.",
            },
            {
              icon: FileCheck,
              step: "03",
              title: "Certification",
              text: "Analyse indépendante par laboratoire reconnu — GIA, IGI, HRD — pour un rapport objectif.",
            },
            {
              icon: Package,
              step: "04",
              title: "Livraison sécurisée",
              text: "Expédition assurée porte-à-porte par transporteur spécialisé, ou remise en main propre.",
            },
          ].map(({ icon: Icon, step, title, text }) => (
            <li key={step} className="card-lux p-6 sm:p-8 relative">
              <div className="absolute top-6 right-6 text-[10px] tracking-[0.28em] text-gold/70">
                {step}
              </div>
              <Icon size={22} className="text-gold" />
              <h3 className="mt-6 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* 4C GUIDE */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="container-lux py-16 sm:py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="eyebrow">Guide d'achat</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
              Comprendre les <span className="italic text-diamond-gradient">4C</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Carat, Couleur, Clarté, Taille : les quatre critères universels
              qui définissent la qualité d'un diamant. Chez WAL &amp; Co, nous
              privilégions les gammes hautes de chaque axe.
            </p>
            <Link to="/collection" className="mt-8 inline-flex btn-outline-gold">
              Voir la collection
            </Link>
          </div>

          <dl className="space-y-4">
            {[
              {
                t: "Carat",
                d: "Le poids de la pierre. 1 carat = 0,2 gramme. La rareté croît de façon exponentielle avec le poids.",
              },
              {
                t: "Couleur",
                d: "De D (incolore, le plus rare) à Z (jaunâtre). Nous sélectionnons principalement D à H.",
              },
              {
                t: "Clarté",
                d: "De FL (sans inclusion) à I3. Nous privilégions FL à VS2 — pureté invisible à l'œil nu.",
              },
              {
                t: "Taille",
                d: "La qualité de la taille détermine l'éclat. Nous ne retenons que les grades Excellent et Very Good.",
              },
            ].map((c) => (
              <div key={c.t} className="card-lux p-6">
                <dt className="font-display text-2xl">{c.t}</dt>
                <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {c.d}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="container-lux py-16 sm:py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow">Nous servons</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
            Particuliers &amp; <span className="italic text-diamond-gradient">professionnels</span>
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <div className="card-lux p-6 sm:p-8 md:p-10">
            <Users size={22} className="text-gold" />
            <h3 className="mt-6 font-display text-2xl sm:text-3xl">B2C — Particuliers</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Pour une bague de fiançailles, une pièce d'exception ou un
              investissement patrimonial, nous vous accompagnons de la
              sélection à la livraison, avec discrétion et pédagogie.
            </p>
            <Link to="/contact" className="mt-8 inline-flex btn-outline-gold">
              Nous contacter
            </Link>
          </div>
          <div className="card-lux p-6 sm:p-8 md:p-10">
            <Globe2 size={22} className="text-gold" />
            <h3 className="mt-6 font-display text-2xl sm:text-3xl">B2B — Professionnels</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Joailliers, grossistes, bureaux d'achat : accédez à notre stock
              élargi, à nos conditions dédiées et à un service de recherche
              sur mesure, calibré pour vos volumes.
            </p>
            <Link to="/contact" className="mt-8 inline-flex btn-outline-gold">
              Ouvrir un compte pro
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="container-lux py-16 sm:py-20 lg:py-28">
          <div className="max-w-2xl">
            <span className="eyebrow">Ils nous font confiance</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
              La parole <span className="italic text-diamond-gradient">à nos clients</span>
            </h2>
          </div>
          <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                q: "Une écoute rare et une pierre parfaite pour la bague de fiançailles. Le rapport GIA était joint, tout était limpide.",
                n: "Élise M.",
                r: "Cliente particulière · Montréal",
              },
              {
                q: "Nous travaillons avec WAL & Co pour nos pièces de haute joaillerie. Régularité, transparence, qualité : trois piliers.",
                n: "Maison Vasseur",
                r: "Joaillier · Paris",
              },
              {
                q: "Un partenaire fiable pour nos achats en gros. Le sourcing en RDC leur donne un vrai avantage sur la traçabilité.",
                n: "D. Cohen",
                r: "Grossiste · Anvers",
              },
            ].map((t) => (
              <figure key={t.n} className="card-lux p-6 sm:p-8">
                <Quote size={20} className="text-gold" />
                <blockquote className="mt-6 text-muted-foreground leading-relaxed">
                  « {t.q} »
                </blockquote>
                <figcaption className="mt-8 border-t border-border/60 pt-5">
                  <div className="font-display text-lg">{t.n}</div>
                  <div className="mt-1 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                    {t.r}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-lux pb-24">
        <div className="card-lux relative overflow-hidden p-8 sm:p-12 lg:p-20 text-center">
          <div
            className="absolute inset-0 opacity-30"
            style={{ backgroundImage: `url(${collectionDiamonds})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
          <div className="relative">
            <span className="eyebrow">Sur mesure</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
              Une pierre en tête ? <span className="italic text-diamond-gradient">Nous la trouvons.</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
              Décrivez-nous le diamant recherché — carat, couleur, clarté, taille,
              budget — nos experts vous répondent sous 24 h.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
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
    image: pouchDiamonds,
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
    image: aboutCraft,
    specs: [
      { label: "Carat", value: "3.05" },
      { label: "Couleur", value: "F" },
      { label: "Clarté", value: "VVS2" },
      { label: "Taille", value: "Very Good" },
    ],
  },
];
