import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MiPerfilSetup = () => {
  let navigate = useNavigate();
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
        `/data/usuarios/updateusuario/${UsuarioId}`,
        datos,
        {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        }
      );

      navigate("/MiPerfil")
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="container col-sm-12 col-md-8 col-lg-6 col-xl-4 text-center">
    <Fragment  >
      <h2>Edición de tu perfil</h2> <hr />
      <form className="row" onSubmit={enviarUsuario}>
        <div>
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
    </div>
  );
};

export default MiPerfilSetup;
