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
          "/usuarios/find/misPersonajes",
          {
            headers: {
              Authorization: localStorage.getItem("jwt_token")
              
            },
          }
        );
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
            <div className="d-grid gap-2 mb-3  col-lg-6 ">
              <Link to={`${personaje._id}`}>
                <Button variant="success" size="lg">
                  <div key={i}>{personaje.nombre} </div>
                </Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MisPersonajes;
