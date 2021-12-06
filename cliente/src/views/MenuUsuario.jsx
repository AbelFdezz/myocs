import { Link } from "react-router-dom";
import { useEffect } from "react";

import Button from "react-bootstrap/Button";

const MenuUsuario = () => {
  useEffect(() => {

  }, []);

  return (
    <div>

      <h2>Menú de usuario</h2>
      <div className="container2">
        <div className="d-grid gap-2 p-5">
          <Link to="/MisPersonajes">
            <Button variant="success">Mis Personajes</Button>
          </Link>{" "}
          <hr />
          <Link to="/MiPerfil">
            <Button variant="success">Mi Perfil</Button>
          </Link>{" "}
          <hr />
          <Link to="/Recursos">
            <Button variant="success">Recursos</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuUsuario;
