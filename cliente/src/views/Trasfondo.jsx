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
        let response = await axios.get(`/trasfondos/find/${trasfondoId}`, {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        });

        setTrasfondo(response.data.trasfondo);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const content = () => {
    return (
      <div>
        <Link to={`/TrasfondoSetup/${trasfondoId}`}>
          <Button variant="success">Editar trasfondo</Button>
        </Link>{" "}
        <p>Titulo: {trasfondo.titulo}</p>
        <p>Personajes invitados:</p>
        {trasfondo.otrosPersonajes.map((otrosPersonajes, i) => {
          return (
            <div key={otrosPersonajes._id}>
              <div key={i}>{otrosPersonajes.nombre} </div>
            </div>
          );
        })}
        <div>
          {" "}
          <p>Cuerpo: {trasfondo.cuerpo}</p>
        </div>
      </div>
    );
  };
  return <div>{trasfondo ? content() : "Cargando..."}</div>;
};

export default Trasfondo;
