import styles from "./Header.module.css";

import LogoPng from "../assests/rocket.png";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={LogoPng} alt="imagem do logo" />
      <p>todo</p>
    </header>
  );
}
