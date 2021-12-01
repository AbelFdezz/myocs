import { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Signup = () => {
  useEffect(() => {
    //cuando arranca por primera vez se ejecuta.
  }, []);

  return (
    <div className= "formulario row d-flex justify-content-center">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="loginCorreo  col-lg-6">Inicia sesión</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Group
                className="loginCorreo col-lg-6"
                controlId="formBasicEmail"
              >
                <Form.Label>Escribe tu correo</Form.Label>
                <Form.Control type="email" placeholder="MyOCS@correo.com" />
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
                />
              </Form.Group>
              
              <Button variant="success" type="submit">
                Enviar
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header className="loginCorreo  col-lg-6">No tienes cuenta? Crea una</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Group className="signCorreo col-lg-6" controlId="formBasicEmail2">
                <Form.Label>Escribe tu correo</Form.Label>
                <Form.Control type="email" placeholder="MyOCS@correo.com" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group
                className="signPassword col-lg-6"
                controlId="formBasicPassword2"
              >
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Que sea segura, camarada."
                />
              </Form.Group>

              <Button variant="success" type="submit">
                Enviar
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Signup;
