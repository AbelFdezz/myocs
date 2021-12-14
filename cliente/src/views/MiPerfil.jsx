import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const MiPerfil = () => {
  const [perfil, setPerfil] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios("/usuarios/find/miPerfil", {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        });
        setPerfil(response.data.miPerfil);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const content = () => {
    return (
      <div className="container col-sm-12 col-md-8 col-lg-6 col-xl-4 text-center">
        <h5>Bienvenid@ {perfil.nick}</h5>
        <div className="containerComienza d-flex justify-content-around mb-3">
          <Link to={`/MisPersonajes/${perfil._id}`}>
            <Button variant="success">Personajes</Button>
          </Link>{" "}
          <Link to={"/Recursos"}>
            <Button variant="success">Recursos</Button>
          </Link>{" "}
          <Link to={`${perfil._id}`}>
            <Button variant="success">Tus datos</Button>
          </Link>{" "}
        </div>

        <div className="containerPerfil">
          <p>Alias: <br/>{perfil.nick}</p>
  
          <p>Correo: <br/>{perfil.correo}</p>
          <p>Nombre: <br/>{perfil.nombreReal}</p>
          <p>Pronombres: {perfil.pronombres}</p>
          <p>Edad: {perfil.edad}</p> <hr />
          <p>Sobre mi: <br/> {perfil.sobreMi}</p> <hr/>
      
        </div>
      </div>
    );
  };
  return <div>{MiPerfil ? content() : "Cargando..."}</div>;
};
export default MiPerfil;
