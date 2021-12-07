import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";


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
        console.log(response.data.trasfondos[0])
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const content = () => {
    return (
<div>
  
<div> <p>Titulo: {Trasfondo[0].titulo}</p></div>
<div> <p>Personaje invitado: {Trasfondo[0].otrosPersonajes}</p></div> 
<div> <p>Cuerpo: {Trasfondo[0].cuerpo}</p></div> 


</div>
    );
  }

  return <div>{Trasfondo ? content() : "Cargando..."}</div>;
};
export default Trasfondo;
