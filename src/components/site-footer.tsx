import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-background/60">
      <div className="container-lux py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" aria-label="WAL & Co" className="inline-block">
            <img src="/wal-logo.png" alt="WAL & Co" className="h-24 md:h-28 w-auto object-contain" />
          </Link>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Maison spécialisée dans les diamants taillés certifiés. Chaque pierre est
            sélectionnée pour son éclat, sa pureté et sa provenance responsable.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="Instagram" className="p-2 border border-border hover:border-gold hover:text-gold transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 border border-border hover:border-gold hover:text-gold transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="#" aria-label="WhatsApp" className="p-2 border border-border hover:border-gold hover:text-gold transition-colors">
              <MessageCircle size={16} />
            </a>
            <a href="mailto:contact@walandco.com" aria-label="Email" className="p-2 border border-border hover:border-gold hover:text-gold transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="eyebrow">Navigation</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-gold">Accueil</Link></li>
            <li><Link to="/collection" className="hover:text-gold">Collection</Link></li>
            <li><Link to="/galerie" className="hover:text-gold">Galerie</Link></li>
            <li><Link to="/about" className="hover:text-gold">À propos</Link></li>
            <li><Link to="/faq" className="hover:text-gold">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow">Coordonnées</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>Montréal, Québec — Canada</li>
            <li><a href="tel:+00000000000" className="hover:text-gold">+0 (000) 000-0000</a></li>
            <li>contact@walandco.com</li>

          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-lux py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
          <span>© {new Date().getFullYear()} WAL &amp; Co — Tous droits réservés</span>
          <span>Diamants certifiés · GIA · IGI</span>
        </div>
      </div>
    </footer>
  );
}
