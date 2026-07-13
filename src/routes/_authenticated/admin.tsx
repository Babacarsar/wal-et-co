import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { SiteLayout } from "@/components/site-layout";
import { supabase } from "@/integrations/supabase/client";
import {
  listMedia,
  isCurrentUserAdmin,
  addMediaItem,
  deleteMediaItem,
  type MediaItem,
} from "@/lib/media.functions";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin — WAL & Co" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUserEmail(data.user?.email ?? ""));
  }, []);

  const adminQ = useQuery({ queryKey: ["is-admin"], queryFn: () => isCurrentUserAdmin() });
  const mediaQ = useQuery({ queryKey: ["gallery"], queryFn: () => listMedia() });

  const addMut = useMutation({
    mutationFn: async (payload: { kind: "photo" | "video"; storage_path: string; title: string | null }) =>
      addMediaItem({ data: payload }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["gallery"] }),
  });

  const delMut = useMutation({
    mutationFn: async (id: string) => deleteMediaItem({ data: { id } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["gallery"] }),
  });

  async function handleSignOut() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  if (adminQ.isLoading) {
    return (
      <SiteLayout>
        <section className="container-lux py-20 text-muted-foreground">Chargement…</section>
      </SiteLayout>
    );
  }

  if (!adminQ.data) {
    return (
      <SiteLayout>
        <section className="container-lux py-20 max-w-xl">
          <span className="eyebrow">Accès refusé</span>
          <h1 className="mt-4 font-display text-3xl">Compte non-administrateur</h1>
          <p className="mt-4 text-muted-foreground">
            Votre compte <span className="text-foreground">{userEmail}</span> n'a pas le rôle
            administrateur. Contactez le propriétaire du site pour qu'il vous accorde l'accès.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">Votre user id :</p>
          <UserIdPill />
          <button onClick={handleSignOut} className="mt-8 btn-outline-gold text-[10px] py-2.5 px-5">
            Se déconnecter
          </button>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="container-lux py-16 max-w-5xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="eyebrow">Administration</span>
            <h1 className="mt-4 font-display text-4xl">Gérer la galerie</h1>
            <p className="mt-2 text-sm text-muted-foreground">{userEmail}</p>
          </div>
          <div className="flex gap-3">
            <Link to="/galerie" className="btn-outline-gold text-[10px] py-2.5 px-4">
              Voir la galerie
            </Link>
            <button onClick={handleSignOut} className="btn-outline-gold text-[10px] py-2.5 px-4">
              Déconnexion
            </button>
          </div>
        </div>

        <UploadForm onAdd={(p) => addMut.mutateAsync(p)} pending={addMut.isPending} />

        <div className="mt-14">
          <h2 className="font-display text-2xl">Éléments publiés</h2>
          {mediaQ.data && mediaQ.data.length === 0 && (
            <p className="mt-4 text-muted-foreground italic">Aucun média pour l'instant.</p>
          )}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(mediaQ.data ?? []).map((m) => (
              <AdminMediaCard
                key={m.id}
                item={m}
                onDelete={() => {
                  if (confirm("Supprimer cet élément ?")) delMut.mutate(m.id);
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function UserIdPill() {
  const [id, setId] = useState<string>("");
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setId(data.user?.id ?? ""));
  }, []);
  return <code className="mt-2 inline-block text-xs bg-secondary/40 px-3 py-2 rounded">{id}</code>;
}

function UploadForm({
  onAdd,
  pending,
}: {
  onAdd: (p: { kind: "photo" | "video"; storage_path: string; title: string | null }) => Promise<unknown>;
  pending: boolean;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [progress, setProgress] = useState<string | null>(null);

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;
    setProgress("Téléversement…");
    try {
      const ext = file.name.split(".").pop() ?? "bin";
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error: upErr } = await supabase.storage
        .from("gallery")
        .upload(path, file, { contentType: file.type, upsert: false });
      if (upErr) throw upErr;
      const kind: "photo" | "video" = file.type.startsWith("video") ? "video" : "photo";
      await onAdd({ kind, storage_path: path, title: title.trim() || null });
      setFile(null);
      setTitle("");
      setProgress("Ajouté ✓");
      setTimeout(() => setProgress(null), 2000);
    } catch (err) {
      setProgress(err instanceof Error ? err.message : "Erreur");
    }
  }

  return (
    <form onSubmit={handleUpload} className="mt-10 card-lux p-6 space-y-4">
      <h2 className="font-display text-2xl">Ajouter photo ou vidéo</h2>
      <div>
        <label className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
          Fichier (image ou vidéo)
        </label>
        <input
          type="file"
          accept="image/*,video/*"
          required
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="mt-2 block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:border file:border-gold file:bg-transparent file:text-gold file:text-[10px] file:tracking-[0.22em] file:uppercase hover:file:bg-gold/10"
        />
      </div>
      <div>
        <label className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
          Titre (optionnel)
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={200}
          className="mt-2 w-full bg-transparent border border-border px-4 py-3 focus:border-gold outline-none"
        />
      </div>
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={!file || pending}
          className="btn-outline-gold text-[10px] py-2.5 px-5 disabled:opacity-50"
        >
          {pending ? "..." : "Publier"}
        </button>
        {progress && <span className="text-sm text-muted-foreground">{progress}</span>}
      </div>
    </form>
  );
}

function AdminMediaCard({ item, onDelete }: { item: MediaItem; onDelete: () => void }) {
  return (
    <article className="card-lux overflow-hidden">
      <div className="aspect-[4/5] bg-secondary/40">
        {item.kind === "video" ? (
          <video src={item.url} controls playsInline className="w-full h-full object-cover" />
        ) : (
          <img src={item.url} alt={item.title ?? "Photo"} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="p-4 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[10px] tracking-[0.22em] uppercase text-gold">{item.kind}</p>
          <p className="truncate text-sm">{item.title || "Sans titre"}</p>
        </div>
        <button
          onClick={onDelete}
          className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-red-400"
        >
          Suppr.
        </button>
      </div>
    </article>
  );
}
