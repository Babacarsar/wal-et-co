import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/collection", label: "Collection" },
  { to: "/about", label: "À Propos" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-lux flex h-16 md:h-20 items-center justify-between gap-4">
        <Link to="/" className="group flex items-baseline gap-2 min-w-0 shrink-0">
          <span className="font-display text-xl md:text-2xl tracking-[0.2em] text-gold-gradient">
            WAL
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.35em] text-muted-foreground group-hover:text-gold transition-colors">
            &amp; CO
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[11px] font-medium tracking-[0.22em] uppercase text-muted-foreground hover:text-gold transition-colors whitespace-nowrap"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="hidden lg:inline-flex btn-outline-gold text-[10px] py-2.5 px-5">
          Demander un devis
        </Link>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95">
          <nav className="container-lux flex flex-col py-6 gap-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.22em] uppercase text-muted-foreground hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
