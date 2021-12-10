import axios from "axios";
import { useState } from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import  FloatingLabel  from "react-bootstrap/FloatingLabel";
import { Navigate, useNavigate } from "react-router-dom";

const TrasfondoSetup = () => {
  let navigate = useNavigate();
    let { TrasfondoId } = useParams();
  
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
        let response = await axios.put(
          `/trasfondos/update/${TrasfondoId}`,
          datos,
          {
            headers: {
              Authorization: localStorage.getItem("jwt_token"),
            },
          }
        );
        console.log(response);
        navigate("/MiPerfil")
      } catch (error) {
        console.log(error.response);
      }
    };

return (
    <Fragment>
      <h2>Edición de trasfondo</h2>

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

  </form>
  </Fragment>
);
};

export default TrasfondoSetup;