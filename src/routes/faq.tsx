import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — WAL & Co" },
      {
        name: "description",
        content:
          "Réponses aux questions fréquentes sur les diamants WAL & Co : certification, livraison, retour, garantie, paiement.",
      },
      { property: "og:title", content: "FAQ — WAL & Co" },
      { property: "og:description", content: "Certification, livraison, garantie et paiement." },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    q: "Vos diamants sont-ils certifiés ?",
    a: "Oui. Chaque pierre est accompagnée d'un certificat gemmologique délivré par un laboratoire reconnu (GIA, IGI ou équivalent) attestant carat, couleur, clarté et taille.",
  },
  {
    q: "Comment garantissez-vous la provenance ?",
    a: "Nous travaillons uniquement avec des fournisseurs vérifiés et privilégions les circuits transparents. La provenance est documentée pour chaque diamant.",
  },
  {
    q: "Quels sont les délais de livraison ?",
    a: "Les diamants disponibles en stock sont expédiés sous 3 à 5 jours ouvrés via transporteur sécurisé assuré. Pour une recherche sur mesure, comptez 1 à 3 semaines.",
  },
  {
    q: "Quelle est votre politique de retour ?",
    a: "Vous disposez de 7 jours après réception pour un retour, à condition que la pierre soit dans son état d'origine avec son certificat et son écrin.",
  },
  {
    q: "Quels moyens de paiement acceptez-vous ?",
    a: "Nous acceptons le virement bancaire sécurisé et le paiement via service d'entiercement (escrow) pour les transactions importantes.",
  },
  {
    q: "Puis-je demander une pierre sur mesure ?",
    a: "Bien sûr. Précisez-nous carat, couleur, clarté, taille et budget — nos experts vous répondent sous 24 h avec des propositions correspondantes.",
  },
  {
    q: "Livrez-vous à l'international ?",
    a: "Oui. Nous expédions dans le monde entier via transporteurs spécialisés et assurés. Les frais et délais sont précisés pour chaque destination.",
  },
];

function FaqPage() {
  return (
    <SiteLayout>
      <section className="container-lux pt-20 lg:pt-28 pb-24 max-w-3xl">
        <span className="eyebrow">Questions fréquentes</span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">
          Vos questions, <span className="italic text-gold-gradient">nos réponses.</span>
        </h1>
        <p className="mt-6 text-muted-foreground">
          Tout ce qu'il faut savoir avant votre acquisition chez WAL &amp; Co.
        </p>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={"item-" + i}
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
      </section>
    </SiteLayout>
  );
}
