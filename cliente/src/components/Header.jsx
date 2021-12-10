import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import OCBlanco from "../OCBlanco.png";


const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink to="/">
            <img src={OCBlanco} alt="Imagen" height="50em" />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
          
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/MiPerfil">
                Perfil
              </NavLink>
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/Recursos">
       Recursos
              </NavLink>
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/SobreNosotros">
                Sobre MyOCS
              </NavLink>
            </Nav>
            <Form className="d-flex m-2">
              <FormControl
                type="search"
                placeholder="Busca un personaje"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-secondary">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
