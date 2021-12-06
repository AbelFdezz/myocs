import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import {useParams} from "react-router"
import { Fragment } from "react";


const NuevoTrasfondo = () => {
  let { PersonajeId } = useParams();


    const [datos, setDatos] = useState({});
  
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
          let response = await axios.post("/trasfondos", data, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTYxZDExMmU4MDVkN2U0MTMwNjNkYSIsImlhdCI6MTYzODgxMzIxMCwiZXhwIjoxNjQwMDIyODEwfQ.RCCGJ5GJRA7KEQ7S4lviJMrhIdNYqOO9gfyRW4SiNf8",
            },
          });
          console.log(response);
        } catch (error) {
          console.log(error.response);
        }
      };

      return (
        <Fragment>
          <h2>Nuevo trasfondo</h2>
    
          <form className="row" onSubmit={enviarTrasfondo}>
<div className="col-md-3">
            <Form.Label>Título:</Form.Label>
              <input //Título
                type="text"
                name="titulo"
                placeholder="Título"
                className="form-control"
                onChange={handleInputChange}
              ></input>

<div className="col-md-3">
            <Form.Label>Protagonista:</Form.Label>
            <Form.Control value= {PersonajeId}
                type="text"
                name="personaje"
              
                className="form-control"
                onChange={handleInputChange}
                disabled />


<Form.Label>Personaje invitado:</Form.Label>
              <input //personajes invitados
                type="text"
                name="Personaje invitado"
                placeholder="Título"
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
        </div>
      </form>
      </Fragment>
  );
};

export default NuevoTrasfondo;
