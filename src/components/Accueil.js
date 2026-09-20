import { Container, Button } from "react-bootstrap";
import styles from "./Accueil.module.css";

function Accueil({ titre, message, changerSection }) {
  return (
    <Container className={styles.accueil}>
      <section className={styles.hero}>
        <h1 className={styles.titre}>{titre}</h1>

        <p className={styles.description}>
          {message}
        </p>

        <Button
          variant="dark"
          onClick={() => changerSection('projets')}
        >
          Voir les projets
        </Button>
      </section>
    </Container>
  );
}

export default Accueil;
