import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "../components/Header";




const Signup = () => {

    useEffect(() =>{   //cuando arranca por primera vez se ejecuta.
        console.log("con dependencias")
    }, []);


  return (<div>
      <Header />
   
<h6>Inicia sesión</h6>



<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Escribe tu correo</Form.Label>
    <Form.Control type="email" placeholder="MyOCS@correo.com" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Que sea segura, camarada." />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Mostrar contraseña" />
  </Form.Group>
  <Button variant="success" type="submit">
  Enviar
  </Button>
</Form>



<Accordion defaultActiveKey="null">
  <Accordion.Item eventKey="0">
    <Accordion.Header>No tienes cuenta? Crea una</Accordion.Header>
    <Accordion.Body>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Escribe tu correo</Form.Label>
    <Form.Control type="email" placeholder="MyOCS@correo.com" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Que sea segura, camarada." />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Mostrar contraseña" />
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
