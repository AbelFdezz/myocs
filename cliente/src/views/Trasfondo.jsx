import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";

const Trasfondo = () => {
  let { TrasfondoId } = useParams();

  const [Trasfondo, setTrasfondo] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(`/trasfondos/find/${TrasfondoId}`, 
          {
            headers: {
              Authorization: localStorage.getItem("jwt_token")
              
            },
          
        });
        setTrasfondo(response.data.trasfondos);
   
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const content = () => {
    console.log(TrasfondoId)
    return (
<div>
<Link to={`${TrasfondoId}`}>
      <Button variant="success">Editar trasfondo</Button>
    </Link>{" "}
<div> <p>Titulo: {Trasfondo[0].titulo}</p></div>
<div> <p>Personajes invitados: {Trasfondo[0].otrosPersonajes}</p></div> 
<div> <p>Cuerpo: {Trasfondo[0].cuerpo}</p></div> 
</div>
    );
  }
  return <div>{Trasfondo ? content() : "Cargando..."}</div>;
};
export default Trasfondo;
