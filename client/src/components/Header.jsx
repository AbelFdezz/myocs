import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import OCBlanco from "../OCBlanco.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  const [personajes, setPersonajes] = useState(null);
  const [nombre, setNombre] = useState("");
  const [expanded, setExpanded] = useState(false);

  const BuscarPersonaje = async (event) => {
    event.preventDefault();


        try {
          let response = await axios.get(`/data/personajes/nombre/${nombre}`, {
            headers: {
              Authorization: localStorage.getItem("jwt_token"),
            },
          });
      
          console.log(response.data);

          if (response.data.personaje == null) {
            alert("No se encuentra el personaje");
            return;
          }

          navigate(`/MiPersonajes/${response.data.personaje._id}`)
        } catch (err) {
          console.log(err);

        }

  };

  const content = () => {
    return (
      <div className="containerNav">
        <Navbar collapseOnSelect expand="lg"  variant="dark" expanded={expanded}>
          <Container>
            <NavLink to="/">
              <img src={OCBlanco} alt="Imagen" height="50em" />
            </NavLink>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink onClick={() => setExpanded(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/MiPerfil"
                >
                  Perfil
                </NavLink>
                <NavLink onClick={() => setExpanded(false)}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/Recursos"
                >
                  Recursos
                </NavLink>
                <NavLink onClick={() => setExpanded(false)}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/SobreNosotros"
                >
                  Sobre MyOC
                </NavLink>
              </Nav>
              <Nav>
                <Form className="d-flex m-2" onSubmit={BuscarPersonaje}>
                  <FormControl
                    type="text"
                    value={nombre}
                    name="nombre"
                    placeholder="Busca un personaje"
                    className="me-2"
                    aria-label="Search"
                    onChange={e =>setNombre(e.target.value)}
                  />
                  <Button
                    variant="outline-secondary"
                    type="submit"
                    onClick={BuscarPersonaje}
                  >
                    Buscar
                  </Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  };

  return(
    content()
  )
};
export default Header;
