import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const BorrarPersonaje = () => {
  let { PersonajeId } = useParams();

  const [Personaje, setPersonaje] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.delete(`/personajes/delete/${PersonajeId}`, {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        });

        setPersonaje(response.data.Personaje);
        console.log()
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h2>Personaje borrado</h2>
      <hr />
      <Link to={`/MiPerfil`}>
        <Button variant="success">Volver a lista de personajes</Button>
      </Link>{" "}
    </div>
  );
};

export default BorrarPersonaje;
