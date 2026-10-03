/*
  CONTENU DU SITE
  ----------------
  Chaque fiche est un objet { ... } dans la liste ci-dessous.
  Pour en ajouter une, copie un bloc existant, colle-le à la fin
  (avant le "];") et modifie-le. Voir README.md pour le détail.

  Champs :
    id        identifiant unique, sans espace ni accent (ex. "figures-de-style")
    categorie "cours", "methodes" ou "exposes"
    titre     titre affiché
    resume    une phrase de présentation
    motsCles  (facultatif) mots pour aider la recherche
    auteur    (facultatif) nom(s), surtout pour les exposés
    date      (facultatif) ex. "Octobre 2026"
    fichier   (facultatif) lien vers un support, ex. "fichiers/mon-expose.pdf"
    contenu   le texte de la fiche, en HTML, entre les accents graves ` `
*/

window.CONTENU = [
  /* =========================== COURS =========================== */
  {
    id: "figures-de-style",
    categorie: "cours",
    titre: "Les figures de style",
    resume: "Reconnaître et nommer les principales figures, avec un exemple pour chacune.",
    motsCles: ["métaphore", "comparaison", "oxymore", "hyperbole", "anaphore", "litote", "chiasme"],
    contenu: `
      <p>Une figure de style est un procédé d'écriture qui rend le propos plus expressif. Dans un commentaire, il ne suffit pas de la <strong>nommer</strong> : il faut dire quel <strong>effet</strong> elle produit.</p>

      <h2>Figures d'analogie</h2>
      <table>
        <tr><th>Figure</th><th>Définition</th><th>Exemple</th></tr>
        <tr><td>Comparaison</td><td>Rapproche deux éléments à l'aide d'un outil de comparaison (comme, tel, pareil à…).</td><td>« La Terre est bleue comme une orange » (Éluard)</td></tr>
        <tr><td>Métaphore</td><td>Rapproche deux éléments sans outil de comparaison.</td><td>« Ma jeunesse ne fut qu'un ténébreux orage » (Baudelaire)</td></tr>
        <tr><td>Personnification</td><td>Attribue des caractéristiques humaines à une chose ou un animal.</td><td>« Le vent hurle dans la nuit. »</td></tr>
        <tr><td>Allégorie</td><td>Représente une idée abstraite par un élément concret, souvent avec une majuscule.</td><td>La Mort représentée avec une faux.</td></tr>
      </table>

      <h2>Figures d'opposition</h2>
      <table>
        <tr><th>Figure</th><th>Définition</th><th>Exemple</th></tr>
        <tr><td>Antithèse</td><td>Oppose deux termes ou deux idées dans une même phrase.</td><td>« Je vis, je meurs » (Louise Labé)</td></tr>
        <tr><td>Oxymore</td><td>Associe deux termes contradictoires dans un même groupe de mots.</td><td>« Cette obscure clarté qui tombe des étoiles » (Corneille)</td></tr>
        <tr><td>Chiasme</td><td>Construction en miroir A-B / B-A.</td><td>« Il faut manger pour vivre et non pas vivre pour manger » (Molière)</td></tr>
      </table>

      <h2>Figures d'insistance ou d'atténuation</h2>
      <table>
        <tr><th>Figure</th><th>Définition</th><th>Exemple</th></tr>
        <tr><td>Hyperbole</td><td>Exagère pour frapper l'esprit.</td><td>« Je meurs de soif. »</td></tr>
        <tr><td>Anaphore</td><td>Répète un mot ou groupe de mots en début de phrase ou de vers.</td><td>« Rome, l'unique objet de mon ressentiment ! / Rome… » (Corneille)</td></tr>
        <tr><td>Gradation</td><td>Suite de termes d'intensité croissante (ou décroissante).</td><td>« Va, cours, vole, et nous venge » (Corneille)</td></tr>
        <tr><td>Litote</td><td>Dit moins pour suggérer plus.</td><td>« Va, je ne te hais point » (Corneille) = je t'aime</td></tr>
        <tr><td>Euphémisme</td><td>Adoucit une réalité pénible.</td><td>« Il nous a quittés » = il est mort</td></tr>
      </table>

      <h2>Figures de substitution</h2>
      <table>
        <tr><th>Figure</th><th>Définition</th><th>Exemple</th></tr>
        <tr><td>Métonymie</td><td>Désigne une chose par une autre qui lui est liée (contenant/contenu, auteur/œuvre…).</td><td>« Boire un verre », « lire un Zola »</td></tr>
        <tr><td>Périphrase</td><td>Remplace un mot par une expression qui le définit.</td><td>« La Ville Lumière » = Paris</td></tr>
      </table>

      <p class="astuce">Formule utile : « L'auteur emploie [figure] (citation), ce qui permet de [effet : souligner, dramatiser, émouvoir…]. »</p>
    `,
  },
  {
    id: "versification",
    categorie: "cours",
    titre: "La versification",
    resume: "Compter les syllabes, identifier les rimes et les formes poétiques.",
    motsCles: ["poésie", "alexandrin", "rime", "sonnet", "enjambement", "diérèse", "hémistiche"],
    contenu: `
      <h2>Compter les syllabes</h2>
      <ul>
        <li>Le <strong>e muet</strong> se prononce devant une consonne : « La / ter / re ».</li>
        <li>Il ne se prononce pas devant une voyelle (élision) ni en fin de vers.</li>
        <li><strong>Diérèse</strong> : on sépare deux voyelles normalement prononcées ensemble (« pa-ssi-on »). Elle met souvent le mot en valeur.</li>
        <li><strong>Synérèse</strong> : on prononce ensemble deux voyelles en une syllabe.</li>
      </ul>

      <h2>Les principaux vers</h2>
      <table>
        <tr><th>Syllabes</th><th>Nom</th></tr>
        <tr><td>12</td><td>Alexandrin (coupé en deux <strong>hémistiches</strong> de 6 par la césure)</td></tr>
        <tr><td>10</td><td>Décasyllabe</td></tr>
        <tr><td>8</td><td>Octosyllabe</td></tr>
      </table>

      <h2>Les rimes</h2>
      <h3>Disposition</h3>
      <ul>
        <li><strong>Plates</strong> (ou suivies) : AABB</li>
        <li><strong>Croisées</strong> : ABAB</li>
        <li><strong>Embrassées</strong> : ABBA</li>
      </ul>
      <h3>Richesse</h3>
      <ul>
        <li><strong>Pauvre</strong> : un son commun (ami / joli)</li>
        <li><strong>Suffisante</strong> : deux sons communs (âme / flamme)</li>
        <li><strong>Riche</strong> : trois sons ou plus (charmant / dormant)</li>
      </ul>
      <p>Une rime est <strong>féminine</strong> si le vers se termine par un e muet, <strong>masculine</strong> sinon.</p>

      <h2>Rythme</h2>
      <ul>
        <li><strong>Enjambement</strong> : la phrase déborde sur le vers suivant.</li>
        <li><strong>Rejet</strong> : un mot court est rejeté au début du vers suivant, ce qui le met en relief.</li>
        <li><strong>Contre-rejet</strong> : un mot court en fin de vers annonce la phrase du vers suivant.</li>
      </ul>

      <h2>Le sonnet</h2>
      <p>Quatorze vers : deux <strong>quatrains</strong> puis deux <strong>tercets</strong>. Le dernier vers, la <em>chute</em>, est souvent frappant.</p>
    `,
  },
  {
    id: "mouvements-litteraires",
    categorie: "cours",
    titre: "Les grands mouvements littéraires",
    resume: "Du XVIe au XXe siècle : idées clés et auteurs à connaître.",
    motsCles: ["humanisme", "classicisme", "lumières", "romantisme", "réalisme", "naturalisme", "symbolisme", "surréalisme"],
    contenu: `
      <table>
        <tr><th>Mouvement</th><th>Époque</th><th>Idées clés</th><th>Auteurs</th></tr>
        <tr><td>Humanisme</td><td>XVIe s.</td><td>Confiance en l'homme, redécouverte de l'Antiquité, savoir et éducation.</td><td>Rabelais, Montaigne, Ronsard, Du Bellay</td></tr>
        <tr><td>Classicisme</td><td>XVIIe s.</td><td>Ordre, raison, mesure ; règle des trois unités au théâtre ; « plaire et instruire ».</td><td>Molière, Racine, Corneille, La Fontaine</td></tr>
        <tr><td>Lumières</td><td>XVIIIe s.</td><td>Combat contre l'obscurantisme et l'injustice, esprit critique, tolérance.</td><td>Voltaire, Diderot, Montesquieu, Rousseau</td></tr>
        <tr><td>Romantisme</td><td>Début XIXe s.</td><td>Expression du « moi » et des sentiments, nature, mal du siècle.</td><td>Hugo, Lamartine, Musset, Chateaubriand</td></tr>
        <tr><td>Réalisme et naturalisme</td><td>2<sup>e</sup> moitié XIXe s.</td><td>Représenter le réel sans l'embellir ; le naturalisme ajoute une approche scientifique (hérédité, milieu).</td><td>Balzac, Flaubert, Maupassant ; Zola</td></tr>
        <tr><td>Symbolisme</td><td>Fin XIXe s.</td><td>Suggérer plutôt que décrire, correspondances, musicalité du vers.</td><td>Baudelaire (précurseur), Verlaine, Rimbaud, Mallarmé</td></tr>
        <tr><td>Surréalisme</td><td>XXe s.</td><td>Libérer l'inconscient, le rêve, l'écriture automatique.</td><td>Breton, Éluard, Aragon</td></tr>
      </table>
      <p class="astuce">Situer un texte dans son mouvement est une excellente amorce d'introduction.</p>
    `,
  },
  {
    id: "registres",
    categorie: "cours",
    titre: "Les registres littéraires",
    resume: "L'effet qu'un texte cherche à produire sur le lecteur.",
    motsCles: ["tonalité", "comique", "tragique", "pathétique", "lyrique", "épique", "ironie", "satire"],
    contenu: `
      <p>Le registre (ou tonalité) désigne l'<strong>effet</strong> qu'un texte veut produire sur le lecteur. Un même texte peut en mêler plusieurs.</p>
      <table>
        <tr><th>Registre</th><th>Effet recherché</th><th>Indices</th></tr>
        <tr><td>Comique</td><td>Faire rire</td><td>Comique de mots, de gestes, de situation, de caractère</td></tr>
        <tr><td>Tragique</td><td>Terreur et pitié face à un destin inéluctable</td><td>Fatalité, mort, dilemme</td></tr>
        <tr><td>Pathétique</td><td>Émouvoir, susciter la pitié</td><td>Souffrance, exclamations, champ lexical de la douleur</td></tr>
        <tr><td>Lyrique</td><td>Exprimer des sentiments personnels</td><td>1<sup>re</sup> personne, musicalité, nature, amour, temps qui passe</td></tr>
        <tr><td>Épique</td><td>Susciter l'admiration</td><td>Héros, combats, hyperboles, pluriels, rythme ample</td></tr>
        <tr><td>Satirique</td><td>Critiquer en se moquant</td><td>Caricature, exagération, cible identifiable</td></tr>
        <tr><td>Ironique</td><td>Faire comprendre le contraire de ce qui est dit</td><td>Antiphrase, décalage, fausse naïveté</td></tr>
        <tr><td>Fantastique</td><td>Faire hésiter entre explication rationnelle et surnaturelle</td><td>Doute, peur, modalisateurs (« il me sembla »)</td></tr>
        <tr><td>Polémique</td><td>Attaquer, dénoncer</td><td>Vocabulaire péjoratif, interpellations, ton virulent</td></tr>
        <tr><td>Didactique</td><td>Enseigner, expliquer</td><td>Présent de vérité générale, exemples, connecteurs logiques</td></tr>
      </table>
    `,
  },

  /* ========================== MÉTHODES ========================== */
  {
    id: "commentaire-de-texte",
    categorie: "methodes",
    titre: "Le commentaire de texte",
    resume: "Construire une analyse organisée d'un texte, de l'introduction à la conclusion.",
    motsCles: ["commentaire", "problématique", "plan", "introduction", "conclusion", "analyse"],
    contenu: `
      <h2>1. Préparer au brouillon</h2>
      <ul>
        <li>Lis le texte plusieurs fois ; repère le genre, le thème, le registre et le contexte.</li>
        <li>Surligne les procédés (figures, champs lexicaux, temps, ponctuation…) et note leur <strong>effet</strong>.</li>
        <li>Regroupe tes remarques en 2 ou 3 grands axes qui répondent à une question : la <strong>problématique</strong>.</li>
      </ul>

      <h2>2. L'introduction</h2>
      <ol>
        <li><strong>Amorce</strong> : situe le texte (époque, mouvement, auteur).</li>
        <li><strong>Présentation</strong> : titre de l'œuvre, date, genre, thème du passage.</li>
        <li><strong>Problématique</strong> : la question à laquelle ton commentaire répond.</li>
        <li><strong>Annonce du plan</strong> : tes 2 ou 3 axes.</li>
      </ol>

      <h2>3. Le développement</h2>
      <p>Chaque partie contient 2 ou 3 sous-parties. Chaque paragraphe suit la logique :</p>
      <blockquote>Idée → citation → procédé nommé → analyse de l'effet → lien avec l'idée.</blockquote>
      <p>Ne fais jamais de paraphrase (redire le texte avec tes mots) : <strong>interprète</strong>.</p>

      <h2>4. La conclusion</h2>
      <ol>
        <li><strong>Bilan</strong> : réponds clairement à la problématique.</li>
        <li><strong>Ouverture</strong> : rapproche le texte d'une autre œuvre ou d'une autre question.</li>
      </ol>
      <p class="astuce">Garde 10 minutes à la fin pour relire l'orthographe et la syntaxe.</p>
    `,
  },
  {
    id: "dissertation",
    categorie: "methodes",
    titre: "La dissertation",
    resume: "Analyser un sujet, trouver une problématique et argumenter avec des exemples.",
    motsCles: ["dissertation", "argumentation", "plan dialectique", "problématique", "exemples"],
    contenu: `
      <h2>1. Analyser le sujet</h2>
      <ul>
        <li>Définis chaque mot important du sujet.</li>
        <li>Repère le type de question (« dans quelle mesure… », « peut-on dire que… »).</li>
        <li>Reformule le sujet sous forme de problème : c'est ta <strong>problématique</strong>.</li>
      </ul>

      <h2>2. Choisir un plan</h2>
      <table>
        <tr><th>Plan</th><th>Quand l'utiliser</th><th>Structure</th></tr>
        <tr><td>Dialectique</td><td>Le sujet invite à discuter une thèse</td><td>Oui… / Mais… / Dépassement</td></tr>
        <tr><td>Thématique</td><td>Le sujet demande d'explorer une notion</td><td>Aspect 1 / Aspect 2 / Aspect 3</td></tr>
        <tr><td>Analytique</td><td>Le sujet porte sur un phénomène</td><td>Constat / Causes / Conséquences</td></tr>
      </table>

      <h2>3. Le paragraphe argumentatif</h2>
      <blockquote>Argument → explication → exemple précis (œuvre, auteur, passage) → analyse de l'exemple → mini-conclusion.</blockquote>

      <h2>4. Introduction et conclusion</h2>
      <p>Même structure que pour le commentaire : amorce, sujet, problématique, plan ; puis bilan et ouverture.</p>
      <p class="astuce">Prépare toute l'année une liste d'exemples tirés des œuvres étudiées en classe.</p>
    `,
  },
  {
    id: "explication-lineaire",
    categorie: "methodes",
    titre: "L'explication linéaire",
    resume: "Expliquer un texte au fil de sa lecture, mouvement par mouvement.",
    motsCles: ["oral", "bac", "explication", "mouvements", "projet de lecture", "lecture"],
    contenu: `
      <p>Contrairement au commentaire, l'explication linéaire suit l'<strong>ordre du texte</strong>.</p>

      <h2>1. L'introduction</h2>
      <ol>
        <li>Situe le texte (auteur, œuvre, place du passage).</li>
        <li>Lis le texte de façon expressive.</li>
        <li>Annonce le <strong>projet de lecture</strong> (la question qui guide ton explication).</li>
        <li>Présente les <strong>mouvements</strong> du texte (ses grandes étapes).</li>
      </ol>

      <h2>2. L'explication</h2>
      <ul>
        <li>Avance mouvement par mouvement, phrase par phrase ou vers par vers.</li>
        <li>Pour chaque passage : cite, nomme le procédé, explique l'effet.</li>
        <li>Relie régulièrement tes remarques au projet de lecture.</li>
      </ul>

      <h2>3. La conclusion</h2>
      <p>Réponds au projet de lecture, puis propose une ouverture.</p>
      <p class="astuce">Entraîne-toi à voix haute en te chronométrant.</p>
    `,
  },
  {
    id: "reussir-un-expose",
    categorie: "methodes",
    titre: "Réussir un exposé oral",
    resume: "Préparer, structurer et présenter un exposé devant la classe.",
    motsCles: ["exposé", "oral", "diaporama", "présentation", "prise de parole"],
    contenu: `
      <h2>1. Préparer</h2>
      <ul>
        <li>Délimite ton sujet et formule une question directrice.</li>
        <li>Varie tes sources (manuels, CDI, sites fiables) et note-les.</li>
        <li>Répartissez clairement le travail si vous êtes en groupe.</li>
      </ul>

      <h2>2. Structurer</h2>
      <ol>
        <li>Introduction : accroche, sujet, question, plan.</li>
        <li>2 ou 3 parties claires, avec des exemples.</li>
        <li>Conclusion : réponse à la question et ouverture.</li>
      </ol>

      <h2>3. Le support</h2>
      <ul>
        <li>Peu de texte par diapositive : des mots-clés et des images.</li>
        <li>Une idée par diapositive.</li>
        <li>Cite tes sources sur la dernière diapositive.</li>
      </ul>

      <h2>4. Le jour J</h2>
      <ul>
        <li>Regarde la classe, ne lis pas tes notes.</li>
        <li>Parle lentement et articule.</li>
        <li>Prévois une ou deux questions que l'on pourrait te poser.</li>
      </ul>
      <p class="astuce">Une fois l'exposé terminé, ajoute-le sur le site (voir README.md) !</p>
    `,
  },

  /* =========================== EXPOSÉS =========================== */
  {
    id: "modele-expose",
    categorie: "exposes",
    titre: "Modèle d'exposé (à copier)",
    resume: "Exemple de fiche d'exposé à dupliquer pour ajouter le vôtre.",
    motsCles: ["modèle", "exemple", "template"],
    auteur: "Nom Prénom, Nom Prénom",
    date: "Mois Année",
    contenu: `
      <p><em>Ceci est un modèle. Copie ce bloc dans assets/contenu.js et remplace le texte par celui de ton exposé.</em></p>

      <h2>Introduction</h2>
      <p>Présente le sujet et la question à laquelle l'exposé répond.</p>

      <h2>I. Première partie</h2>
      <p>Les idées principales, avec des exemples et des citations.</p>

      <h2>II. Deuxième partie</h2>
      <p>…</p>

      <h2>Conclusion</h2>
      <p>La réponse à la question de départ et une ouverture.</p>

      <h2>Sources</h2>
      <ul>
        <li>Auteur, <em>Titre</em>, éditeur, année.</li>
        <li>Nom du site, titre de la page, adresse.</li>
      </ul>
    `,
  },
];
