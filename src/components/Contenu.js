import React from 'react';

import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import Accueil from './Accueil';
import Projets from './Projets';

import styles from './Contenu.module.css';


const SERVICES = [
  {
    icone: '🌱',
    titre: 'Acquisition de terrains',
    texte: "Identification et acquisition de terrains à fort potentiel pour de futurs projets immobiliers."
  },
  {
    icone: '💰',
    titre: 'Financement de projets',
    texte: "Participation au financement de projets résidentiels et commerciaux, du montage jusqu'à la réalisation."
  },
  {
    icone: '🏗️',
    titre: 'Développement immobilier',
    texte: "Accompagnement des promoteurs à chaque étape du développement, de la conception à la livraison."
  },
  {
    icone: '🤝',
    titre: 'Mise en marché et revente',
    texte: "Mise en marché et revente de propriétés résidentielles et commerciales partout au Québec."
  }
];


const STATS = [
  { valeur: '12+', libelle: 'Projets immobiliers' },
  { valeur: '8', libelle: 'Régions desservies' },
  { valeur: '15 ans', libelle: "D'expérience" },
  { valeur: '100%', libelle: 'Accompagnement' }
];


export default function Contenu({
  sectionActive,
  changerSection
}) {

  return (
    <>


      {/* =================================
          ACCUEIL
      ================================= */}

      {sectionActive === 'accueil' && (

        <Accueil
          titre="Agence Horizon"
          message="Nous accompagnons nos clients dans leurs projets immobiliers."
          changerSection={changerSection}
        />

      )}


      {/* =================================
          PROJETS
      ================================= */}

      {sectionActive === 'projets' && (

        <section
          id="projets"
          className={styles.section}
        >

          <Container>

            <Projets />

          </Container>

        </section>

      )}


      {/* =================================
          SERVICES
      ================================= */}

      {sectionActive === 'services' && (

        <section
          id="services"
          className={styles.section}
        >

          <Container>

            <h2 className={styles.title}>
              Nos services
            </h2>

            <p className={styles.text}>
              L'agence Horizon accompagne ses clients à chaque étape
              d'un projet immobilier : de l'acquisition d'un terrain
              jusqu'à la revente d'une propriété.
            </p>

            <Row className="g-4 mt-2">

              {SERVICES.map((service, index) => (

                <Col
                  md={6}
                  lg={3}
                  key={index}
                >

                  <div className={styles.serviceCard}>

                    <div className={styles.serviceIcon}>
                      {service.icone}
                    </div>

                    <h5 className={styles.serviceTitle}>
                      {service.titre}
                    </h5>

                    <p className={styles.serviceText}>
                      {service.texte}
                    </p>

                  </div>

                </Col>

              ))}

            </Row>

          </Container>

        </section>

      )}


      {/* =================================
          À PROPOS
      ================================= */}

      {sectionActive === 'apropos' && (

        <section
          id="apropos"
          className={styles.section}
        >

          <Container>

            <h2 className={styles.title}>
              À propos de l'agence
            </h2>

            <p className={styles.text}>
              Agence Horizon est une agence financière immobilière
              fictive qui acquiert des terrains, participe au
              financement et au développement de projets immobiliers,
              puis met en marché et revend des propriétés
              résidentielles ou commerciales.
            </p>

            <p className={styles.text}>
              Notre équipe accompagne chaque client avec transparence,
              de la première analyse d'un terrain jusqu'à la
              conclusion d'une vente.
            </p>

            <Row className="g-3 mt-3">

              {STATS.map((stat, index) => (

                <Col
                  sm={6}
                  lg={3}
                  key={index}
                >

                  <div className={styles.stat}>

                    <strong>
                      {stat.valeur}
                    </strong>

                    <span>
                      {stat.libelle}
                    </span>

                  </div>

                </Col>

              ))}

            </Row>

          </Container>

        </section>

      )}


      {/* =================================
          NOUS JOINDRE
      ================================= */}

      {sectionActive === 'nousjoindre' && (

        <section
          id="nousjoindre"
          className={styles.section}
        >

          <Container>

            <h2 className={styles.title}>
              Nous joindre
            </h2>

            <p className={styles.text}>
              Une question sur un projet ou une propriété ?
              Notre équipe vous répond rapidement.
            </p>

            <Row className="g-4 mt-2">

              <Col md={4}>
                <div className={styles.contactCard}>
                  <strong>Adresse</strong>
                  <p>1234 boulevard Horizon, Québec (QC)</p>
                </div>
              </Col>

              <Col md={4}>
                <div className={styles.contactCard}>
                  <strong>Téléphone</strong>
                  <p>418 555-0100</p>
                </div>
              </Col>

              <Col md={4}>
                <div className={styles.contactCard}>
                  <strong>Courriel</strong>
                  <p>info@agencehorizon.example</p>
                </div>
              </Col>

            </Row>

          </Container>

        </section>

      )}

    </>
  );
}
