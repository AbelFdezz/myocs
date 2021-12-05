import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios"

const CrearTrasfondo = () => {
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
          let response = await axios.post("/personajes", data, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTYxZDExMmU4MDVkN2U0MTMwNjNkYSIsImlhdCI6MTYzODM3NTM4NywiZXhwIjoxNjM5NTg0OTg3fQ._qvQR1Kr7zmcFcJbKtfNRJSSsnnQbK_cLRG_OTPNY_w",
            },
          });
          console.log(response);
        } catch (error) {
          console.log(error.response);
        }
      };

      return (
 <div>
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



<Form.Label>Personaje invitado:</Form.Label>
              <input //personajes invitados
                type="text"
                name="Personaje invitado"
                placeholder="Título"
                className="form-control"
                onChange={handleInputChange}
              ></input>

<Form.Label>Trasfondo:</Form.Label>
<input //Cuerpo

                type="textarea"
                name="cuerpo"
                placeholder="Escribe su historia"
                className="form-control"
                height= '100px'
                onChange={handleInputChange}
              ></input>

<button
            className="btn btn-success"
            type="submit"
            onClick={enviarTrasfondo}
          >
            Enviar
          </button>
          <br />
        </div>
      </form>
      </div>
  );
};

export default CrearTrasfondo;
