import styles from "./Footer.module.scss";
import NavMap from "../Nav/NavMap";
import logoVert from "assets/logoVert.jpg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.ftrContent}>
        <img
          src={logoVert}
          alt="little lemon logo"
          width="160"
          height="259"
        />
        <div>
          <h2>Site Map</h2>
          <NavMap />
        </div>
        <div>
          <h2>Contacts</h2>
          <ul>
            <li><a href="#address">123 Foodie Way - Chicago, IL 60616</a></li>
            <li><a href="tel:(312) 555-0147">(312) 555-0147</a></li>
            <li><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></li>
          </ul>
        </div>
        <div>
          <h2>Social Media</h2>
          <ul>
            <li><a href="https://facebook.com/LittleLemonChicago">Facebook</a></li>
            <li><a href="https://instagram.com/LittleLemonChi">Instagram</a></li>
            <li><a href="https://x.com/LittleLemonChi">X</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
