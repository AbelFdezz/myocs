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
          let response = await axios.post("/data/trasfondos", datos,  {
            headers: {
              Authorization: localStorage.getItem("jwt_token")
            },
          
          });

             navigate("/MisPersonajes/`${UsuarioId}`")
        } catch (error) {
          console.log(error.response);
          navigate("/BorrarPersonajeFail")
     
        }
      };

      const content = () => {
        return (
          <div className="container justify-content-center text-center col-sm-12 col-md-10 col-lg-8 col-xl-6">
          <Fragment>
          <h2>Nuevo trasfondo</h2>

          <form className="row" onSubmit={enviarTrasfondo}>
<div className="containerCuerpo justify-content-center">
            <Form.Label>Título:</Form.Label>
              <input //Título
                type="text"
                name="titulo"
                placeholder=""
                className="form-control text-center"
                onChange={handleInputChange}
              ></input>

<Form.Label>Trasfondo:</Form.Label>

<FloatingLabel controlId="floatingTextarea2" label="">
    <Form.Control
      as="textarea"
      name="cuerpo"
      style={{ height: '250px' }}
      onChange={handleInputChange}
    />
  </FloatingLabel>





<button
            className="btn btn-success mb-4 mt-4"
            type="submit"
            onClick={enviarTrasfondo}
          >
            Enviar
          </button>
       
        </div>


      </form>
      </Fragment>
      </div>
  );
        }
        return <div>{ perfil ? content() : "Cargando..."}</div>;
};

export default NuevoTrasfondo;
