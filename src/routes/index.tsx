import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Gem,
  Award,
  Search,
  Scissors,
  FileCheck,
  Users,
} from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import heroVideoAsset from "@/assets/hero-diamond-video.mp4.asset.json";
import heroDiamondPhoto from "@/assets/hero-diamond-photo.png";
import collectionDiamonds from "@/assets/diamonds-cut.jpeg";
import aboutCraft from "@/assets/diamonds-rough.jpeg";
import solitaireEtoile from "@/assets/solitaire-etoile.png";
import emeraudeRoyale from "@/assets/emeraude-royale.png";
import { buildPageSeo, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildPageSeo({
      title: "WAL & Co — Diamants naturels taillés & certifiés GIA/IGI | Montréal",
      description:
        "WAL & Co : maison canadienne de diamants naturels certifiés GIA/IGI. Sélection, taille et vente de diamants d'exception — provenance transparente, service sur mesure à Montréal et international.",
      path: "/",
      keywords:
        "diamants certifiés Montréal, diamants GIA, diamants IGI, diamants naturels Canada, bague de fiançailles diamant, WAL & Co, walandco",
      jsonLd: [
        breadcrumbJsonLd([{ name: "Accueil", path: "/" }]),
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "WAL & Co — Diamants naturels taillés & certifiés",
          url: "https://walandco.ca/",
          description:
            "Maison canadienne de diamants naturels certifiés GIA/IGI. Sélection, taille et vente sur mesure.",
          isPartOf: { "@id": "https://walandco.ca/#website" },
          about: { "@id": "https://walandco.ca/#organization" },
          inLanguage: "fr-CA",
        },
      ],
    }),
  component: Index,
});

