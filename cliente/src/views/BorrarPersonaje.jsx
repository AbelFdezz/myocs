import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const BorrarPersonaje = () => {
  let navigate = useNavigate();
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
        navigate("/BorrarPersonajeFail")
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div className="container col-sm-12 col-md-8 col-lg-6 col-xl-4 text-center">
      <h2>Personaje borrado</h2>
      <hr />
      <Link to={`/MiPerfil`}>
        <Button variant="success">Volver a lista de personajes</Button>
      </Link>{" "}
    </div>
  );
};

export default BorrarPersonaje;
