
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Personaje = () => {
  let { PersonajeId } = useParams();
  const url = window.location.href

  function alerta() {
    alert("URL copiada");
  }

  const [Personaje, setPersonaje] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(`/data/personajes/find/${PersonajeId}`, {
          
            headers: {
              Authorization: localStorage.getItem("jwt_token")
              
            },
          });
  
        setPersonaje(response.data.personajes);

      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

const content = () =>{
 
return(
<div className="container justify-content-center col-sm-12 col-md-8 col-lg-6 col-xl-5">
 
  <img  src= {Personaje.imagen} alt="Avatar" width= "100%" />
  <div className="pj1 d-flex justify-content-around mt-3 mb-2">
  <Link to={`/MisPersonajes/${PersonajeId}/Setup`}>
      <Button variant="success">Editar personaje</Button>
    </Link>{" "}
   
    <CopyToClipboard text={url}>
    <Button variant="success" onClick={alerta}>Copiar URL</Button>
  </CopyToClipboard>
  </div>
<div className="pj2 d-flex row justify-content-center">
   <p>Nombre: {Personaje.nombre}</p>
  <div> <p>Autor: <br/>{Personaje.autor}</p></div>
  <div> <p>Propietario: <br/>{Personaje.propietario.nick}</p></div>
  <div> <p>Juego: {Personaje.juego.nombre}</p></div>
  <div> <p>Tipo de partida: <br/> {Personaje.detallesJuego}</p></div>
  <div> <p>Estado: <br/>{Personaje.estado} </p></div>
<p>Trasfondos:</p>
{Personaje.trasfondo.map((trasfondo, i) => {
          return (
            <div key={trasfondo._id}>
              <div className="d-grid gap-2 mb-3  col-lg-6 ">
              <Link to={`/MisPersonajes/Trasfondo/${trasfondo._id}`}>
                <Button variant="success" size="s">
                <div key={i}>{trasfondo.titulo} </div>
                </Button>
              </Link>
              </div>
              </div>
          );
        })}
              <Link to={`/NuevoTrasfondo/${Personaje._id}`}>
        <Button variant="success">Añadir trasfondo</Button>
      </Link>{" "}
      <p>Trasfondos en los que aparece:</p>

      {Personaje.otrosTrasfondos.map((trasfondo, i) => {
          return (
            <div key={trasfondo._id}>
              <div className="d-grid gap-2 mb-3  col-lg-6 ">
              <Link to={`/MisPersonajes/Trasfondo/${trasfondo._id}`}>
                <Button variant="success" size="s">
                <div>{trasfondo.titulo} </div>
                </Button>
              </Link>
              </div>
              </div>
          );
        })}

  <div> <p>Edad: {Personaje.edad}</p></div>
  <div> <p>Género: {Personaje.genero}</p></div>
  <div> <p>Idiomas: {Personaje.idiomas}</p></div>
  <div> <p>Lugar de nacimiento: {Personaje.lugarNacimiento}</p></div>
  <div> <p>Lugar de residencia: {Personaje.lugarResidencia}</p></div>
  <div> <p>Peso: {Personaje.peso}</p></div>
  <div> <p>Raza: {Personaje.raza}</p></div>
  <div> <p>Color de ojos: {Personaje.colorOjos}</p></div>
  <div> <p>Color de pelo: {Personaje.colorPelo}</p></div>
  <div> <p>Color de piel: {Personaje.colorPiel}</p></div>
  <div> <p>Gafas: {Personaje.gafas}</p></div>
  <div> <p>Lentillas: {Personaje.lentillas}</p></div>
  <div> <p>Forma de su cara: <br/>{Personaje.formaCara}</p></div>
  <div> <p>Rasgos distintivos: <br/>{Personaje.rasgosDistintivos}</p></div>
  <div> <p>Forma de vestir: <br/>{Personaje.estiloVestimenta}</p></div>
  <div> <p>Hábitos:<br/>{Personaje.habitos}</p></div>
  <div> <p>Aficiones:<br/>{Personaje.aficiones}</p></div>
  <div> <p>Refrán favorito: <br/>{Personaje.refranFavorito}</p></div>
  <div> <p>Forma de hablar: <br/>{Personaje.formaHablar}</p></div>
  <div> <p>Enfermedades: <br/>{Personaje.enfermedades}</p></div>
  <div> <p>Alergias: <br/>{Personaje.alergias}</p></div>
  <div> <p>Minusvalías: <br/>{Personaje.minusvalias}</p></div>
  <div> <p>Socioeconomía durante su infancia:<br/>{Personaje.socioeconomiaPeque}</p></div>
  <div> <p>Socioeconomía actual:<br/>{Personaje.socioeconomiaActual}</p></div>
  <div> <p>Manías: <br/>{Personaje.manias}</p></div>
  <div> <p>Tics: <br/>{Personaje.tics}</p></div>
  <div> <p>Estudios:<br/>{Personaje.estudios}</p></div>
  <div> <p>Trabajo:<br/>{Personaje.trabajo}</p></div>
  <div> <p>Mascotas:<br/>{Personaje.mascotas}</p></div>
  <div> <p>Monturas:<br/>{Personaje.monturas}</p></div>
  <div> <p>Mayor defecto:<br/>{Personaje.mayorDefecto}</p></div>
  <div> <p>mayor virtud: <br/>{Personaje.mayorVirtud}</p></div>
  <div> <p>Mayor secreto: <br/>{Personaje.mayorSecreto}</p></div>
  <div> <p>Metas a largo plazo: <br/>{Personaje.metasLargoPlazo}</p></div>
  <div> <p>Lo que más le importa: <br/>{Personaje.LoQueMasImporta}</p></div>
  <div> <p>Punto fuerte: <br/>{Personaje.puntoFuerte}</p></div>
  <div> <p>Punto débil:<br/>{Personaje.puntoDebil}</p></div>
  <div> <p>Manejo de la ira: (0/10) - {Personaje.manejoIra}</p></div>
  <div> <p>Nivel de empatía: (0/10) - {Personaje.nivelEmpatia}</p></div>
  <div> <p>Manejo de la tristeza: (0/10) - {Personaje.manejoTristeza}</p></div>
  <div> <p>Manejo de conflictos: (0/10) - {Personaje.manejoConflictos}</p></div>
  <div> <p>Adaptación a los cambios: (0/10) - {Personaje.adaptacionCambios}</p></div>
  <div> <p>Adaptación a las pérdidas: (0/10) - {Personaje.adaptacionPerdidas}</p></div>
  <div> <p>Nivel de fé: (0/10) - {Personaje.creenciasEspirituales}</p></div>
  <div> <p>Religión: {Personaje.religion}</p></div>
  <div> <p>Motivaciones: <br/>{Personaje.motivaciones}</p></div>
  <div> <p>Miedos: <br/>{Personaje.miedos}</p></div>
  <div> <p>Qué le hace feliz:<br/>{Personaje.queLeHaceFeliz}</p></div>
  <div> <p>¿Quién es/era su padre?:{Personaje.padre}</p></div>
  <div> <p>¿Quién es/era su madre?:{Personaje.madre}</p></div>
  <div> <p>¿Tiene o tuvo herman@s?:{Personaje.hermanos}</p></div>
  <div> <p>¿tiene o tuvo hijos?:{Personaje.hijos}</p></div>
  <div> <p>Amigos:{Personaje.amigos}</p></div>
  <div> <p>¿Algo reseñable en su vecindario?:{Personaje.vecinos}</p></div>
  <div> Enemigos<p>{Personaje.enemigos}</p></div>
  
  <Link to={`/MensajeBorrarPersonaje/${Personaje._id}`}>
        <Button variant="success">Borrar personaje</Button>
      </Link>{" "}
      </div>
  </div>
  );
  
}

return (
  <div>
{Personaje ? content() : "Cargando..."}
</div>
  )
};

export default Personaje;
