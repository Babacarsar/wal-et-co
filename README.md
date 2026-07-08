# WAL & Co — Site web vitrine

Site web officiel de **WAL & Co**, maison canadienne spécialisée dans les diamants naturels de haute qualité.

- **Présentation** : [wal-co.ca](https://wal-co.ca)
- **Technologies** : React 19 + TanStack Start + Tailwind CSS v4
- **Statut** : En cours de développement

## À propos

WAL & Co est une entreprise canadienne avec des racines dans les régions diamantifères de la République démocratique du Congo. Le site présente :

- La collection de diamants certifiés (GIA, IGI)
- Le guide d'achat des 4C (Carat, Couleur, Clarté, Taille)
- Les services B2C et B2B
- La FAQ et le formulaire de contact

## Stack technique

| Outil | Rôle |
|-------|------|
| [TanStack Start](https://tanstack.com/start) | Framework fullstack React (SSR, routing, server functions) |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling utilitaire avec thème luxe personnalisé |
| [Radix UI](https://www.radix-ui.com) | Primitives accessibles (accordéons, dialogs, etc.) |
| [Lucide React](https://lucide.dev) | Icônes |
| [Zod](https://zod.dev) | Validation des données |

## Pages

- `/` — Accueil (hero, collection, processus, guide 4C, témoignages)
- `/collection` — Catalogue de diamants avec fiches techniques
- `/about` — Histoire, origines et services
- `/faq` — Questions fréquentes par catégorie
- `/contact` — Formulaire de demande sur mesure

## Développement local

```bash
# Installation des dépendances
bun install

# Démarrage du serveur de développement
bun dev
```

Le site est servi par défaut sur `http://localhost:8080`.

## Licence

Propriété de WAL & Co. Tous droits réservés.
