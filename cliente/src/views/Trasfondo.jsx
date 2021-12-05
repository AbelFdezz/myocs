import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Trasfondo = () => {
  let { TrasfondoId } = useParams();

console.log(TrasfondoId)
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
        setTrasfondo(response.data);
        console.log(response.data)
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const content = () => {
    return (
<div>trasfondo???</div>
    )
  };

  return <div>{Trasfondo ? content() : "Cargando..."}</div>;
};
export default Trasfondo;