function Index() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((s) => (s === 0 ? 1 : 0));
    }, 7000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <SiteLayout>
      {/* HERO — full bleed cinématique */}
      <section className="relative min-h-[560px] sm:min-h-[640px] lg:h-[92vh] w-full overflow-hidden flex items-center py-16 sm:py-20 lg:py-0">
        {/* Carrousel média : vidéo diamant → photo diamant */}
        <div className="absolute inset-0 bg-black">
          <div
            className="absolute inset-0 flex w-[200%] h-full transition-transform duration-[1400ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{ transform: slide === 0 ? "translateX(0%)" : "translateX(-50%)" }}
          >
            <div className="relative w-1/2 h-full">
              <video
                src={heroVideoAsset.url}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={heroDiamondPhoto}
              />
            </div>
            <div className="relative w-1/2 h-full">
              <img
                src={heroDiamondPhoto}
                alt="Diamant taillé et charbon brut — transformation du carbone en pierre précieuse"
                className="absolute inset-0 w-full h-full object-cover"
                width={1024}
                height={1024}
              />
            </div>
          </div>
          <span className="img-sparkle" style={{ top: "22%", left: "58%", animationDelay: "0s" }} />
          <span className="img-sparkle" style={{ top: "44%", left: "72%", animationDelay: "1.1s" }} />
          <span className="img-sparkle" style={{ top: "68%", left: "40%", animationDelay: "2.2s" }} />
        </div>

        {/* Voile pour lisibilité du slogan sur le média */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10 pointer-events-none" />


        {/* Indicateurs de slide */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {[0, 1].map((i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Voir média ${i + 1}`}
              className={`h-[3px] transition-all duration-500 ${
                slide === i ? "w-10 bg-gold" : "w-5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>


        {/* Contenu */}
        <div className="relative container-lux w-full">
          <div className="max-w-3xl lg:max-w-4xl fade-up [text-shadow:0_2px_28px_rgba(0,0,0,0.9),0_6px_60px_rgba(0,0,0,0.55)]">
            <h1 className="font-display text-[2.35rem] leading-[1.04] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.75rem] tracking-tight font-medium">
              <span className="block text-white">La nature crée,</span>
              <span className="mt-2 sm:mt-3 block italic bg-gradient-to-r from-white via-[#8BB4F0] to-[#3D7DD9] bg-clip-text text-transparent">
                nous révélons l'excellence.
              </span>
            </h1>
            <p className="mt-6 sm:mt-8 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-white/85">
              Des diamants naturels taillés avec précision. Certifiés pour inspirer confiance.
            </p>

            <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link to="/collection" className="btn-gold btn-gold-hover w-full sm:w-auto">
                Découvrir nos diamants <ArrowRight size={14} />
              </Link>
            </div>

            <div className="mt-10 sm:mt-14 flex flex-wrap gap-x-6 gap-y-3 text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.22em] uppercase text-white/80">
              <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-gold shrink-0" /> Certifié GIA · IGI</span>

              <span className="flex items-center gap-2"><Gem size={14} className="text-gold shrink-0" /> Provenance tracée</span>
              <span className="flex items-center gap-2"><Award size={14} className="text-gold shrink-0" /> Sélection maison</span>
            </div>
          </div>

        </div>

        {/* Carte signature flottante */}
        <div className="hidden 2xl:block absolute bottom-14 right-10 card-lux p-5 float-slow">
          <div className="text-[10px] tracking-[0.28em] uppercase text-gold">Signature</div>
          <div className="mt-2 font-display text-2xl">Round Brilliant · 2.14 ct</div>
          <div className="mt-1 text-xs text-muted-foreground">Couleur D · Pureté VVS1</div>
        </div>

        {/* Indicateur de scroll */}
        <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
          <span className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>


      {/* BIENVENUE */}
      <section className="container-lux py-16 sm:py-20 lg:py-24 reveal">
        <div className="max-w-3xl">
          <span className="eyebrow">Bienvenue chez WAL &amp; Co</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
            Une entreprise <span className="italic text-diamond-gradient">canadienne</span> du diamant naturel
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Bienvenue chez WAL &amp; Co, une entreprise canadienne spécialisée dans la sélection,
            la taille, la certification et la commercialisation de diamants naturels.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Notre mission est de révéler toute la beauté et la valeur de chaque diamant grâce à un
            savoir-faire rigoureux et à des standards de qualité élevés. Nous proposons des pierres
            destinées aux joailliers, détaillants, grossistes et investisseurs qui recherchent
            l'excellence, l'authenticité et la confiance.
          </p>
        </div>
      </section>

      {/* NOTRE EXPERTISE */}
      <section className="border-y border-border/60 bg-card/30 reveal">
        <div className="container-lux py-16 sm:py-20 lg:py-28">
          <div className="max-w-2xl">
            <span className="eyebrow">Notre expertise</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
              Trois savoir-faire <span className="italic text-diamond-gradient">complémentaires</span>
            </h2>
          </div>
          <div className="mt-10 sm:mt-14 grid md:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                icon: Scissors,
                title: "Diamants naturels taillés",
                text: "Chaque diamant est soigneusement sélectionné et taillé afin de maximiser son éclat, sa brillance et sa valeur.",
              },
              {
                icon: FileCheck,
                title: "Diamants certifiés",
                text: "Nos diamants sont accompagnés d'une certification délivrée par des laboratoires gemmologiques reconnus, garantissant une évaluation indépendante de leurs caractéristiques.",
              },
              {
                icon: Search,
                title: "Diamants bruts sélectionnés",
                text: "Lorsque certaines pierres sont mieux adaptées au marché du diamant brut, nous proposons également une sélection destinée aux professionnels : lapidaires, fabricants et négociants.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article key={title} className="card-lux p-6 sm:p-8">
                <Icon size={22} className="text-gold" />
                <h3 className="mt-6 font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTION FEATURED */}
      <section className="container-lux py-16 sm:py-20 lg:py-28 reveal">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div>
            <span className="eyebrow">Nos diamants</span>
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
                <img src={p.image} alt={p.name} loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-center">{p.name}</h3>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center justify-center gap-2 w-full text-[11px] tracking-[0.22em] uppercase text-gold hover:text-foreground transition-colors"
                >
                  En savoir plus <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NOTRE ENGAGEMENT */}
      <section className="container-lux py-16 sm:py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center reveal">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -inset-8 bg-gradient-to-tr from-deep-blue/20 via-transparent to-gold/15 blur-3xl float-slow" />
          <div className="img-dynamic relative aspect-[4/5] border border-border">
            <img src={aboutCraft} alt="Diamants bruts sélectionnés par WAL & Co" loading="lazy" />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="eyebrow">Notre engagement</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
            Intégrité et <span className="italic text-diamond-gradient">professionnalisme</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Chez WAL &amp; Co, nous sélectionnons chaque diamant avec rigueur afin d'offrir à nos
            clients des pierres naturelles répondant aux plus hauts standards de qualité, de
            transparence et d'authenticité.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Des diamants naturels soigneusement sélectionnés.",
              "Des diamants taillés répondant aux plus hauts standards de qualité.",
              "Des diamants certifiés par des laboratoires gemmologiques reconnus.",
              "Une transparence à chaque étape de nos transactions.",
              "Un accompagnement personnalisé pour chaque client.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                <span className="shrink-0" aria-hidden="true">💎</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link to="/about" className="mt-8 inline-flex btn-outline-gold">
            Notre maison
          </Link>
        </div>
      </section>

      {/* NOS CLIENTS */}
      <section className="border-y border-border/60 bg-card/30 reveal">
        <div className="container-lux py-16 sm:py-20 lg:py-28">
          <div className="max-w-2xl">
            <span className="eyebrow">Nos clients</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
              Nous <span className="italic text-diamond-gradient">accompagnons</span>
            </h2>
          </div>
          <ul className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Joailliers", "Détaillants", "Grossistes", "Manufacturiers", "Négociants", "Investisseurs"].map((c) => (
              <li key={c} className="card-lux p-5 text-center">
                <Users size={18} className="text-gold mx-auto" />
                <div className="mt-3 text-[11px] tracking-[0.2em] uppercase">{c}</div>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-muted-foreground leading-relaxed">
            Que vous recherchiez un diamant taillé et certifié prêt à être monté sur un bijou ou un
            diamant brut répondant à des critères spécifiques, WAL &amp; Co met son expertise à
            votre service.
          </p>
        </div>
      </section>

      {/* NOTRE VISION */}
      <section className="container-lux py-16 sm:py-20 lg:py-28 reveal">
        <div className="max-w-3xl">
          <span className="eyebrow">Notre vision</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
            Un partenaire de confiance <span className="italic text-diamond-gradient">à l'international</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Nous aspirons à devenir un partenaire de confiance sur le marché international du
            diamant naturel, en offrant des pierres qui répondent aux plus hauts standards de
            qualité, de transparence et de professionnalisme.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Notre objectif est de bâtir des relations durables avec nos clients grâce à un service
            d'excellence et à une sélection de diamants répondant aux exigences du marché mondial.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-center">
          {[
            { k: "Qualité", v: "diamants naturels" },
            { k: "Rigueur", v: "sélection maison" },
            { k: "Précision", v: "taille experte" },
            { k: "Confiance", v: "certification reconnue" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-2xl sm:text-3xl md:text-4xl text-diamond-gradient">{s.k}</div>
              <div className="mt-2 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-lux pb-24 reveal">
        <div className="card-lux relative overflow-hidden p-8 sm:p-12 lg:p-20 text-center">
          <div
            className="absolute inset-0 opacity-30"
            style={{ backgroundImage: `url(${collectionDiamonds})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
          <div className="relative">
            <span className="eyebrow">WAL &amp; Co</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
              Découvrez l'excellence <span className="italic text-diamond-gradient">du diamant naturel.</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
              Des pierres sélectionnées avec rigueur. Taillées avec précision. Certifiées pour
              inspirer confiance.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
              <Link to="/collection" className="btn-gold btn-gold-hover">
                Explorer notre collection
              </Link>
              <Link to="/contact" className="btn-outline-gold">
                Demander une soumission
              </Link>
              <Link to="/contact" className="btn-outline-gold">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}

const featured = [
  { name: "Solitaire Étoile", image: solitaireEtoile },
  { name: "Round Brilliant", image: collectionDiamonds },
  { name: "Émeraude Royale", image: emeraudeRoyale },
];
