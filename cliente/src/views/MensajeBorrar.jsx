import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


const MensajeBorrar = () => {
    let { trasfondoId } = useParams();
  
    const [trasfondo, setTrasfondo] = useState(null);
    useEffect(() => {
      const getData = async () => {
        try {
          let response = await axios.get(`/trasfondos/find/${trasfondoId}`, {
            headers: {
              Authorization: localStorage.getItem("jwt_token"),
            },
          });
  
          setTrasfondo(response.data.trasfondo);
          console.log(response.data)
        } catch (err) {
          console.log(err);
        }
      };
      getData();
    }, []);
    

    const content = () => {
        return (
          <div>

<h3>¿Seguro que quieres borrar este trasfondo?</h3>
<h4>Es la última vez que pregunto.</h4>
<h5>El borrado será irreversible, verifica que es el que quieres borrar.</h5>
<p>Con el borrado se procederá a eliminar el trasfondo de la lista de trasfondos de tu personaje, y también de los personajes invitados.</p>
<hr />

            <p>Titulo: {trasfondo.titulo}</p>
            <p>Personajes invitados:</p>
            {trasfondo.otrosPersonajes.map((otrosPersonajes, i) => {
              return (
                <div key={otrosPersonajes._id}>
                  <div className="d-grid gap-2 mb-3  col-lg-6 ">
                    <div key={i}>{otrosPersonajes.nombre} </div>
                  </div>
                  <p>Cuerpo: {trasfondo.cuerpo}</p>
                </div>
              );
            })}
    
    
   
    <Link to={`/BorrarTrasfondo/${trasfondo._id}`}>
                <Button variant="success" size="s">Borrar Trasfondo
                </Button>
              </Link>
       
          </div>
        );
      };
      return <div>{trasfondo ? content() : "Cargando..."}</div>;
    };
    
    export default MensajeBorrar;