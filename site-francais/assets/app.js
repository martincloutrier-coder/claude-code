(function () {
  const CATEGORIES = {
    cours: "Cours",
    methodes: "Méthodes",
    exposes: "Exposés",
  };
  const fiches = window.CONTENU || [];

  // Ignore accents et majuscules dans la recherche ("methode" trouve "Méthode").
  const normaliser = (s) =>
    (s || "").toString().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  const echapper = (s) =>
    (s || "").toString().replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const meta = (f) => [f.auteur, f.date].filter(Boolean).map(echapper).join(" · ");

  /* ---------- Page d'accueil ---------- */
  function initAccueil() {
    const liste = document.getElementById("liste");
    const vide = document.getElementById("vide");
    const champ = document.getElementById("recherche");
    const onglets = document.querySelectorAll(".tabs button");
    let filtre = "tout";

    document.querySelectorAll("[data-count]").forEach((el) => {
      const cat = el.dataset.count;
      el.textContent = cat === "tout" ? fiches.length : fiches.filter((f) => f.categorie === cat).length;
    });

    function afficher() {
      const q = normaliser(champ.value.trim());
      const resultats = fiches.filter((f) => {
        if (filtre !== "tout" && f.categorie !== filtre) return false;
        if (!q) return true;
        const texte = normaliser([f.titre, f.resume, f.auteur, (f.motsCles || []).join(" "), f.contenu].join(" "));
        return q.split(/\s+/).every((mot) => texte.includes(mot));
      });

      liste.innerHTML = resultats
        .map(
          (f) => `
        <a class="carte" href="fiche.html?id=${encodeURIComponent(f.id)}">
          <span class="badge ${f.categorie}">${CATEGORIES[f.categorie] || ""}</span>
          <h3>${echapper(f.titre)}</h3>
          <p>${echapper(f.resume)}</p>
          ${meta(f) ? `<span class="meta">${meta(f)}</span>` : ""}
        </a>`
        )
        .join("");
      vide.hidden = resultats.length > 0;
    }

    function choisir(cat) {
      filtre = CATEGORIES[cat] ? cat : "tout";
      onglets.forEach((b) => b.setAttribute("aria-selected", String(b.dataset.filtre === filtre)));
      afficher();
    }

    onglets.forEach((b) =>
      b.addEventListener("click", () => {
        history.replaceState(null, "", b.dataset.filtre === "tout" ? location.pathname : "#" + b.dataset.filtre);
        choisir(b.dataset.filtre);
      })
    );
    window.addEventListener("hashchange", () => choisir(location.hash.slice(1)));
    champ.addEventListener("input", afficher);

    choisir(location.hash.slice(1));
  }

  /* ---------- Page d'une fiche ---------- */
  function initFiche() {
    const zone = document.getElementById("fiche");
    const voisins = document.getElementById("voisins");
    const id = new URLSearchParams(location.search).get("id");
    const f = fiches.find((x) => x.id === id);

    if (!f) {
      zone.innerHTML = `<h1>Fiche introuvable</h1><p>Cette fiche n'existe pas ou a été déplacée. <a href="index.html">Retour à l'accueil</a></p>`;
      return;
    }

    document.title = `${f.titre} — Français`;
    const cat = CATEGORIES[f.categorie] || "";
    zone.innerHTML = `
      <div class="fil"><a href="index.html">Accueil</a> › <a href="index.html#${f.categorie}">${cat}</a></div>
      <span class="badge ${f.categorie}">${cat}</span>
      <h1>${echapper(f.titre)}</h1>
      <p class="resume">${echapper(f.resume)}</p>
      ${meta(f) ? `<p class="meta">${meta(f)}</p>` : ""}
      <div class="actions">
        <button class="bouton" type="button" onclick="window.print()">Imprimer / PDF</button>
        ${f.fichier ? `<a class="bouton" href="${encodeURI(f.fichier)}" target="_blank" rel="noopener">Ouvrir le support</a>` : ""}
      </div>
      <div class="contenu">${f.contenu || ""}</div>`;

    const memes = fiches.filter((x) => x.categorie === f.categorie);
    const i = memes.indexOf(f);
    const lien = (x, cls, label) =>
      x ? `<a class="${cls}" href="fiche.html?id=${encodeURIComponent(x.id)}"><small>${label}</small>${echapper(x.titre)}</a>` : "";
    voisins.innerHTML = lien(memes[i - 1], "precedent", "← Précédent") + lien(memes[i + 1], "suivant", "Suivant →");
  }

  if (document.getElementById("liste")) initAccueil();
  if (document.getElementById("fiche")) initFiche();
})();
