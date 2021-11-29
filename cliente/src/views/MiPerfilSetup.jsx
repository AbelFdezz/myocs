import Header from "../components/Header";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";


const MiPerfilSetup = () => {

        useEffect(() => {
          console.log("con dependencias");
        }, []);

    return (
      <div>
   <Header />

<h3>Tu perfil</h3> <hr/>

<h6>Pseudónimo</h6>
<Form.Group className="mb-3" controlId="PerfilNick">
    <Form.Control placeholder="" />
  </Form.Group>
<h6>Correo</h6>
<Form.Group className="mb-3" controlId="PerfilNick">
    <Form.Control placeholder="" />
  </Form.Group>
<h6>Nombre</h6>
<Form.Group className="mb-3" controlId="PerfilNick">
    <Form.Control placeholder="" />
  </Form.Group>
<h6>Edad</h6>
<Form.Group className="mb-3" controlId="PerfilNick">
    <Form.Control placeholder="" />
  </Form.Group>
<h6>Pronombres</h6>
<Form.Group className="mb-3" controlId="PerfilNick">
    <Form.Control placeholder="" />
  </Form.Group>
<h6>Sobre mí</h6>
<FloatingLabel controlId="floatingTextarea2" label="No hay límites. Cuéntanos lo que quieras">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '120px' }}
    />
  </FloatingLabel>

<h4>Enlaces</h4>
<FloatingLabel controlId="floatingTextarea2" label="Pon enlaces a tus otras redes">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '120px' }}
    />
  </FloatingLabel>
  <Link to="/MiPerfilSetup"><Button variant="success">Guardar</Button></Link> <hr />

      </div>
       );
    };
    
    export default MiPerfilSetup;
    