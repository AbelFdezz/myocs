import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const NoBorrar = () => {

    return (
        <div className="containerFail">
          <h3>No puedes borrar o editar algo que no hayas creado tu.</h3>
          <h6>¡Un poquito de por favor!</h6>
          <hr />
          <Link to={`/MiPerfil`}>
            <Button variant="success">Volver a tu perfil</Button>
          </Link>{" "}
        </div>
      );
    };
    
    export default NoBorrar;