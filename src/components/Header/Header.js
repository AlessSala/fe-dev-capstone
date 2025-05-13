import Nav from "components/Nav/Nav";
import logo from "assets/logo.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="little lemon" />
      <Nav />
    </header>
  )
}
