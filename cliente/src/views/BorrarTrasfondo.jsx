import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const BorrarTrasfondo = () => {
  let { trasfondoId } = useParams();

  const [trasfondo, setTrasfondo] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.delete(`/trasfondos/delete/${trasfondoId}`, {
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

  return (
    <div>
      <h2>Trasfondo Borrado</h2>
      <hr />
      <Link to={`/MiPerfil`}>
        <Button variant="success">Volver a tu perfil</Button>
      </Link>{" "}
    </div>
  );
};

export default BorrarTrasfondo;
