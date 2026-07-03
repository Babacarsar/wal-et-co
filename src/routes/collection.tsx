import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import collectionDiamonds from "@/assets/collection-diamonds.jpg";
import heroDiamond from "@/assets/hero-diamond.jpg";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Collection — WAL & Co" },
      {
        name: "description",
        content:
          "Découvrez la collection WAL & Co : diamants taillés certifiés, fiches techniques détaillées, carat, couleur, clarté et taille.",
      },
      { property: "og:title", content: "Collection — WAL & Co" },
      { property: "og:description", content: "Diamants taillés certifiés, sélection maison." },
      { property: "og:image", content: "/og/collection.jpg" },
    ],
  }),
  component: CollectionPage,
});

const stones = [
  { name: "Solitaire Étoile", ref: "WC-1042", carat: "1.52", color: "D", clarity: "VVS1", cut: "Excellent", shape: "Rond" },
  { name: "Round Brilliant", ref: "WC-1088", carat: "2.14", color: "E", clarity: "VS1", cut: "Excellent", shape: "Rond" },
  { name: "Émeraude Royale", ref: "WC-1120", carat: "3.05", color: "F", clarity: "VVS2", cut: "Very Good", shape: "Émeraude" },
  { name: "Ovale Impérial", ref: "WC-1155", carat: "1.87", color: "D", clarity: "IF", cut: "Excellent", shape: "Ovale" },
  { name: "Princesse Nuit", ref: "WC-1201", carat: "2.30", color: "E", clarity: "VVS1", cut: "Excellent", shape: "Princesse" },
  { name: "Poire Céleste", ref: "WC-1244", carat: "1.65", color: "F", clarity: "VS2", cut: "Very Good", shape: "Poire" },
];

const categories = ["Nouveautés", "Best-sellers", "Ronds", "Fantaisies", "+3 carats"];

function CollectionPage() {
  return (
    <SiteLayout>
      <section className="container-lux pt-20 lg:pt-28 pb-10">
        <span className="eyebrow">Collection</span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">
          Chaque pierre, <span className="italic text-gold-gradient">une signature.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Notre collection réunit des diamants sélectionnés pour leur éclat, leur
          pureté et leur provenance. Toutes les pierres sont accompagnées de leur
          certificat gemmologique.
        </p>

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

      <section className="container-lux pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stones.map((s, i) => (
            <article key={s.ref} className="group card-lux overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden bg-secondary/40">
                <img
                  src={i % 2 === 0 ? collectionDiamonds : heroDiamond}
                  alt={s.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                  Demander le prix
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
