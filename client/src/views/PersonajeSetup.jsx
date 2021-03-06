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
        `/data/personajes/update/${PersonajeId}`,
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
      navigate("/BorrarPersonajeFail")
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
        `/data/personajes/imagen/update/${PersonajeId}`,
        data,
        {
          headers: {
            Authorization: localStorage.getItem("jwt_token"),
          },
        }
      );
  
      navigate(`/misPersonajes/${PersonajeId}`)
    } catch (error) {
      console.log(error.response);
    }
  };


  const [juegos, setJuegos] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get("/data/juegos", {
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
        let response = await axios.get(`/data/personajes/find/${PersonajeId}`, {
          
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
    <div className="container col-sm-12 col-md-6 col-lg-8 col-xl-6">
    <Fragment >
      <h2>Editar personaje</h2>

      <form className="row d-flex justify-content-center center-block" onSubmit={enviarFoto}>
      <div>
      <Form.Label>Imagen</Form.Label>
          <Form.Control               //FOTO
            type="file"
            size="sm"
            name="imagen"
            className="form-control col-sm-10 col-md-6 col-lg-4 col-xl-3"
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





      <form className="row" onSubmit={enviarPersonaje}>
        <div>
          <input //nombre
            type="text"
            name="nombre"
            placeholder="Nombre"
            className="form-control"
            onChange={handleInputChange}
          ></input>

<Form.Select className="containerSelect text-center" aria-label="Default select example" name="juego" onChange={handleInputChange}>
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
            placeholder="Detalles del juego"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //estado
            type="text"
            name="estado"
            placeholder="Estado"
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
            placeholder="G??nero"
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
            placeholder="Color de pelo"
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
            placeholder="Gafas"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //
            type="text"
            name="lentillas"
            placeholder="Lentillas"
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
            placeholder="H??bitos"
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
            placeholder="Refr??n favorito"
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

          <input //minusval??as
            type="text"
            name="minusvalias"
            placeholder="Minusval??as"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //socioeconomiaPeque
            type="text"
            name="socioeconomiaPeque"
            placeholder="Socioeconom??a en su infancia"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //socioeconomiaActual
            type="text"
            name="socioeconomiaActual"
            placeholder="Socioeconom??a actual"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //manias
            type="text"
            name="manias"
            placeholder="Man??as"
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
            placeholder="trabajo"
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
            placeholder="Lo que m??s le importa"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //puntoFuerte
            type="text"
            name="puntoFuerte"
            placeholder="Punto fuerte"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //puntoDebil
            type="text"
            name="puntoDebil"
            placeholder="Punto D??bil"
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
            placeholder="Manejo de los conflictos. (0/10)"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //adaptaci??nCambios
            type="number"
            name="adaptacionCambios"
            placeholder="Adaptaci??n a los cambios. (0/10)"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //adaptacionPerdidas
            type="number"
            name="adaptacionPerdidas"
            placeholder="Adaptaci??n a las p??rdidas (0/10)"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //motivaciones
            type="text"
            name="motivaciones"
            placeholder="Motivaciones"
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
            placeholder="??Qu?? le hace fel??z?"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //nivelEmpatia
            type="number"
            name="nivelEmpatia"
            placeholder="Nivel de empat??a"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //religion
            type="text"
            name="religion"
            placeholder="Religi??n"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //creenciasEspirituales
            type="number"
            name="creenciasEspirituales"
            placeholder="Nivel de fe. (0/10)"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //padre
            type="text"
            name="padre"
            placeholder="Qui??n es/fue su padre?"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //madre
            type="text"
            name="madre"
            placeholder="Qui??n es/fue su madre?"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //hermanos
            type="text"
            name="hermanos"
            placeholder="??Tiene hermanos? ??Cuenta, cuenta!"
            className="form-control"
            onChange={handleInputChange}
          ></input>

          <input //pareja
            type="text"
            name="pareja"
            placeholder="Situaci??n sentimental"
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
            placeholder="??Algo rese??able en su vecindario?"
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
    </div>
  );


};
return <div>{juegos ? content() : "Cargando..."}</div>;
};

export default PersonajeSetup;

