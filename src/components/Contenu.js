import React from 'react';

import {
  Container
} from 'react-bootstrap';

import Accueil from './Accueil';
import Projets from './Projets';

import styles from './Contenu.module.css';


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
              L'agence Horizon offre l'acquisition de terrains, le
              financement et le développement de projets immobiliers,
              ainsi que la mise en marché et la revente de propriétés
              résidentielles et commerciales.
            </p>

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
              fictive qui accompagne ses clients à chaque étape de
              leurs projets, de l'acquisition d'un terrain jusqu'à la
              revente d'une propriété.
            </p>

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
              Une question sur un projet ? Contactez-nous à
              info@agencehorizon.example ou au 418 555-0100.
            </p>

          </Container>

        </section>

      )}

    </>
  );
}
