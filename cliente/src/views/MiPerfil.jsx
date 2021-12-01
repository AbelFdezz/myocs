import { Link } from "react-router-dom";
import { useEffect } from "react";

import Button from "react-bootstrap/Button";

const MiPerfil = () => {
  useEffect(() => {
    console.log("con dependencias");
  }, []);

  return (
    <div>
      <h3>Tu perfil</h3> <hr />
      <Link to="/MiPerfilSetup">
        <Button variant="success">Editar perfil</Button>
      </Link>{" "}
      <hr />
    </div>
  );
};

export default MiPerfil;
