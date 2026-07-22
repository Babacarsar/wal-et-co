import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { SiteLayout } from "@/components/site-layout";
import { listMedia, type MediaItem } from "@/lib/media.functions";

const galleryQuery = queryOptions({
  queryKey: ["gallery"],
  queryFn: () => listMedia(),
});

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — WAL & Co | Photos & vidéos de diamants" },
      {
        name: "description",
        content:
          "Galerie WAL & Co : photos et vidéos haute définition de nos diamants naturels certifiés et pièces d'exception.",
      },
      { property: "og:title", content: "Galerie — WAL & Co" },
      { property: "og:description", content: "Photos et vidéos de nos diamants d'exception." },
      { property: "og:url", content: "https://walandco.ca/galerie" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://walandco.ca/galerie" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(galleryQuery),
  component: GaleriePage,
  errorComponent: () => (
    <SiteLayout>
      <section className="container-lux py-20">
        <p className="text-muted-foreground">Impossible de charger la galerie.</p>
      </section>
    </SiteLayout>
  ),
});

function GaleriePage() {
  return (
    <SiteLayout>
      <section className="container-lux pt-14 sm:pt-20 lg:pt-28 pb-10">
        <span className="eyebrow">Galerie</span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">
          Nos <span className="italic text-gold-gradient">créations en images.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Découvrez photos et vidéos de nos pièces d'exception.
        </p>
      </section>
      <section className="container-lux pb-24">
        <Suspense fallback={<p className="text-muted-foreground">Chargement…</p>}>
          <GalleryGrid />
        </Suspense>
      </section>
    </SiteLayout>
  );
}

function GalleryGrid() {
  const { data } = useSuspenseQuery(galleryQuery);
  if (data.length === 0) {
    return (
      <p className="text-muted-foreground italic">
        La galerie est vide pour le moment. Revenez bientôt.
      </p>
    );
  }
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((m) => (
        <MediaCard key={m.id} item={m} />
      ))}
    </div>
  );
}

function MediaCard({ item }: { item: MediaItem }) {
  return (
    <article className="card-lux overflow-hidden">
      <div className="aspect-[4/5] bg-secondary/40 flex items-center justify-center">
        {item.kind === "video" ? (
          <video
            src={item.url}
            controls
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={item.url}
            alt={item.title ?? "Photo"}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      {item.title && (
        <div className="p-5">
          <h2 className="font-display text-xl">{item.title}</h2>
        </div>
      )}
    </article>
  );
}
