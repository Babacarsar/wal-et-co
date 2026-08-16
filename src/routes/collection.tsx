import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { buildPageSeo, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/collection")({
  head: () =>
    buildPageSeo({
      title: "Collection de diamants certifiés GIA/IGI — WAL & Co",
      description:
        "Collection WAL & Co : diamants naturels taillés certifiés GIA/IGI. Fiches techniques — carat, couleur, clarté, taille — et devis sur mesure.",
      path: "/collection",
      keywords:
        "collection diamants, diamants GIA, diamants IGI, diamant round brilliant, diamant émeraude, acheter diamant certifié",
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Collection", path: "/collection" },
        ]),
      ],
    }),
  component: CollectionPage,
});

function CollectionPage() {
  return (
    <SiteLayout>
      <section className="container-lux pt-14 sm:pt-20 lg:pt-28 pb-16 sm:pb-24">
        <span className="eyebrow">Nos diamants</span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">
          Nos diamants <span className="italic text-gold-gradient">naturels</span>
        </h1>
        <p className="mt-4 font-display text-2xl sm:text-3xl text-foreground/90">
          Une sélection adaptée à vos besoins
        </p>

        <div className="mt-8 max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Chez WAL &amp; Co, nous proposons une sélection de diamants naturels destinés à
            différents besoins en joaillerie et en négoce.
          </p>

          <div>
            <p>Selon les disponibilités, notre offre peut comprendre :</p>
            <ul className="mt-4 space-y-2">
              {[
                "Diamants taillés certifiés",
                "Diamants taillés non certifiés",
                "Diamants ronds",
                "Diamants de formes fantaisie",
                "Diamants de petite taille",
                "Diamants de plus de 3 carats",
                "Diamants naturels bruts, selon les lots disponibles",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold mt-1 shrink-0" aria-hidden="true">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            Notre inventaire évolue régulièrement. Certaines pierres sont disponibles en quantité
            limitée et peuvent être proposées sur demande.
          </p>

          <div>
            <h2 className="font-display text-xl sm:text-2xl text-foreground">
              Vous recherchez un diamant particulier ?
            </h2>
            <p className="mt-4">
              Que vous soyez particulier, bijoutier ou professionnel, indiquez-nous vos besoins :
              poids, forme, qualité, certification ou budget.
            </p>
            <p className="mt-4">
              Notre équipe pourra vous présenter les pierres correspondant à votre recherche et
              vous informer des disponibilités actuelles.
            </p>
          </div>

          <Link to="/contact" className="inline-flex btn-outline-gold">
            Besoin de diamants ? Contactez WAL &amp; Co.
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
