import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ShieldCheck,
  Gem,
  Truck,
  CreditCard,
  Sparkles,
  HelpCircle,
} from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — WAL & Co · Diamants certifiés" },
      {
        name: "description",
        content:
          "Toutes les réponses sur nos diamants : certification GIA/IGI, provenance RDC, taille, livraison sécurisée, paiement, retour, sur-mesure et B2B.",
      },
      { property: "og:title", content: "FAQ — WAL & Co" },
      {
        property: "og:description",
        content:
          "Certification, provenance, livraison, paiement, sur-mesure et B2B — nos réponses.",
      },
    ],
  }),
  component: FaqPage,
});

type Category = {
  id: string;
  title: string;
  icon: typeof Gem;
  intro: string;
  items: { q: string; a: string }[];
};

const categories: Category[] = [
  {
    id: "certification",
    title: "Certification & qualité",
    icon: ShieldCheck,
    intro:
      "Chaque pierre est indépendamment évaluée pour vous garantir une lecture objective de sa qualité.",
    items: [
      {
        q: "Vos diamants sont-ils certifiés ?",
        a: "Oui. Chaque pierre est accompagnée d'un certificat gemmologique délivré par un laboratoire reconnu (GIA, IGI, HRD ou équivalent) attestant carat, couleur, clarté, taille, symétrie, polissage et fluorescence.",
      },
      {
        q: "Que signifient les 4C ?",
        a: "Les 4C définissent la qualité d'un diamant : Carat (poids), Color (couleur, de D incolore à Z jaunâtre), Clarity (pureté, de FL à I3) et Cut (qualité de la taille, d'Excellent à Poor). Chez WAL & Co, nous privilégions D–H en couleur et FL–VS2 en pureté.",
      },
      {
        q: "Vos diamants sont-ils naturels ou synthétiques ?",
        a: "Nous ne commercialisons que des diamants naturels, extraits de gisements identifiés. Nous ne vendons pas de diamants de laboratoire.",
      },
      {
        q: "Puis-je faire réévaluer une pierre après achat ?",
        a: "Oui. Nous encourageons cette démarche. Vous pouvez confier votre diamant à n'importe quel laboratoire indépendant reconnu pour une contre-expertise.",
      },
    ],
  },
  {
    id: "provenance",
    title: "Provenance & éthique",
    icon: Gem,
    intro:
      "Nos racines familiales en République démocratique du Congo nous donnent un accès direct et transparent à la source.",
    items: [
      {
        q: "D'où proviennent vos diamants ?",
        a: "La majorité de nos diamants bruts provient de la République démocratique du Congo, où WAL & Co dispose d'un ancrage familial historique. Nous complétons notre offre par des sources partenaires en Afrique et en Belgique.",
      },
      {
        q: "Comment garantissez-vous une chaîne responsable ?",
        a: "Nous travaillons uniquement avec des fournisseurs vérifiés, respectons le Processus de Kimberley et privilégions les circuits courts et documentés. Chaque lot est tracé, du brut à la pierre taillée.",
      },
      {
        q: "Réalisez-vous vous-mêmes la taille ?",
        a: "Oui. Nous supervisons la taille et l'optimisation de nos pierres afin de préserver le poids maximal tout en visant l'éclat le plus vif. Certaines pièces sont confiées à des tailleurs partenaires en Belgique et en Israël.",
      },
    ],
  },
  {
    id: "commande",
    title: "Commande & sur-mesure",
    icon: Sparkles,
    intro:
      "Que vous cherchiez une pierre en stock ou une sélection spécifique, nos experts vous accompagnent.",
    items: [
      {
        q: "Puis-je demander une pierre sur mesure ?",
        a: "Bien sûr. Précisez-nous carat, couleur, clarté, taille et budget — nos experts vous répondent sous 24 h avec plusieurs propositions et leurs certificats.",
      },
      {
        q: "Proposez-vous un service B2B ?",
        a: "Oui. Nous accompagnons joailliers, grossistes et bureaux d'achat avec des conditions dédiées, un accès à notre stock élargi et un service de recherche sur mesure.",
      },
      {
        q: "Puis-je voir la pierre avant achat ?",
        a: "Oui. Sur demande, nous vous transmettons vidéos HD, photos macro et rapport de laboratoire. Un rendez-vous physique est possible au Canada ou lors de nos déplacements en Europe.",
      },
    ],
  },
  {
    id: "livraison",
    title: "Livraison & sécurité",
    icon: Truck,
    intro:
      "Toutes les expéditions sont assurées porte-à-porte par des transporteurs spécialisés.",
    items: [
      {
        q: "Quels sont les délais de livraison ?",
        a: "Les diamants disponibles en stock sont expédiés sous 3 à 5 jours ouvrés via transporteur sécurisé assuré. Pour une recherche sur mesure, comptez 1 à 3 semaines.",
      },
      {
        q: "Livrez-vous à l'international ?",
        a: "Oui. Nous expédions dans le monde entier via Brinks, Malca-Amit ou FedEx Priority, assurés à 100 % de la valeur. Les frais et délais sont précisés à la commande.",
      },
      {
        q: "Comment se passe la remise en main propre ?",
        a: "Pour les commandes importantes, nous proposons une remise physique au Canada, à Anvers ou dans une place forte diamantaire, en présence d'un gemmologue indépendant si souhaité.",
      },
    ],
  },
  {
    id: "paiement",
    title: "Paiement, retour & garantie",
    icon: CreditCard,
    intro: "Des modalités claires, sécurisées et adaptées aux montants engagés.",
    items: [
      {
        q: "Quels moyens de paiement acceptez-vous ?",
        a: "Nous acceptons le virement bancaire sécurisé (SWIFT/SEPA) et le paiement via service d'entiercement (escrow) pour les transactions importantes. Les cartes sont acceptées jusqu'à un certain seuil.",
      },
      {
        q: "Quelle est votre politique de retour ?",
        a: "Vous disposez de 7 jours après réception pour un retour, à condition que la pierre soit dans son état d'origine, accompagnée de son certificat, de son scellé et de son écrin.",
      },
      {
        q: "Offrez-vous une garantie de rachat ?",
        a: "Oui. Sur les pierres achetées chez WAL & Co, nous proposons une option de rachat prioritaire à valeur de marché, sur présentation du certificat d'origine.",
      },
      {
        q: "Facturez-vous la TVA ou les droits de douane ?",
        a: "Les taxes dépendent du pays de livraison et du statut de l'acheteur (particulier / professionnel). Nous vous transmettons un devis détaillé toutes taxes incluses avant confirmation.",
      },
    ],
  },
];

function FaqPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="container-lux pt-20 lg:pt-28 pb-12">
        <div className="max-w-3xl">
          <span className="eyebrow">Questions fréquentes</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">
            Vos questions,{" "}
            <span className="italic text-gold-gradient">nos réponses.</span>
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Certification, provenance, livraison sécurisée, paiement, retour et
            sur-mesure — tout ce qu'il faut savoir avant votre acquisition chez
            WAL &amp; Co. Une question sans réponse ci-dessous ? Écrivez-nous,
            nous répondons sous 24 h.
          </p>
        </div>

        {/* Nav catégories */}
        <nav className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {categories.map((c) => (
            <a
              key={c.id}
              href={"#" + c.id}
              className="card-lux p-4 flex items-center gap-3 hover:border-gold/60 transition-colors"
            >
              <c.icon size={18} className="text-gold shrink-0" />
              <span className="text-sm">{c.title}</span>
            </a>
          ))}
        </nav>
      </section>

      {/* CATEGORIES */}
      <section className="container-lux pb-24 max-w-4xl">
        {categories.map((c) => (
          <div key={c.id} id={c.id} className="mt-16 scroll-mt-32">
            <div className="flex items-center gap-3">
              <c.icon size={20} className="text-gold" />
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl">{c.title}</h2>
            </div>
            <p className="mt-3 text-muted-foreground max-w-2xl">{c.intro}</p>

            <Accordion type="single" collapsible className="mt-8 space-y-3">
              {c.items.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={c.id + "-" + i}
                  className="card-lux px-6 border-0"
                >
                  <AccordionTrigger className="text-left font-display text-xl hover:no-underline hover:text-gold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="container-lux pb-24">
        <div className="card-lux p-10 lg:p-14 text-center">
          <HelpCircle size={28} className="text-gold mx-auto" />
          <h2 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl">
            Une question sans{" "}
            <span className="italic text-gold-gradient">réponse ?</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Nos gemmologues vous répondent personnellement sous 24 h, en toute
            confidentialité.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-gold btn-gold-hover">
              Nous écrire
            </Link>
            <a href="https://wa.me/" className="btn-outline-gold">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
