import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";


const MisPersonajes = () => {
  let { UsuarioId } = useParams();

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
      <Link to={`/NuevoPersonaje/${UsuarioId}`}>
        <Button variant="success">Nuevo personaje</Button>
      </Link>{" "}
      <hr />

      
      {ListaPersonajes.map((personaje, i) => {
        return (
          <div key={personaje._id}>
            <div className="d-grid gap-2 mb-3  col-lg-6 ">
              <Link to={`/MiPersonajes/${personaje._id}`}>
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
