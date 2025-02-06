import { Link } from "react-router-dom";
import { Nav, NavLinks } from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <h2>Hotel Dev</h2>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Registre-se</Link>
        <Link to="/hotels">Casdastrar Hotel</Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
