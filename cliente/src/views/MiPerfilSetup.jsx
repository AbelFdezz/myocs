import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";


const MiPerfilSetup = () => {


    return (
      <div>

<h3>Tu perfil</h3> <hr/>

<h6>Pseudónimo</h6>
<Form.Group className="mb-3 col-10 mx-auto" controlId="PerfilPseudonimo">
    <Form.Control placeholder="" />
  </Form.Group>
<h6>Correo</h6>
<Form.Group className="mb-3 col-10 mx-auto" controlId="PerfilCorreo">
    <Form.Control placeholder="" />
  </Form.Group>
<h6>Nombre</h6>
<Form.Group className="mb-3 col-10 mx-auto" controlId="PerfilNombre">
    <Form.Control placeholder="" />
  </Form.Group>
<h6>Edad</h6>
<Form.Group className="mb-3 col-10 mx-auto" controlId="Perfiledad">
    <Form.Control placeholder="" />
  </Form.Group>
<h6>Pronombres</h6>
<Form.Group className="mb-3 col-10 mx-auto" controlId="PerfilPronombres">
    <Form.Control placeholder="" />
  </Form.Group>
<h6>Sobre mí</h6>
<FloatingLabel controlId="SobreMi" label="No hay límites. Cuéntanos lo que quieras">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '120px' }}
    />
  </FloatingLabel>

<h4>Enlaces</h4>
<FloatingLabel controlId="Enlaces" label="Pon enlaces a tus otras redes">
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
    