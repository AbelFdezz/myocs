import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Fotillo from "../arbolPortada.png";

const MyOCS = () => {
  return (
    <div className="container">
      <h2>Bienvenid@ a MyOCS</h2>
      <img src={Fotillo} alt="Imagen" />
      <p>My OCS es un repositorio donde podrás desarrollar un extenso perfil de tus personajes, desarrollar sus trasfondos y compartirlos con tu gente. Podrás escribir por capítulos, enlazar a los personajes que aparezcan en tus  historias, y mantener todo tu contenido bien organizado. ¿Te animas?</p>
<div className="containerComienza d-flex justify-content-center">
      <Link to="/Signup">
        <Button variant="success">Comienza</Button>
      </Link>
    </div>
    </div>
  );
};

export default MyOCS;
