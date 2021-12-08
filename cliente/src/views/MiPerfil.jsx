import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import Button from "react-bootstrap/Button";



const MiPerfil = () => {
  
  const [perfil, setPerfil] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios(
          "/usuarios/find/miPerfil",
          {
            headers: {
              Authorization: localStorage.getItem("jwt_token")
              
            },
          }
        );
        setPerfil(response.data.miPerfil);
        // console.log(response.data)
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

const content =() =>{
  return(
    <div>
    <h3>Tu perfil</h3> <hr />
    
    <div> <p>Nick: {perfil.nick}</p></div>
    <div> <p>Correo: {perfil.correo}</p></div>
    <div> <p>Nombre: {perfil.nombreReal}</p></div>
    <div> <p>Pronombres: {perfil.pronombres}</p></div>
    <div> <p>Edad: {perfil.edad}</p></div>
    <div> <p>Sobre mi: {perfil.sobreMi}</p></div>
    <div> <p>Enlaces: {perfil.enlaces}</p></div>

    <hr />
    <Link to={`${perfil._id}`}>
      <Button variant="success">Editar perfil</Button>
    </Link>{" "}
    
  </div>


  )
}

  return (

<div>
{MiPerfil ? content() : "Cargando..."}




</div>
  );
};

export default MiPerfil;
