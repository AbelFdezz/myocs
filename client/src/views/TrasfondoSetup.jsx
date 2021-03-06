import axios from "axios";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const TrasfondoSetup = () => {
  let navigate = useNavigate();
  let { TrasfondoId } = useParams();
  const [datos, setDatos] = useState({ otrosPersonajes: [] });

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
        `/data/trasfondos/update/${TrasfondoId}`,
        datos,
        {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        }
      );

      navigate("/MiPerfil");
    } catch (error) {
      console.log(error.response);
      navigate("/BorrarPersonajeFail");
    }
  };

  const [trasfondo, setTrasfondo] = useState(null);
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(`/data/trasfondos/find/${TrasfondoId}`, {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        });

        setTrasfondo(response.data.trasfondo);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const BuscarPersonaje = async (event) => {
    event.preventDefault();

    try {
      let response = await axios.get(`/data/personajes/nombre/${nombre}`, {
        headers: {
          Authorization: localStorage.getItem("jwt_token"),
        },
      });

      if (response.data.personaje == null) {
        alert("No se encuentra el personaje");
        return;
      }
     

      setDatos({
        ...datos,
        otrosPersonajes: [
          ...datos.otrosPersonajes,
          response.data.personaje._id,
        ],
      });
      alert("Personaje hallado, lo puedes a??adir");
    } catch (err) {
      console.log(err);
    }
  };

  const content = () => {
    return (
      <div className="container ">
        <Fragment>
          <h2>Edici??n de trasfondo</h2>

          <form className="row d-flex row justify-content-center" onSubmit={enviarTrasfondo}>
            <div className="formu col-sm-12 col-lg-8">
              <Form.Label>T??tulo:</Form.Label>
              <input //T??tulo
                type="text"
                name="titulo"
                placeholder="T??tulo"
                defaultValue={trasfondo.titulo}
                className="form-control"
                onChange={handleInputChange}
              ></input>
              <hr />

              <Form.Label>Personajes invitados:</Form.Label>
              <input //personajes invitados
                type="text"
                name="otrosPersonajes"
                placeholder="Nombre del personaje"
                className="form-control"
                onChange={(e) => setNombre(e.target.value)}
              ></input>
<div className="botonesPJ d-flex justify-content-around">
              <Button
                variant="outline-secondary"
                type="submit"
                onClick={BuscarPersonaje}
              >
                {" "}
                Buscar el personaje
              </Button>

              <button
                className="btn btn-success"
                type="submit"
                onClick={enviarTrasfondo}
              >
                A??adir personaje
              </button>
              </div>
              <hr />
              <Form.Label>Trasfondo:</Form.Label>

              <FloatingLabel controlId="floatingTextarea2" label="">
                <Form.Control
                  as="textarea"
                  name="cuerpo"
                  defaultValue={trasfondo.cuerpo}
                  style={{ height: "200px" }}
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
      </div>
    );
  };
  return <div>{trasfondo ? content() : "Cargando..."}</div>;
};

export default TrasfondoSetup;
