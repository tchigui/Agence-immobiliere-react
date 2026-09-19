import React, { useState } from 'react';

import {
  Row,
  Col,
  Button,
  ButtonGroup,
  Alert
} from 'react-bootstrap';

import ProjetCard from './ProjetCard';

import styles from './Projets.module.css';


export default function Projets() {


  /* =================================
     ÉTAT : FILTRE
  ================================= */

  const [filtre, setFiltre] = useState('tous');


  /* =================================
     ÉTAT : LISTE DES PROJETS
  ================================= */

  const [projets, setProjets] = useState([

    {
      id: 1,
      titre: "Les Terrasses du Fleuve",
      ville: "Québec",
      type: "résidentiel",
      statut: "disponible",
      description: "Condos modernes avec vue sur le fleuve, proches du Vieux-Québec.",
      prix: "289 000 $",
      image: "https://picsum.photos/seed/projet1/400/300"
    },

    {
      id: 2,
      titre: "Complexe Horizon Affaires",
      ville: "Montréal",
      type: "commercial",
      statut: "en développement",
      description: "Espaces de bureaux flexibles au coeur du centre-ville.",
      superficie: "12 000 pi²",
      image: "https://picsum.photos/seed/projet2/400/300"
    },

    {
      id: 3,
      titre: "Domaine des Érables",
      ville: "Sherbrooke",
      type: "résidentiel",
      statut: "vendu",
      description: "Maisons unifamiliales dans un quartier familial et verdoyant.",
      prix: "425 000 $",
      image: "https://picsum.photos/seed/projet3/400/300"
    },

    {
      id: 4,
      titre: "Terrain Boisé du Lac",
      ville: "Saint-Sauveur",
      type: "terrain",
      statut: "disponible",
      description: "Grand terrain boisé idéal pour un projet résidentiel de prestige.",
      superficie: "5 acres",
      image: "https://picsum.photos/seed/projet4/400/300"
    },

    {
      id: 5,
      titre: "Galerie Marchande Le Carrefour",
      ville: "Laval",
      type: "commercial",
      statut: "disponible",
      description: "Local commercial avec fort achalandage, proche des grands axes routiers.",
      superficie: "8 500 pi²",
      image: "https://picsum.photos/seed/projet5/400/300"
    },

    {
      id: 6,
      titre: "Résidences du Vieux-Port",
      ville: "Trois-Rivières",
      type: "résidentiel",
      statut: "en développement",
      description: "Copropriétés patrimoniales rénovées avec vue sur le fleuve Saint-Laurent.",
      prix: "312 000 $",
      image: "https://picsum.photos/seed/projet6/400/300"
    },

    {
      id: 7,
      titre: "Tour Innovation",
      ville: "Gatineau",
      type: "commercial",
      statut: "disponible",
      description: "Tour de bureaux certifiée LEED, technologies intelligentes intégrées.",
      superficie: "20 000 pi²",
      image: "https://picsum.photos/seed/projet7/400/300"
    },

    {
      id: 8,
      titre: "Domaine Rivière-Bleue",
      ville: "Longueuil",
      type: "résidentiel",
      statut: "disponible",
      description: "Maisons de ville modernes à quelques minutes du métro.",
      prix: "379 000 $",
      image: "https://picsum.photos/seed/projet8/400/300"
    },

    {
      id: 9,
      titre: "Terrain Industriel Nord",
      ville: "Lévis",
      type: "terrain",
      statut: "vendu",
      description: "Terrain zoné industriel avec accès direct à l'autoroute.",
      superficie: "3,2 acres",
      image: "https://picsum.photos/seed/projet9/400/300"
    },

    {
      id: 10,
      titre: "Place des Artisans",
      ville: "Drummondville",
      type: "commercial",
      statut: "en développement",
      description: "Locaux commerciaux destinés aux artisans et petites entreprises locales.",
      superficie: "6 000 pi²",
      image: "https://picsum.photos/seed/projet10/400/300"
    },

    {
      id: 11,
      titre: "Les Jardins de Rimouski",
      ville: "Rimouski",
      type: "résidentiel",
      statut: "disponible",
      description: "Condos abordables avec espaces verts communs et jeux pour enfants.",
      prix: "215 000 $",
      image: "https://picsum.photos/seed/projet11/400/300"
    },

    {
      id: 12,
      titre: "Terrain Panoramique du Saguenay",
      ville: "Saguenay",
      type: "terrain",
      statut: "disponible",
      description: "Terrain avec vue panoramique sur le fjord, idéal pour projet résidentiel haut de gamme.",
      superficie: "1,8 acre",
      image: "https://picsum.photos/seed/projet12/400/300"
    }

  ]);


  /* =================================
     FONCTION : CHANGER LE FILTRE
  ================================= */

  const choisirFiltre = (nouveauFiltre) => {

    setFiltre(nouveauFiltre);

  };


  /* =================================
     CSS CONDITIONNEL BOOTSTRAP
  ================================= */

  const variantFiltre = (valeur) => {

    return filtre === valeur
      ? 'success'
      : 'outline-success';

  };


  /* =================================
     FILTRER LA LISTE
  ================================= */

  const projetsAffiches = projets.filter(
    (projet) => {

      if (filtre === 'tous') {

        return true;

      }

      return projet.type === filtre;

    }
  );


  /* =================================
     SUPPRIMER UN PROJET
  ================================= */

  const supprimerProjet = (id) => {

    const nouvelleListe = projets.filter(
      (projet) => projet.id !== id
    );

    setProjets(nouvelleListe);

  };


  /* =================================
     AFFICHAGE
  ================================= */

  return (

    <div className={styles.wrapper}>


      {/* =================================
          FILTRES
      ================================= */}

      <div className={styles.toolbar}>

        <h3 className={styles.title}>
          Projets immobiliers
        </h3>


        <ButtonGroup>

          <Button
            variant={variantFiltre('tous')}
            onClick={() => choisirFiltre('tous')}
          >
            Tous
          </Button>

          <Button
            variant={variantFiltre('résidentiel')}
            onClick={() =>
              choisirFiltre('résidentiel')
            }
          >
            Résidentiel
          </Button>

          <Button
            variant={variantFiltre('commercial')}
            onClick={() =>
              choisirFiltre('commercial')
            }
          >
            Commercial
          </Button>

          <Button
            variant={variantFiltre('terrain')}
            onClick={() =>
              choisirFiltre('terrain')
            }
          >
            Terrain
          </Button>

        </ButtonGroup>

      </div>


      {/* =================================
          CAS : LISTE VIDE
      ================================= */}

      {projetsAffiches.length === 0 && (

        <Alert
          variant="warning"
          className={styles.emptyMessage}
        >

          Aucun projet à afficher
          pour ce filtre.

        </Alert>

      )}


      {/* =================================
          MAP + PROPS
      ================================= */}

      <Row className="g-4">

        {projetsAffiches.map((projet) => (

          <Col
            md={6}
            lg={4}
            key={projet.id}
          >

            <ProjetCard

              projet={projet}

              onSupprimer={supprimerProjet}

            />

          </Col>

        ))}

      </Row>

    </div>

  );
}
