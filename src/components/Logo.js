import React from 'react';

import logo from '../assets/Logo.png';

import styles from './Logo.module.css';

export default function Logo() {

  return (
    <img
      src={logo}
      alt="Agence Horizon"
      className={styles.logo}
    />
  );
}
