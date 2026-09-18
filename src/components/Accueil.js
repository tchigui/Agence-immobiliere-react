import { Container, Button } from "react-bootstrap";
import "./Accueil.css";

function Accueil({ titre, message, onChanger }) {
  return (
    <Container className="accueil">
      <section className="hero">
        <h1 className="titre">{titre}</h1>

        <p className="description">
          {message}
        </p>

        <Button
          variant="dark"
          onClick={onChanger}
        >
          Voir les projets
        </Button>
      </section>
    </Container>
  );
}

export default Accueil;