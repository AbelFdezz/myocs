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
          "/data/usuarios/find/misPersonajes",
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
    <div className="container col-sm-12 col-md-6 col-lg-8 col-xl-6">

      <h2>Lista de personajes</h2>
      <hr />
      <div className="nuevopj d-flex justify-content-center mb-5">
      <Link to={`/NuevoPersonaje/${UsuarioId}`}>
        <Button  variant="success">Nuevo personaje</Button>
      </Link>{" "}
      </div>
  
      {ListaPersonajes.map((personaje, i) => {
        return (
          <div key={personaje._id}>
            <div className="container d-grid mb-3 ">
              <Link to={`/MiPersonajes/${personaje._id}`}>
                <Button variant="success" size="lg" mb="-2">
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
