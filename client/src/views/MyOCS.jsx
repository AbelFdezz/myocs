import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Fotillo from "../arbolPortada.png";

const MyOCS = () => {
  return (
    <div className="container col-lg-8 col-xl-4">
      <h2>Bienvenid@ a MyOC</h2>
      <img src={Fotillo} alt="Imagen" />
      <p>MyOC es un repositorio donde podrás desarrollar un extenso perfil de tus personajes, desarrollar sus trasfondos y compartirlos con tu gente. Podrás escribir por capítulos, enlazar a los personajes que aparezcan en tus  historias, y mantener todo tu contenido bien organizado. ¿Te animas?</p>
<div className="containerComienza d-flex justify-content-center mb-5">
      <Link to="/Signup">
        <Button variant="success">Comienza</Button>
      </Link>
    </div>
    </div>
  );
};

export default MyOCS;
