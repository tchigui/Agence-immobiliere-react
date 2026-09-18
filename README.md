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

App
├── Navigation         -> navigation entre les sections, affiche la section active
├── Accueil            -> page d'accueil, presentation de l'agence (deja fourni dans le code de depart)
├── Projets            -> gere la liste des projets et le filtre (state ici)
|   ├── FiltreProjets  -> boutons/menu de filtre, affiche le filtre actif
|   ├── ListeProjets   -> genere les cartes avec map()
|   |   └── ProjetCard -> carte reutilisable (1 par projet), recoit les donnees
|   |                     et une fonction "retirer" par props
|   └── MessageVide    -> affiche seulement si aucun projet ne correspond au filtre
├── Services           -> presentation des services offerts
├── APropos             -> presentation de l'agence (historique, mission, etc.)
└── NousJoindre         -> coordonnees / formulaire de contact


### Justification de la structure

- Nommage clair et cohérent** : tous les composants portent un nom en français qui décrit directement leur rôle (`Accueil`, `Projets`,  - -  FiltreProjets`, `ListeProjets`, `ProjetCard`, `MessageVide`, `Services`, `APropos`, `NousJoindre`, `Navigation`).
- **Responsabilité précise** : chaque composant a une seule raison d'exister (afficher la navigation, gérer la liste et le filtre, afficher une carte, afficher un message conditionnel, etc.). Aucun composant ne mélange plusieurs responsabilités.
- **Réutilisation** : `ProjetCard` est le composant réutilisable central. Il est instancié une fois par projet via `map()` plutôt que d'être copié manuellement pour chaque projet.
- **Évolutivité** : cette première version pourra évoluer pendant le développement. Le composant `Accueil` existe déjà dans le code de départ fourni (avec une section "hero" et un bouton React-Bootstrap) ; les composants `Navigation`, `Projets` et ses enfants, `Services`, `APropos` et `NousJoindre` restent à créer. L'arbre sera ajusté au besoin si de nouveaux sous-composants deviennent nécessaires.

## Role des principaux composants

| Composant | Responsabilite |
| --- | --- |
| App | Composant racine. Gere le state `sectionActive` et affiche la section correspondante. |
| Navigation | Affiche les liens de navigation et indique la section active. |
| Accueil | Presente l'agence et un apercu de ses activites (composant deja fourni dans le code de depart). |
| Projets | Gere le state `projets` (liste) et `filtreActif`. Orchestre le filtre, l'affichage de la liste et le retrait d'un projet. |
| FiltreProjets | Affiche les options de filtre et indique le filtre actif. |
| ListeProjets | Genere une carte par projet filtre avec map() et une key stable (id). |
| ProjetCard | Composant reutilisable qui affiche un projet et recoit une fonction de retrait par props. |
| MessageVide | Affiche un message quand aucun projet ne correspond au filtre. |
| Services | Presente les services offerts par l'agence. |
| APropos | Presente l'agence plus en detail. |
| NousJoindre | Affiche les coordonnees / un formulaire de contact. |

## Capture d'écran

_À ajouter avant la remise finale._

## Sources des images

_À compléter si des images externes sont utilisées._
