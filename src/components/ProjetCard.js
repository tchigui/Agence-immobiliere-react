import React from 'react';

import {
  Card,
  Button,
  Badge
} from 'react-bootstrap';

import styles from './ProjetCard.module.css';


export default function ProjetCard({
  projet,
  onSupprimer
}) {

  return (

    <Card className={styles.projetCard}>

      <Card.Img
        variant="top"
        src={projet.image}
        alt={projet.titre}
        className={styles.image}
      />

      <Card.Body>


        {/* TITRE */}

        <Card.Title>

          {projet.titre}

        </Card.Title>


        {/* VILLE */}

        <Card.Text
          className={styles.ville}
        >

          {projet.ville}

        </Card.Text>


        {/* TYPE ET STATUT */}

        <div className={styles.badges}>

          <Badge
            bg="light"
            text="dark"
            className={styles.badge}
          >
            {projet.type}
          </Badge>

          <Badge
            bg="light"
            text="dark"
            className={styles.badge}
          >
            {projet.statut}
          </Badge>

        </div>


        {/* DESCRIPTION */}

        <Card.Text
          className={styles.description}
        >

          {projet.description}

        </Card.Text>


        {/* INFO FINANCIERE OU SUPERFICIE */}

        <Card.Text
          className={styles.info}
        >

          {projet.prix
            ? `Prix : ${projet.prix}`
            : `Superficie : ${projet.superficie}`}

        </Card.Text>


        {/* ACTION */}

        <Button
          variant="outline-danger"
          size="sm"
          onClick={() =>
            onSupprimer(projet.id)
          }
        >

          Retirer

        </Button>


      </Card.Body>

    </Card>

  );
}
