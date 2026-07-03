import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import aboutCraft from "@/assets/about-craft.jpg";
import { ShieldCheck, Gem, Globe2, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — WAL & Co" },
      {
        name: "description",
        content:
          "Découvrez WAL & Co : notre maison, notre savoir-faire dans le diamant taillé certifié, notre engagement pour la qualité et la provenance.",
      },
      { property: "og:title", content: "À propos — WAL & Co" },
      { property: "og:description", content: "Notre maison, notre savoir-faire, notre engagement." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="container-lux pt-20 lg:pt-28 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="eyebrow">Notre maison</span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05]">
            L'exigence du <span className="italic text-gold-gradient">diamant vrai.</span>
          </h1>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            WAL &amp; Co est une maison indépendante spécialisée dans le diamant
            taillé certifié. Nous sélectionnons chaque pierre avec la même
            attention : la brillance, la pureté, l'origine — rien n'est laissé au
            hasard.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Notre mission est simple : offrir aux joailliers, grossistes,
            investisseurs et particuliers un accès direct à des diamants
            d'exception, avec transparence totale sur la provenance et la
            qualité.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-br from-gold/10 via-transparent to-deep-blue/30 blur-3xl" />
          <img
            src={aboutCraft}
            alt="Expert examinant un diamant"
            className="relative w-full h-auto object-cover border border-border"
          />
        </div>
      </section>

      <section className="container-lux py-24">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: Gem, title: "Sélection", text: "Nos gemmologues inspectent chaque pierre à la loupe et rejettent ce qui ne signe pas." },
            { icon: ShieldCheck, title: "Certification", text: "Chaque diamant est accompagné d'un certificat GIA, IGI ou d'un laboratoire équivalent." },
            { icon: Globe2, title: "Provenance", text: "Nous privilégions les circuits transparents et un approvisionnement responsable." },
            { icon: HeartHandshake, title: "Accompagnement", text: "Un expert dédié vous conseille, de la première demande à la livraison." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="card-lux p-8">
              <Icon size={26} className="text-gold" />
              <h3 className="mt-6 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-lux pb-24">
        <div className="card-lux p-12 text-center">
          <span className="eyebrow">Rencontrons-nous</span>
          <h2 className="mt-4 font-display text-4xl">
            Un projet, une pierre en tête ?
          </h2>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold btn-gold-hover">Nous contacter</Link>
            <Link to="/collection" className="btn-outline-gold">Voir la collection</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
