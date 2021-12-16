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
        let response = await axios.get(`/data/trasfondos/find/${trasfondoId}`, {
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

  const content = () => {
    return (
      <div className="container justify-content-center col-sm-12 col-lg-6">

        <div >
        <Link to={`/TrasfondoSetup/${trasfondoId}`}>
          <Button variant="success" size="sm mb-3">Editar trasfondo</Button>
        </Link>{" "}

        </div>
        <h2>Título: </h2>
          <p> {trasfondo.titulo}</p>
        <h2>Personajes invitados:</h2>
        {trasfondo.otrosPersonajes.map((otrosPersonajes, i) => {
          return (
            <div key={otrosPersonajes._id}>
                 <div className="container d-grid mb-3 ">
                 <Link to={`/MiPersonajes/${otrosPersonajes._id}`}>
                <Button variant="success" size="md">
                  <div key={i}>{otrosPersonajes.nombre} </div>
                </Button>
              </Link>
            </div>
            </div>
          );
        })}
    
          {" "}
         <h2>Cuerpo:</h2>
          <p> {trasfondo.cuerpo}</p>
        </div>
  
    );
  };
  return <div>{trasfondo ? content() : "Cargando..."}</div>;
};

export default Trasfondo;
