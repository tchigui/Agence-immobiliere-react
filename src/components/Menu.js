import React from 'react';

import { Nav } from 'react-bootstrap';

import styles from './Menu.module.css';

export default function Menu({
  sectionActive,
  changerSection
}) {

  return (
    <Nav className={styles.menu}>

      {/* ACCUEIL */}

      <Nav.Link
        href="#"
        className={
          sectionActive === 'accueil'
            ? styles.active
            : styles.link
        }
        onClick={(event) => {
          event.preventDefault();
          changerSection('accueil');
        }}
      >
        Accueil
      </Nav.Link>


      {/* PROJETS */}

      <Nav.Link
        href="#"
        className={
          sectionActive === 'projets'
            ? styles.active
            : styles.link
        }
        onClick={(event) => {
          event.preventDefault();
          changerSection('projets');
        }}
      >
        Projets
      </Nav.Link>


      {/* SERVICES */}

      <Nav.Link
        href="#"
        className={
          sectionActive === 'services'
            ? styles.active
            : styles.link
        }
        onClick={(event) => {
          event.preventDefault();
          changerSection('services');
        }}
      >
        Services
      </Nav.Link>


      {/* À PROPOS */}

      <Nav.Link
        href="#"
        className={
          sectionActive === 'apropos'
            ? styles.active
            : styles.link
        }
        onClick={(event) => {
          event.preventDefault();
          changerSection('apropos');
        }}
      >
        À propos
      </Nav.Link>


      {/* NOUS JOINDRE */}

      <Nav.Link
        href="#"
        className={
          sectionActive === 'nousjoindre'
            ? styles.active
            : styles.link
        }
        onClick={(event) => {
          event.preventDefault();
          changerSection('nousjoindre');
        }}
      >
        Nous joindre
      </Nav.Link>

    </Nav>
  );
}
