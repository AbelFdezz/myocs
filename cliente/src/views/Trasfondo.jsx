import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

const Trasfondo = () => {
  let { trasfondoId } = useParams();

  const [trasfondo, setTrasfondo] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(`/trasfondos/${trasfondoId}`, {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        });

        setTrasfondo(response.data.trasfondo);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

//ruta borrar trasfondo. OJOCUIDAO







  const content = () => {
    return (
      <div>
        <Link to={`/MisPersonajes/TrasfondoSetup/${trasfondoId}`}>
          <Button variant="success">Editar trasfondo</Button>
        </Link>{" "}
        <p>Titulo: {trasfondo.titulo}</p>
        <p>Personajes invitados:</p>
        {trasfondo.otrosPersonajes.map((otrosPersonajes, i) => {
          return (
            <div key={otrosPersonajes._id}>
              <div className="d-grid gap-2 mb-3  col-lg-6 ">
                <div key={i}>{otrosPersonajes.nombre} </div>
              </div>
              <p>Cuerpo: {trasfondo.cuerpo}</p>
            </div>
          );
        })}


<Link to={`/BorrarTrasfondo/${trasfondoId}`}>
          <Button variant="success">Borrar trasfondo</Button>
        </Link>{" "}
      </div>
    );
  };
  return <div>{trasfondo ? content() : "Cargando..."}</div>;
};

export default Trasfondo;
