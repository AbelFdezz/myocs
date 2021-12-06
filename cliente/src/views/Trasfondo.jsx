import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";


const Trasfondo = () => {
  let { TrasfondoId } = useParams();

  const [Trasfondo, setTrasfondo] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(`/trasfondos/find/${TrasfondoId}`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTYxZDExMmU4MDVkN2U0MTMwNjNkYSIsImlhdCI6MTYzNzkxNTY1OSwiZXhwIjoxNjM5MTI1MjU5fQ.tzI2E-VSoQbp2CjPmppvdCfD0x4MgXx1pO9piJPnR6w",
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
<div> <p>Titulo: {Trasfondo[0].personaje}</p></div>
<div> <p>Cuerpo: {Trasfondo[0].cuerpo}</p></div>
<div> <p>ID???: {Trasfondo._id}</p></div>


</div>
    );
  }

  return <div>{Trasfondo ? content() : "Cargando..."}</div>;
};
export default Trasfondo;
