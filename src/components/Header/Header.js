import Nav from "components/Nav/Nav";
import logo from "assets/logo.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="little lemon"
            width="148"
            height="40"
          />
        </Link>
        <Nav />
      </div>
    </header>
  )
}
