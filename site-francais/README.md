# Site de français de la classe

Le site réunit les **cours**, les **méthodes** et les **exposés** de français de la classe.
C'est un site statique : pas d'installation, pas de serveur, pas de base de données.

## Voir le site

Ouvre `index.html` dans un navigateur (double-clic sur le fichier).

## Ajouter un cours, une méthode ou un exposé

Tout le contenu est dans **`assets/contenu.js`**.

1. Ouvre `assets/contenu.js`.
2. Copie un bloc existant, de `{` jusqu'à `},` (par exemple le bloc `modele-expose`).
3. Colle-le juste avant le `];` final.
4. Modifie les champs :

| Champ       | Obligatoire | Exemple |
|-------------|-------------|---------|
| `id`        | oui | `"expose-victor-hugo"` (unique, sans espace ni accent) |
| `categorie` | oui | `"cours"`, `"methodes"` ou `"exposes"` |
| `titre`     | oui | `"Victor Hugo, une vie d'engagement"` |
| `resume`    | oui | Une phrase qui présente la fiche |
| `motsCles`  | non | `["Hugo", "romantisme", "exil"]` |
| `auteur`    | non | `"Léa et Tom"` |
| `date`      | non | `"Novembre 2026"` |
| `fichier`   | non | `"fichiers/expose-hugo.pdf"` (le diaporama ou le PDF) |
| `contenu`   | oui | Le texte, en HTML, entre accents graves `` ` `` |

Dans `contenu`, tu peux utiliser :

- `<h2>Titre de partie</h2>`, `<h3>Sous-partie</h3>`
- `<p>Paragraphe</p>`, `<strong>gras</strong>`, `<em>italique</em>`
- `<ul><li>liste</li></ul>` ou `<ol><li>liste numérotée</li></ol>`
- `<blockquote>Citation</blockquote>`
- `<p class="astuce">Conseil mis en avant</p>`
- des tableaux `<table><tr><th>…</th></tr><tr><td>…</td></tr></table>`

Pour joindre un support (PDF, diaporama), place-le dans le dossier `fichiers/` et indique son chemin dans le champ `fichier`.

> Attention : ne mets pas d'accent grave `` ` `` à l'intérieur du texte, et garde la virgule après chaque bloc `},`.

## Mettre le site en ligne (GitHub Pages)

1. Sur GitHub, va dans **Settings → Pages** du dépôt.
2. Dans **Source**, choisis **Deploy from a branch**, puis la branche du site et le dossier `/ (root)`.
3. Le site sera accessible à l'adresse `https://<utilisateur>.github.io/<dépôt>/site-francais/`.
