import { Link } from "react-router-dom";

const NavMap = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><a href="#about">About</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><Link to="/booking">Reservations</Link></li>
      <li><a href="#order-online">Order Online</a></li>
      <li><a href="#login">Login</a></li>
    </ul>
  )
}

export default NavMap;
