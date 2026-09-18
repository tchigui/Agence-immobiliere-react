# TP1 — Agence financière immobilière

**Étudiant :** Patrick Tchigui
**Cours :** Programmation avancée
**TP :** PA-TP1 — Interface graphique React

## Lancer l'application

```bash
npm install
npm start
```

L'application démarre ensuite sur [http://localhost:3000](http://localhost:3000).

## Analyse des besoins

Pour chaque besoin, l'expression du besoin (point de vue utilisateur) est suivie de la fiche de cas d'utilisation correspondante (Cas / Acteur / Scénario).

### 1. Naviguer entre les sections

**Expression du besoin :** Le site doit permettre à l'utilisateur de naviguer entre les sections Accueil, Projets, Services, À propos et Nous joindre.

**Cas : Naviguer**
Acteur : Utilisateur
Scénario :
1. Le système affiche les liens de navigation.
2. Si l'utilisateur clique sur un lien parmi Accueil, Projets, Services, À propos, Nous joindre → le système affiche la section correspondante.

### 2. Consulter la liste des projets

**Expression du besoin :** Le site doit permettre à l'utilisateur de consulter la liste des projets immobiliers et de voir les informations essentielles de chaque projet.

**Cas : Consulter la liste des projets**
Acteur : Utilisateur
Scénario :
1. Le système affiche la liste des projets à partir du state.
2. Chaque projet est affiché sous forme de carte avec : identifiant, titre, ville/secteur, type, statut, description, information financière ou de superficie, image.

### 3. Filtrer les projets

**Expression du besoin :** Le site doit permettre à l'utilisateur de filtrer les projets selon un critère pertinent (type ou statut).

**Cas : Filtrer les projets**
Acteur : Utilisateur
Scénario :
1. Le système affiche les options de filtre disponibles.
2. Si l'utilisateur sélectionne un filtre → le système affiche uniquement les projets correspondants et indique visuellement le filtre actif.

### 4. Retirer un projet

**Expression du besoin :** Le site doit permettre à l'utilisateur de retirer un projet de la liste affichée.

**Cas : Retirer un projet**
Acteur : Utilisateur
Scénario :
1. Le système affiche un bouton « Retirer » sur chaque carte de projet.
2. Si l'utilisateur clique sur ce bouton → le système retire le projet de la liste affichée.

### 5. Afficher un message si aucun résultat

**Expression du besoin :** Le site doit indiquer clairement lorsqu'aucun projet ne correspond au filtre choisi.

**Cas : Afficher un message si aucun résultat**
Acteur : Utilisateur
Scénario :
1. L'utilisateur a sélectionné un filtre.
2. Si aucun projet ne correspond → le système affiche un message clair l'indiquant.

### Contraintes de qualité

- Clarté et cohérence visuelle : présenter l'agence et ses activités de manière claire et professionnelle.
- Responsive : rester lisible, cohérent et utilisable sur différentes tailles d'écran.
- Facilité d'utilisation : donner un retour visuel constant sur la section et le filtre actifs.

## Arbre des composants

```
App
├── NavBar             -> barre de navigation, affiche le logo
|   └── Menu           -> liens de navigation, indique la section active
├── Contenu            -> affichage conditionnel de la section active (recoit sectionActive)
|   ├── (section Accueil)     -> presentation de l'agence (deja fourni dans le code de depart)
|   ├── (section Projets)
|   |   └── Projets    -> gere le state du filtre ET de la liste des projets ;
|   |                     affiche les boutons de filtre, le message si liste vide,
|   |                     et genere les cartes avec map()
|   |       └── ProjetCard -> carte reutilisable (1 par projet), recoit les donnees
|   |                         et une fonction "retirer" par props
|   ├── (section Services)
|   ├── (section APropos)
|   └── (section NousJoindre)
└── Footer (optionnel) -> coordonnees / liens rapides
```

### Justification de la structure

- **Nommage clair et cohérent** : tous les composants portent un nom qui décrit directement leur rôle (`Accueil`, `Projets`, `ProjetCard`, `Services`, `APropos`, `NousJoindre`, `NavBar`, `Menu`, `Contenu`).
- **Responsabilité précise** : `NavBar`/`Menu` gèrent uniquement la navigation, `Contenu` gère uniquement l'affichage conditionnel des sections, `Projets` gère le filtre et la liste, `ProjetCard` gère uniquement l'affichage d'un projet.
- **Réutilisation** : `ProjetCard` est le composant réutilisable central, instancié une fois par projet via `map()` plutôt que d'être copié manuellement.
- **Évolutivité** : cette structure s'inspire directement des conventions utilisées en classe (CSS Modules, `sectionActive`/`changerSection` géré dans `App`, un composant `Contenu` pour l'affichage conditionnel, un composant de liste qui gère à la fois le filtre et l'affichage). Elle pourra encore évoluer si un sous-composant supplémentaire devient nécessaire pendant le développement.

## Role des principaux composants

| Composant | Responsabilite |
| --- | --- |
| App | Composant racine. Gere le state `sectionActive` (useState) et le passe en props a NavBar et Contenu. |
| NavBar | Affiche le logo et integre le composant Menu. |
| Menu | Affiche les liens de navigation et indique la section active (comparaison avec sectionActive). |
| Contenu | Affiche la section active par affichage conditionnel ({sectionActive === 'x' && (...)}). |
| Accueil | Presente l'agence et un apercu de ses activites (composant deja fourni dans le code de depart). |
| Projets | Gere le state `filtre` et le state `projets` (liste). Affiche les boutons de filtre, filtre la liste avec filter(), affiche le message si liste vide, et genere les cartes avec map(). |
| ProjetCard | Composant reutilisable qui affiche un projet et recoit une fonction de retrait (onSupprimer) par props. |
| Services | Presente les services offerts par l'agence. |
| APropos | Presente l'agence plus en detail. |
| NousJoindre | Affiche les coordonnees / un formulaire de contact. |
| Footer | (optionnel) Affiche les coordonnees et des liens rapides en bas de page. |

## Capture d'écran

_À ajouter avant la remise finale._

## Sources des images

_À compléter si des images externes sont utilisées._
