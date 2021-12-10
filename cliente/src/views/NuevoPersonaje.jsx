import React from "react";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import {useParams} from "react-router"
import { Navigate, useNavigate } from "react-router-dom";

const NuevoPersonaje = () => {
  let navigate = useNavigate();
  let { UsuarioId } = useParams();
  console.log(UsuarioId)


  const [datos, setDatos] = useState({

    propietario: UsuarioId
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  const handleInputChangeSelect = (event) => {
    console.log(event);
    setDatos({
      ...datos,
      juego: event.target.value,
    });
  };

  const enviarPersonaje = async (event) => {
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
          Authorization: localStorage.getItem("jwt_token"),
        },
      });

      navigate("/MisPersonajes/`${UsuarioId}`")
    } catch (error) {
      console.log(error.response);
    }
  };

  const [juegos, setJuegos] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get("/juegos", {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        });
        setJuegos(response.data.juegos);
   
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  const content = () => {
    return (
      <Fragment>
        <h2>Nuevo personaje</h2>

        <form className="row" onSubmit={enviarPersonaje}>
          <div className="col-md-3">
            <input //nombre
              type="text"
              name="nombre"
              placeholder="nombre"
              className="form-control"
              onChange={handleInputChange}
            ></input>

          <Form.Select aria-label="Default select example" name="juego" onChange={handleInputChange}>
        <option>Elige tu juego</option>

 {juegos.map ((game, i) => {
          return (
                <option key={i} name="juego" value={game._id}>{game.nombre}</option>
          );
        })} 

  </Form.Select> 
            <input //detallesJuego
              type="text"
              name="detallesJuego"
              placeholder="Concreta características del juego"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //estado
              type="text"
              name="estado"
              placeholder="Estado: Jugando? a qué jugó?, Murió?"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //autor
              type="text"
              name="autor"
              placeholder="Autor"
              className="form-control"
              onChange={handleInputChange}
            ></input>


            <Form.Label>Imagen</Form.Label>
            <Form.Control //FOTO
              type="file"
              size="sm"
              name="imagen"
              className="form-control"
              onChange={(event) => {
                setDatos({
                  ...datos,
                  imagen: event.target.files[0],
                });
              }}
            />

            <input //edad
              type="number"
              name="edad"
              placeholder="Edad"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //genero
              type="text"
              name="genero"
              placeholder="Género"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //idiomas
              type="text"
              name="idiomas"
              placeholder="Idiomas"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //lugarNacimiento
              type="text"
              name="lugarNacimiento"
              placeholder="Lugar de nacimiento"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //lugarResidencia
              type="text"
              name="lugarResidencia"
              placeholder="Lugar de residencia"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //peso
              type="text"
              name="peso"
              placeholder="Peso"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //raza
              type="text"
              name="raza"
              placeholder="Raza"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //colorOjos
              type="text"
              name="colorOjos"
              placeholder="Color de ojos"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //colorPelo
              type="text"
              name="colorPelo"
              placeholder="Color del pelo"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //colorPiel
              type="text"
              name="colorPiel"
              placeholder="Color de piel"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //gafas
              type="text"
              name="gafas"
              placeholder="Gafas ? descripción si las tiene"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //
              type="text"
              name="lentillas"
              placeholder="Lentillas?"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //formaCara
              type="text"
              name="formaCara"
              placeholder="Forma de la cara"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //rasgosDistintivos
              type="text"
              name="rasgosDistintivos"
              placeholder="Rasgos distintivos"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //estiloVestimenta
              type="text"
              name="estiloVestimenta"
              placeholder="Forma de vestir"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //habitos
              type="text"
              name="habitos"
              placeholder="Hábitos"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //aficiones
              type="text"
              name="aficiones"
              placeholder="Aficiones"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //refranFavorito
              type="text"
              name="refranFavorito"
              placeholder="Refrán favorito"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //formahablar
              type="text"
              name="formaHablar"
              placeholder="Forma de hablar"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //enfermedades
              type="text"
              name="enfermedades"
              placeholder="Enfermedades"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //alergias
              type="text"
              name="alergias"
              placeholder="Alergias"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //minusvalías
              type="text"
              name="minusvalias"
              placeholder="Minusvalías"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //socioeconomiaPeque
              type="text"
              name="socioeconomiaPeque"
              placeholder="Socioeconomía en su infancia"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //socioeconomiaActual
              type="text"
              name="socioeconomiaActual"
              placeholder="Socioeconomía en la actualidad"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //manias
              type="text"
              name="manias"
              placeholder="Manías"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //tics
              type="text"
              name="tics"
              placeholder="Tics"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //estudios
              type="text"
              name="estudios"
              placeholder="Estudios"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //trabajo
              type="text"
              name="trabajo"
              placeholder="Trabajo"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //mascotas
              type="text"
              name="mascotas"
              placeholder="Mascotas"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //monturas
              type="text"
              name="monturas"
              placeholder="Monturas"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //mayorDefecto
              type="text"
              name="mayorDefecto"
              placeholder="Mayor defecto"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //mayorVirtud
              type="text"
              name="mayorVirtud"
              placeholder="Mayor virtud"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //mayorSecreto
              type="text"
              name="mayorSecreto"
              placeholder="Mayor secreto"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //metasLargoPlazo
              type="text"
              name="metasLargoPlazo"
              placeholder="Metas a largo plazo"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //loQueMasImporta
              type="text"
              name="loQueMasImporta"
              placeholder="Lo que más le importa"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //puntoFuerte
              type="text"
              name="puntoFuerte"
              placeholder="Su punto fuerte"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //puntoDebil
              type="text"
              name="puntoDebil"
              placeholder="Su punto débil"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //manejoIra
              type="number"
              name="ManejoIra"
              placeholder="Manejo de la ira. (0/10)"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //manejotristeza
              type="number"
              name="manejoTristeza"
              placeholder="Manejo de la tristeza. (0/10)"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //ManejoConflictos
              type="number"
              name="manejoConflictos"
              placeholder="Manejo de conflictos. (0/10)"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //adaptaciónCambios
              type="number"
              name="adaptacionCambios"
              placeholder="Adaptación a los cambios (0/10)"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //adaptacionPerdidas
              type="number"
              name="adaptacionPerdidas"
              placeholder="Adaptación a las pérdidas (0/10)"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //motivaciones
              type="text"
              name="motivaciones"
              placeholder="Motivaciones en la vida"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //miedos
              type="text"
              name="miedos"
              placeholder="Miedos"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //queLeHaceFeliz
              type="text"
              name="queLeHaceFeliz"
              placeholder="Qué le hace felíz?"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //nivelEmpatia
              type="number"
              name="nivelEmpatia"
              placeholder="Nivel de empatía (0/10)"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //religion
              type="text"
              name="religion"
              placeholder="Religión"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //creenciasEspirituales o Nivel de espiritualidad
              type="number"
              name="creenciasEspirituales"
              placeholder="Nivel de fe. (0/10)"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //padre
              type="text"
              name="padre"
              placeholder="Quién es/fue su padre?"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //madre
              type="text"
              name="madre"
              placeholder="Quién es/fue su madre?"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //hermanos
              type="text"
              name="hermanos"
              placeholder="¿Tiene hermanos? ¡Cuenta, cuenta!"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //pareja
              type="text"
              name="pareja"
              placeholder="Situación sentimental"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //hijos
              type="text"
              name="hijos"
              placeholder="Descendencia"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //amigos
              type="text"
              name="amigos"
              placeholder="Amistades"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //vecinos
              type="text"
              name="vecinos"
              placeholder="¿Algo reseñable en su vecindario?"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <input //enemigos
              type="text"
              name="enemigos"
              placeholder="Enemigos"
              className="form-control"
              onChange={handleInputChange}
            ></input>

            <button
              className="btn btn-success"
              type="submit"
              onClick={enviarPersonaje}
            >
              Enviar
            </button>
            <br />
          </div>
        </form>
      </Fragment>
    );
  };

  return <div>{juegos ? content() : "Cargando..."}</div>;
};
export default NuevoPersonaje;
