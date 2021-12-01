import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Fotillo from "../arbolPortada.png";

const MyOCS = () => {
  return (
    <div>
      <h2>Bienvenid@ a MyOCS</h2>
      <img src={Fotillo} alt="Imagen" />
      <p>My OCS es un repositorio de personajes y trasfondos blablabla</p>

      <Link to="/Signup">
        <Button variant="success">Comienza</Button>
      </Link>
    </div>
  );
};

export default MyOCS;
