import React from 'react';

import {
  Navbar,
  Container
} from 'react-bootstrap';

import Logo from './Logo';
import Menu from './Menu';

import styles from './NavBar.module.css';

export default function NavBar({ sectionActive, changerSection }) {

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={styles.navbar}
    >

      <Container>

        <Navbar.Brand
          href="#"
          onClick={(event) => {
            event.preventDefault();
            changerSection('accueil');
          }}
        >
          <Logo />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="menu-principal"
          className={styles.toggle}
        />

        <Navbar.Collapse id="menu-principal">

          <div className="ms-auto">

            <Menu
              sectionActive={sectionActive}
              changerSection={changerSection}
            />

          </div>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}
