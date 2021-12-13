import React from "react";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import {useParams} from "react-router"
import { Fragment } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NuevoTrasfondo = () => {
  let navigate = useNavigate();
  let { PersonajeId } = useParams();
  const [perfil, setPerfil] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         let response = await axios(
//           "/usuarios/find/miPerfil",
//           {
//             headers: {
//               Authorization: localStorage.getItem("jwt_token")
              
//             },
//           }
//         );
//         setPerfil(response.data.miPerfil._id);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getData();
//   }, []);
// console.log(perfil)

    const [datos, setDatos] = useState({
      personaje: PersonajeId,

      

    });
  
    const handleInputChange = (event) => {
      setDatos({
        ...datos,
        [event.target.name]: event.target.value,
      });
    };

    const enviarTrasfondo = async (event) => {
        event.preventDefault();
        var data = new FormData();
    
        for (var key in datos) {
          if (datos[key]) {
            data.append(key, datos[key]);
          }
        }
        try {
          let response = await axios.post("/trasfondos", datos,  {
            headers: {
              Authorization: localStorage.getItem("jwt_token")
              
            },
          
          });
      
             navigate("/MisPersonajes/`${UsuarioId}`")
        } catch (error) {
          navigate("/BorrarPersonajeFail")
          console.log(error.response);
     
        }
      };

      const content = () => {
        return (
          <Fragment>
          <h2>Nuevo trasfondo</h2>
    
          <form className="row" onSubmit={enviarTrasfondo}>
<div className="col-md-3">
            <Form.Label>Título:</Form.Label>
              <input //Título
                type="text"
                name="titulo"
                placeholder=""
                className="form-control"
                onChange={handleInputChange}
              ></input>


<Form.Label>Personaje invitado:</Form.Label>
              <input //personajes invitados
                type="text"
                name="otrosPersonajes"
                placeholder=""
                className="form-control"
                onChange={handleInputChange}
              ></input>

<Form.Label>Trasfondo:</Form.Label>

<FloatingLabel controlId="floatingTextarea2" label="">
    <Form.Control
      as="textarea"
      name="cuerpo"

      style={{ height: '100px' }}
      onChange={handleInputChange}
    />
  </FloatingLabel>





<button
            className="btn btn-success"
            type="submit"
            onClick={enviarTrasfondo}
          >
            Enviar
          </button>
          <br />
        </div>
<hr />

      </form>
      </Fragment>
  );
        }
        return <div>{ perfil ? content() : "Cargando..."}</div>;
};

export default NuevoTrasfondo;
