import { useState } from "react";

import NavBar from "./components/NavBar";
import Contenu from "./components/Contenu";

import styles from "./App.module.css";

function App() {
  const [sectionActive, setSectionActive] = useState("accueil");

  return (
    <div className={styles.app}>

      <NavBar
        sectionActive={sectionActive}
        changerSection={setSectionActive}
      />

      <main>
        <Contenu
          sectionActive={sectionActive}
          changerSection={setSectionActive}
        />
      </main>

    </div>
  );
}

export default App;
