import styles from "./Nav.module.scss";
import NavMap from "./NavMap";
import { useState } from 'react';

const Nav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <>
      <nav
        className={mobileNavOpen ? styles.mobileNavActive : ''}
        onClick={toggleMobileNav}
      >
        <NavMap />
      </nav>
      <span
        className={styles.mobileNavToggle}
        onClick={toggleMobileNav}
      >
        {mobileNavOpen ? <>&#10799;</> : <>&equiv;</>}
      </span>
    </>
  )
}

export default Nav;
