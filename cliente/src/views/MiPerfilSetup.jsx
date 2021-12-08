import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { useParams } from "react-router-dom";

const MiPerfilSetup = () => {
  let { UsuarioId } = useParams();

  const [datos, setDatos] = useState({});

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarUsuario = async (event) => {
    event.preventDefault();
    var data = new FormData();

    for (var key in datos) {
      if (datos[key]) {
        data.append(key, datos[key]);
      }
    }
    try {
      let response = await axios.put(
        `/usuarios/updateusuario/${UsuarioId}`,
        datos,
        {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Fragment>
      <h3>Mi perfil setup</h3> <hr />
      <form className="row" onSubmit={enviarUsuario}>
        <div className="col-md-3">
          <input //usuario
            type="text"
            name="nick"
            placeholder="Usuario"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //password
            type="password"
            name="password"
            placeholder="Contraseña"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //correo
            type="email"
            name="correo"
            placeholder="Correo"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //nombreReal
            type="text"
            name="nombreReal"
            placeholder="Nombre"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //edad
            type="number"
            name="edad"
            placeholder="Edad"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //pronombres
            type="text"
            name="pronombres"
            placeholder="Pronombres"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //sobreMi
            type="textarea"
            name="sobreMi"
            placeholder="Sobre Mi"
            className="form-control"
            style={{ height: "120px" }}
            onChange={handleInputChange}
          ></input>

          <input //enlaces
            type="textarea"
            name="enlaces"
            placeholder="Enlaces a tus redes"
            className="form-control"
            style={{ height: "120px" }}
            onChange={handleInputChange}
          ></input>
          <Link
            to="/MiPerfil"
            className="btn btn-success"
            type="submit"
            onClick={enviarUsuario}
          >
            Enviar
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

export default MiPerfilSetup;
