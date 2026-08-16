import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import collectionDiamonds from "@/assets/collection-diamonds.jpg";
import solitaireEtoile from "@/assets/solitaire-etoile.png";
import emeraudeRoyale from "@/assets/emeraude-royale.png";
import {
  buildPageSeo,
  breadcrumbJsonLd,
  collectionItemListJsonLd,
} from "@/lib/seo";

const stones = [
  { name: "Solitaire Étoile", ref: "WC-1042", carat: "1.52", color: "D", clarity: "VVS1", cut: "Excellent", shape: "Rond", image: solitaireEtoile },
  { name: "Round Brilliant", ref: "WC-1088", carat: "2.14", color: "E", clarity: "VS1", cut: "Excellent", shape: "Rond", image: collectionDiamonds },
  { name: "Émeraude Royale", ref: "WC-1120", carat: "3.05", color: "F", clarity: "VVS2", cut: "Very Good", shape: "Émeraude", image: emeraudeRoyale },
];

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
        collectionItemListJsonLd(
          stones.map(({ name, ref, carat, color, clarity, cut, shape }) => ({
            name,
            ref,
            carat,
            color,
            clarity,
            cut,
            shape,
          })),
        ),
      ],
    }),
  component: CollectionPage,
});

const categories = ["Nouveautés", "Best-sellers", "Ronds", "Fantaisies", "+3 carats"];

function CollectionPage() {
  return (
    <SiteLayout>
      <section className="container-lux pt-14 sm:pt-20 lg:pt-28 pb-10">
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


        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((c, i) => (
            <button
              key={c}
              className={
                "px-4 py-2 text-[11px] tracking-[0.22em] uppercase border transition-colors " +
                (i === 0
                  ? "border-gold text-gold"
                  : "border-border text-muted-foreground hover:border-gold hover:text-gold")
              }
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-lux pb-16 sm:pb-24 reveal">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stones.map((s) => (
            <article key={s.ref} className="group card-lux overflow-hidden">
              <div className="img-dynamic aspect-[4/5] bg-secondary/40">
                <img
                  src={s.image}
                  alt={`Diamant ${s.name} — ${s.carat} ct, couleur ${s.color}, clarté ${s.clarity}, ${s.shape} certifié WAL & Co`}
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between">
                  <h2 className="font-display text-2xl">{s.name}</h2>
                  <span className="text-[10px] tracking-[0.22em] uppercase text-gold">{s.ref}</span>
                </div>
                <dl className="mt-5 grid grid-cols-4 gap-3 text-xs border-t border-border pt-5">
                  {[
                    ["Carat", s.carat],
                    ["Couleur", s.color],
                    ["Clarté", s.clarity],
                    ["Taille", s.cut],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{k}</dt>
                      <dd className="mt-1">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                  Forme · {s.shape}
                </div>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex btn-outline-gold text-[10px] py-2.5 px-4 w-full"
                >
                  En savoir plus
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
