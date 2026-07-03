import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — WAL & Co" },
      {
        name: "description",
        content:
          "Contactez WAL & Co pour une demande d'information, un devis ou une recherche de diamant sur mesure. Réponse sous 24h.",
      },
      { property: "og:title", content: "Contact — WAL & Co" },
      { property: "og:description", content: "Une demande, un devis, une pierre sur mesure." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="container-lux pt-20 lg:pt-28 pb-24 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-4 font-display text-5xl">
            Parlons de votre <span className="italic text-gold-gradient">pierre.</span>
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Une demande d'information, un devis, une recherche sur mesure —
            écrivez-nous, nous répondons sous 24 heures.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: Mail, label: "Email", value: "contact@walandco.com", href: "mailto:contact@walandco.com" },
              { icon: Phone, label: "Téléphone", value: "+1 (000) 000-0000", href: "tel:+10000000000" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat direct", href: "https://wa.me/" },
              { icon: MapPin, label: "Adresse", value: "Montréal, Québec — Canada" },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="p-3 border border-border text-gold">
                  <Icon size={16} />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{label}</div>
                  {href ? (
                    <a href={href} className="mt-1 block text-foreground hover:text-gold">{value}</a>
                  ) : (
                    <div className="mt-1 text-foreground">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="lg:col-span-3 card-lux p-8 lg:p-10 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Nom complet" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Téléphone" name="phone" />
            <Field label="Société (optionnel)" name="company" />
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            <Field label="Carat" name="carat" placeholder="1.5+" />
            <Field label="Couleur" name="color" placeholder="D–F" />
            <Field label="Clarté" name="clarity" placeholder="VVS" />
            <Field label="Taille" name="cut" placeholder="Rond" />
          </div>
          <div>
            <label className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
              Votre demande
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-2 w-full bg-background/60 border border-border p-4 text-sm outline-none focus:border-gold transition-colors"
              placeholder="Décrivez la pierre recherchée, votre budget, votre échéance…"
            />
          </div>
          <button type="submit" className="btn-gold btn-gold-hover w-full md:w-auto">
            Envoyer la demande
          </button>
          {sent && (
            <p className="text-sm text-gold">
              Merci — votre demande a bien été transmise. Nous vous répondons sous 24 h.
            </p>
          )}
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-background/60 border border-border p-3 text-sm outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
