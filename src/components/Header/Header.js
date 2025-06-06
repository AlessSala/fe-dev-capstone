import Nav from "components/Nav/Nav";
import logo from "assets/logo.svg";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <a href="index.html">
          <img
            src={logo}
            alt="little lemon"
            width="148"
            height="40"
          />
        </a>
        <Nav />
      </div>
    </header>
  )
}
