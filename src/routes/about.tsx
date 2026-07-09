import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import aboutCraft from "@/assets/about-craft.jpg";
import { Diamond, Scissors, ClipboardCheck, Users, Store, MapPin, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — WAL & Co" },
      {
        name: "description",
        content:
          "WAL & Co est une entreprise canadienne spécialisée dans les diamants naturels de haute qualité. Découvrez notre histoire et nos services.",
      },
      { property: "og:title", content: "À propos — WAL & Co" },
      { property: "og:description", content: "Notre maison, notre histoire, notre engagement pour l'excellence du diamant naturel." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="container-lux pt-14 sm:pt-20 lg:pt-28 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="eyebrow">Notre maison</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            WAL &amp; Co : <span className="italic text-gold-gradient">l'excellence du diamant naturel.</span>
          </h1>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            WAL &amp; Co est une entreprise canadienne spécialisée dans l'approvisionnement,
            la sélection, la taille et la commercialisation de diamants naturels de haute qualité.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={16} className="text-gold" />
            <span>Canada</span>
            <span className="mx-1 text-border">·</span>
            <Globe size={16} className="text-gold" />
            <span>Racines en République démocratique du Congo</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-br from-gold/10 via-transparent to-deep-blue/30 blur-3xl float-slow pointer-events-none" />
          <div className="img-dynamic relative aspect-[4/5] border border-border">
            <img
              src={aboutCraft}
              alt="Expert examinant un diamant"
              loading="lazy"
            />
            <span className="img-sparkle" style={{ top: "18%", left: "62%" }} />
            <span className="img-sparkle" style={{ top: "55%", left: "30%", animationDelay: "1.5s" }} />
          </div>
        </div>
      </section>

      {/* HISTOIRE */}
      <section className="container-lux py-16 sm:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow">Notre histoire</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
            Des racines africaines, <span className="italic text-gold-gradient">une expertise canadienne.</span>
          </h2>
        </div>
        <div className="mt-14 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              L'histoire de WAL &amp; Co trouve ses racines dans un lien familial profond avec les
              régions diamantifères de la République démocratique du Congo. Cette proximité
              historique avec le terrain nous a permis de développer, au fil du temps, des
              relations directes et de confiance avec des partenaires locaux, ainsi qu'une
              compréhension fine du parcours des diamants naturels.
            </p>
            <p>
              Aujourd'hui, WAL &amp; Co combine cet héritage avec une expertise basée au Canada,
              où les pierres sont soigneusement triées, taillées et préparées selon des
              standards exigeants de qualité et de finition.
            </p>
            <p>
              Nous nous engageons à offrir une approche transparente et responsable, en veillant
              à ce que chaque diamant soit sélectionné avec rigueur et accompagné des
              informations nécessaires sur son origine et sa qualité.
            </p>
          </div>
          <div className="card-lux p-6 sm:p-8 md:p-10">
            <h3 className="font-display text-2xl">Notre engagement</h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Chez WAL &amp; Co, chaque diamant est plus qu'une pierre : c'est le résultat d'un
              savoir-faire, d'une histoire et d'une exigence de qualité.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="font-display text-2xl sm:text-3xl text-gold">RDC</div>
                <div className="mt-1 text-[10px] tracking-[0.22em] uppercase text-muted-foreground">Origine</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl sm:text-3xl text-gold">CA</div>
                <div className="mt-1 text-[10px] tracking-[0.22em] uppercase text-muted-foreground">Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-lux pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow">Nos services</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
            De la mine à la <span className="italic text-gold-gradient">finition d'exception.</span>
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {[
            { icon: Diamond, title: "Approvisionnement", text: "Diamants bruts naturels issus de circuits transparents et de confiance, directement des régions diamantifères." },
            { icon: Scissors, title: "Taille et optimisation", text: "Taille et optimisation de pierres précieuses réalisées par des artisans experts selon les standards internationaux." },
            { icon: ClipboardCheck, title: "Certification", text: "Préparation et certification pour le marché international, avec traçabilité complète de l'origine." },
            { icon: Users, title: "Vente B2C et B2B", text: "Vente aux particuliers et aux professionnels, avec un accompagnement personnalisé à chaque étape." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="card-lux p-6 sm:p-8">
              <Icon size={26} className="text-gold" />
              <h3 className="mt-6 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-lux pb-16 sm:pb-24">
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
