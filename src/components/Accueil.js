import { Container, Button } from "react-bootstrap";
import "./Accueil.css";

function Accueil({ titre, message, changerSection }) {
  return (
    <Container className="accueil">
      <section className="hero">
        <h1 className="titre">{titre}</h1>

        <p className="description">
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
