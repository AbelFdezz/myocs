import { useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();
  const [datos, setDatos] = useState({});
  function alerta() {
    alert("Cuenta creada con éxito");
  }
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
      const response = await axios.post("usuarios/signup", datos);

      if (response.data) alerta();
    } catch (err) {
      console.log(err.response.data);
      alert(err.response.data.message);
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
      localStorage.setItem("jwt_token", response.data.token);

      navigate("/MiPerfil");
    } catch (err) {
      console.log(err.response.data);
      alert(err.response.data.message);
    }
  };

  return (
    <div className="container col-sm-12 col-md-8 col-lg-6 col-xl-4">
      <div className="formulario text-center " onSubmit={hacerLogin}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="loginCorreo">
              Inicia sesión
            </Accordion.Header>
            <Accordion.Body className="acordeonbody">
              <Form className="FormLogin justify-content-center">
                <Form.Group className="loginCorreo" controlId="formBasicEmail">
                  <Form.Label>Escribe tu correo</Form.Label>
                  <Form.Control
                    className="containerLogin1 text-center"
                    type="email"
                    placeholder="MyOCS@correo.com"
                    name="correo"
                    onChange={handleInputChange}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group
                  className="loginPassword"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    className="containerLogin2 text-center"
                    type="password"
                    placeholder="Que sea segura, eh?"
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
        className="formulario2 mt-5 text-center variant="
        onSubmit={crearCuenta}
      >
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header className="loginCorreo">
              No tienes cuenta? Crea una
            </Accordion.Header>
            <Accordion.Body>
              <Form className="FormLogin justify-content-center">
                <Form.Group
                  className="signPassword"
                  controlId="formBasicPassword2"
                >
                  <Form.Label>Nombre de usuario</Form.Label>
                  <Form.Control
                    className="containerLogin3 text-center"
                    type="text"
                    name="nick"
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="signCorreo" controlId="formBasicEmail2">
                  <Form.Label>Escribe tu correo</Form.Label>
                  <Form.Control
                    className="containerLogin2 text-center"
                    type="email"
                    placeholder="MyOCS@correo.com"
                    name="correo"
                    onChange={handleInputChange}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group
                  className="signPassword"
                  controlId="formBasicPassword3"
                >
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    className="containerLogin text-center"
                    type="password"
                    placeholder="Que sea segura, ¿eh?"
                    name="password"
                    onChange={handleInputChange}
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
