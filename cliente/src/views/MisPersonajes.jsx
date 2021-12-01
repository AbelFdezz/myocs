import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const MisPersonajes = () => {
  const [ListaPersonajes, setListaPersonajes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios(
          "/usuarios/find/61961d112e805d7e413063da/misPersonajes",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTYxZDExMmU4MDVkN2U0MTMwNjNkYSIsImlhdCI6MTYzNzkxNTY1OSwiZXhwIjoxNjM5MTI1MjU5fQ.tzI2E-VSoQbp2CjPmppvdCfD0x4MgXx1pO9piJPnR6w",
            },
          }
        );
        console.log(response.data);
        setListaPersonajes(response.data.arrayPersonajes);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h2>Lista de personajes</h2>
      <Link to="/NuevoPersonaje">
        <Button variant="success">Nuevo personaje</Button>
      </Link>{" "}
      <hr />
      {ListaPersonajes.map((personaje, i) => {
        return (
          <div>
            <div key={i}>{personaje.nombre} </div>
          </div>
        );
      })}
    </div>
  );
};

export default MisPersonajes;
