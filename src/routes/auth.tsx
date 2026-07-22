import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Connexion — WAL & Co" },
      { name: "description", content: "Espace administrateur WAL & Co." },
      { name: "robots", content: "noindex, nofollow" },
      { name: "googlebot", content: "noindex, nofollow" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) navigate({ to: "/admin" });
    });
  }, [navigate]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin + "/admin" },
        });
        if (error) throw error;
        setMsg("Compte créé. Vous pouvez maintenant vous connecter.");
        setMode("signin");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: "/admin" });
      }
    } catch (err) {
      setMsg(err instanceof Error ? err.message : "Erreur");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SiteLayout>
      <section className="container-lux max-w-md py-20">
        <span className="eyebrow">Espace privé</span>
        <h1 className="mt-4 font-display text-4xl">
          {mode === "signin" ? "Connexion" : "Créer un compte"}
        </h1>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full bg-transparent border border-border px-4 py-3 focus:border-gold outline-none"
            />
          </div>
          <div>
            <label className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
              Mot de passe
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full bg-transparent border border-border px-4 py-3 focus:border-gold outline-none"
            />
          </div>
          {msg && <p className="text-sm text-muted-foreground">{msg}</p>}
          <button
            type="submit"
            disabled={loading}
            className="btn-outline-gold w-full text-[11px] py-3 disabled:opacity-50"
          >
            {loading ? "..." : mode === "signin" ? "Se connecter" : "Créer le compte"}
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          {mode === "signin" ? (
            <button className="hover:text-gold" onClick={() => setMode("signup")}>
              Pas de compte ? Créer un compte
            </button>
          ) : (
            <button className="hover:text-gold" onClick={() => setMode("signin")}>
              Déjà un compte ? Se connecter
            </button>
          )}
        </div>
        <div className="mt-4 text-center">
          <Link to="/" className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-gold">
            Retour à l'accueil
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
