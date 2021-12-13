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

  const [personajes, setPersonajes] = useState({
  });

  const handleInputChange = (event) => {
    setPersonajes({
      ...personajes,
      [event.target.name]: event.target.value,
    });
  };



  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(
          "/personajes",
          {
            headers: {
              Authorization: localStorage.getItem("jwt_token")
              
            },
          }
        );
        setPersonajes(response.data.personajes);
        console.log(response.data.personajes)

     
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);


  const BuscarPersonaje = async (event) => {

   
    navigate(`/MiPersonajes/${personajes._id}`)

  };



const content = () => {
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
              <Nav>
            <Form className="d-flex m-2" onSubmit={BuscarPersonaje}>
              <FormControl
                type="text"
                placeholder="Busca un personaje"
                className="me-2"
                aria-label="Search"
                onChange={handleInputChange}
              />
              <Button variant="outline-secondary" type="submit" onClick={BuscarPersonaje}>Buscar</Button>
            </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

  return  <div>{personajes ? content() : "Cargando..."}</div>;
  };
export default Header;
