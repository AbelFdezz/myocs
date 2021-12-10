import { useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navigate, useNavigate } from "react-router-dom";



const Signup = () => {
  let navigate = useNavigate();
  const [datos, setDatos] = useState({});

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const crearCuenta = async (event) => {
    event.preventDefault();
    var data = new FormData();

    for (var key in datos) {
      if (datos[key]) {
        data.append(key, datos[key]);
      }

    }
    try {
      const response = await axios.post("usuarios/signup", datos,
 
      );

      if (response.data)
      console.log(response.data);

  
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const hacerLogin = async (event) => {
    event.preventDefault();
    var data = new FormData();

    for (var key in datos) {
      if (datos[key]) {
        data.append(key, datos[key]);
      }
    }
    try {
      const response = await axios.post("usuarios/login", datos, {
        headers: {
          Authorization: localStorage.getItem("jwt_token"),
        },
      });
      console.log(response.data);
      localStorage.setItem("jwt_token", response.data.token);

      navigate("/MiPerfil")
   
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div>
      <div
        className="formulario row d-flex justify-content-center"
        onSubmit={hacerLogin}
      >
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="loginCorreo  col-lg-6">
              Inicia sesión
            </Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Group
                  className="loginCorreo col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Escribe tu correo</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="MyOCS@correo.com"
                    name="correo"
                    onChange={handleInputChange}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group
                  className="loginPassword col-lg-6"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Que sea segura, camarada."
                    name="password"
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Button variant="success" type="submit">
                  Login
                </Button>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>



      <div
        className="formulario2 row d-flex justify-content-center"
        onSubmit={crearCuenta}
      >
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header className="loginCorreo  col-lg-6">
              No tienes cuenta? Crea una
            </Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Group
                  className="signPassword col-lg-6"
                  controlId="formBasicPassword2"
                >
                  <Form.Label>Nombre de usuario</Form.Label>
                  <Form.Control
                    type="text"
                    name="nick"
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group
                  className="signCorreo col-lg-6"
                  controlId="formBasicEmail2"
                >
                  <Form.Label>Escribe tu correo</Form.Label>
                  <Form.Control type="email" placeholder="MyOCS@correo.com"  name="correo" onChange={handleInputChange} />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group
                  className="signPassword col-lg-6"
                  controlId="formBasicPassword3"
                >
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Que sea segura, camarada."  name="password" onChange={handleInputChange}
                  />
                </Form.Group>

                <Button variant="success" type="submit" onSubmit={crearCuenta}>
                  Signup
                </Button>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Signup;
