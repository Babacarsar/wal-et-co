## Objectif

Remplacer la couleur "or" (gold) actuelle du site par le bleu saphir `#0F52BA` sur l'ensemble du design system.

Je pars du principe que `#OF52BA` est une coquille pour `#0F52BA` (bleu saphir classique). Dis-moi si ce n'est pas le cas.

## Changements

Fichier unique : `src/styles.css`

Redéfinir les tokens liés à l'or pour qu'ils utilisent `#0F52BA` (et deux variantes dérivées pour garder la profondeur visuelle des dégradés et hovers) :

- `--primary` → `#0F52BA`
- `--ring` → `#0F52BA`
- `--gold` → `#0F52BA` (on garde le nom du token pour ne pas casser les classes `text-gold`, `bg-gold`, etc.)
- `--gold-soft` → version plus claire de `#0F52BA` (pour les dégradés)
- Dégradés dans `text-gold-gradient`, `btn-gold`, `halo-gold` : reconstruits autour de `#0F52BA` avec une teinte plus claire et une plus foncée pour conserver l'effet shimmer/relief.
- `btn-outline-gold` hover : teinte bleue translucide au lieu de la teinte or.

Le nom "gold" reste dans le code (tokens + utilitaires) pour éviter de toucher tous les composants. Seules les valeurs de couleur changent.

## Hors périmètre

- Aucun changement de structure, de composants, ou de contenu.
- Aucun changement du fond, du texte principal, ou de l'accent saphir existant (`--accent`).
- Le bouton WhatsApp garde son vert `#25D366`.

Confirme (ou corrige le code hex) et je l'applique.