import { Link } from "react-router-dom";
import { Nav, NavLinks } from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <h2>Meu Site</h2>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Cadastro</Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
