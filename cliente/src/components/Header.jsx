import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, Link } from "react-router-dom";
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
        <Link to="/" ><img src={OCBlanco} alt="Imagen" height= "60em" /></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/MenuUsuario"><Nav.Link href="#features1">Menú</Nav.Link></Link>
              <Link to="/MisPersonajes"><Nav.Link href="#features2">Mis Personajes</Nav.Link></Link>
              <Link to="/MiPerfil"><Nav.Link href="#features3">Mi Perfil</Nav.Link></Link>
              <Link to="/SobreNosotros"><Nav.Link href="#features4">Sobre MyOCS</Nav.Link></Link>

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
