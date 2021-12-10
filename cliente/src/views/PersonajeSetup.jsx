import axios from "axios";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Navigate, useNavigate } from "react-router-dom";

const PersonajeSetup = () => {
  let navigate = useNavigate();
  let { PersonajeId } = useParams();

  const [datos, setDatos] = useState({});

  const handleInputChange2 = (event2) => {
    setDatos({
      ...datos,
      [event2.target.name]: event2.target.value,
    });
  };

  const handleInputChangeSelect = (event) => {
    console.log(event);
    setDatos({
      ...datos,
      juego: event.target.value,
    });
  };

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
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
      let response = await axios.put(
        `/personajes/update/${PersonajeId}`,
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

  const enviarFoto = async (event2) => {
    event2.preventDefault();
    var data = new FormData();

    for (var key in datos) {
      if (datos[key]) {
        data.append(key, datos[key]);
      }
    }
    try {
      let response = await axios.put(
        `/personajes/imagen/update/${PersonajeId}`,
        data,
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
  const [personajeValues, setPersonajeValues] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(`/personajes/find/${PersonajeId}`, {
          
            headers: {
              Authorization: localStorage.getItem("jwt_token")
              
            },
          });
  
        setPersonajeValues(response.data.personajes);

      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);


  const content = () => {

  return (
    <Fragment>
      <h2>Editar personaje</h2>
   

      <form className="row" onSubmit={enviarFoto}>
      <div className="col-md-3">
      <Form.Label>Imagen</Form.Label>
          <Form.Control //FOTO
            type="file"
            size="sm"
            name="imagen"
            className="form-control"
            onSubmit={enviarFoto}
            onChange={(event2) => {
              setDatos({
                ...datos,
                imagen: event2.target.files[0],
              });
            }}
          />
           <button
            className="btn btn-success"
            type="submit"
            onClick={enviarFoto}
          >
            Cambiar foto
          </button>
              </div>
      </form>




{console.log(personajeValues)}
      <form className="row" onSubmit={enviarPersonaje}>
        <div className="col-md-3">
          <input //nombre
            type="text"
            name="nombre"
            placeholder={personajeValues.nombre}
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
            placeholder={personajeValues.detallesJuego}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //estado
            type="text"
            name="estado"
            placeholder={personajeValues.estado}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //autor
            type="text"
            name="autor"
            placeholder={personajeValues.autor}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //edad
            type="number"
            name="edad"
            placeholder={personajeValues.edad}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //genero
            type="text"
            name="genero"
            placeholder={personajeValues.genero}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //idiomas
            type="text"
            name="idiomas"
            placeholder={personajeValues.idiomas}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //lugarNacimiento
            type="text"
            name="lugarNacimiento"
            placeholder={personajeValues.lugarNacimiento}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //lugarResidencia
            type="text"
            name="lugarResidencia"
            placeholder={personajeValues.lugarNacimiento}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //peso
            type="text"
            name="peso"
            placeholder={personajeValues.peso}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //raza
            type="text"
            name="raza"
            placeholder={personajeValues.raza}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //colorOjos
            type="text"
            name="colorOjos"
            placeholder={personajeValues.colorOjos}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //colorPelo
            type="text"
            name="colorPelo"
            placeholder={personajeValues.colorPelo}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //colorPiel
            type="text"
            name="colorPiel"
            placeholder={personajeValues.colorPiel}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //gafas
            type="text"
            name="gafas"
            placeholder={personajeValues.gafas}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //
            type="text"
            name="lentillas"
            placeholder={personajeValues.lentillas}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //formaCara
            type="text"
            name="formaCara"
            placeholder={personajeValues.formaCara}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //rasgosDistintivos
            type="text"
            name="rasgosDistintivos"
            placeholder={personajeValues.rasgosDistintivos}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //estiloVestimenta
            type="text"
            name="estiloVestimenta"
            placeholder={personajeValues.estiloVestimenta}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //habitos
            type="text"
            name="habitos"
            placeholder={personajeValues.habitos}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //aficiones
            type="text"
            name="aficiones"
            placeholder={personajeValues.aficiones}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //refranFavorito
            type="text"
            name="refranFavorito"
            placeholder={personajeValues.refranFavorito}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //formahablar
            type="text"
            name="formaHablar"
            placeholder={personajeValues.formaHablar}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //enfermedades
            type="text"
            name="enfermedades"
            placeholder={personajeValues.enfermedades}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //alergias
            type="text"
            name="alergias"
            placeholder={personajeValues.alergias}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //minusvalías
            type="text"
            name="minusvalias"
            placeholder={personajeValues.minusvalias}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //socioeconomiaPeque
            type="text"
            name="socioeconomiaPeque"
            placeholder={personajeValues.socioeconomiaPeque}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //socioeconomiaActual
            type="text"
            name="socioeconomiaActual"
            placeholder={personajeValues.socioeconomiaActual}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //manias
            type="text"
            name="manias"
            placeholder={personajeValues.manias}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //tics
            type="text"
            name="tics"
            placeholder={personajeValues.tics}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //estudios
            type="text"
            name="estudios"
            placeholder={personajeValues.estudios}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //trabajo
            type="text"
            name="trabajo"
            placeholder={personajeValues.trabajo}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //mascotas
            type="text"
            name="mascotas"
            placeholder={personajeValues.mascotas}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //monturas
            type="text"
            name="monturas"
            placeholder={personajeValues.monturas}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //mayorDefecto
            type="text"
            name="mayorDefecto"
            placeholder={personajeValues.mayorDefecto}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //mayorVirtud
            type="text"
            name="mayorVirtud"
            placeholder={personajeValues.mayorVirtud}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //mayorSecreto
            type="text"
            name="mayorSecreto"
            placeholder={personajeValues.mayorSecreto}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //metasLargoPlazo
            type="text"
            name="metasLargoPlazo"
            placeholder={personajeValues.metasLargoPlazo}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //loQueMasImporta
            type="text"
            name="loQueMasImporta"
            placeholder={personajeValues.loQueMasImporta}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //puntoFuerte
            type="text"
            name="puntoFuerte"
            placeholder={personajeValues.puntoFuerte}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //puntoDebil
            type="text"
            name="puntoDebil"
            placeholder={personajeValues.puntoDebil}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //manejoIra
            type="number"
            name="ManejoIra"
            placeholder={personajeValues.manejoIra}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //manejotristeza
            type="number"
            name="manejoTristeza"
            placeholder={personajeValues.manejoTristeza}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //ManejoConflictos
            type="number"
            name="manejoConflictos"
            placeholder={personajeValues.manejoConflictos}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //adaptaciónCambios
            type="number"
            name="adaptacionCambios"
            placeholder={personajeValues.adaptacionCambios}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //adaptacionPerdidas
            type="number"
            name="adaptacionPerdidas"
            placeholder={personajeValues.adaptacionPerdidas}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //motivaciones
            type="text"
            name="motivaciones"
            placeholder={personajeValues.motivaciones}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //miedos
            type="text"
            name="miedos"
            placeholder={personajeValues.miedos}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //queLeHaceFeliz
            type="text"
            name="queLeHaceFeliz"
            placeholder={personajeValues.queLeHaceFeliz}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //nivelEmpatia
            type="number"
            name="nivelEmpatia"
            placeholder={personajeValues.nivelEmpatia}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //religion
            type="text"
            name="religion"
            placeholder={personajeValues.religion}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //creenciasEspirituales
            type="number"
            name="creenciasEspirituales"
            placeholder={personajeValues.creenciasEspirituales}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //padre
            type="text"
            name="padre"
            placeholder={personajeValues.padre}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //madre
            type="text"
            name="madre"
            placeholder={personajeValues.madre}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //hermanos
            type="text"
            name="hermanos"
            placeholder={personajeValues.hermanos}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //pareja
            type="text"
            name="pareja"
            placeholder={personajeValues.pareja}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //hijos
            type="text"
            name="hijos"
            placeholder={personajeValues.hijos}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //amigos
            type="text"
            name="amigos"
            placeholder={personajeValues.amistades}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //vecinos
            type="text"
            name="vecinos"
            placeholder={personajeValues.vecinos}
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //enemigos
            type="text"
            name="enemigos"
            placeholder={personajeValues.enemigos}
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

export default PersonajeSetup;

