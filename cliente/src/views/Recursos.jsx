import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


const Recursos = () => {


  return (
    <div className="containerRecursos d-flex justify-content-center">

      <h2>Enlaces a recursos de interés</h2>


           <a href="https://inkarnate.com" target="_blank"> <Button variant="success">Inkarnate </Button></a>  
           <p>Inkarnate permite la creación de mapas de forma gratuita, con una interfaz muy intuitiva y fácil de usar.</p>

           <a href="https://www.owlbear.rodeo/" target="_blank"> <Button variant="success">OwlBear </Button></a>  
           <p>OwlBear Rodeo es untablero virtual donde se pueden tirar los dados y poner música de ambiente.</p>
           <a href=" https://nivel20.com/" target="_blank"> <Button variant="success">Nivel20</Button></a>  
           <p>Nivel20 es una plataforma para jugar a D&D o simplemente de consulta.</p>
           <a href="https://www.fantasynamegenerators.com/" target="_blank"> <Button variant="success">Fantasy Name Generator</Button></a>  
           <p> Fantasy Name Generator sirve para cuando elegir nombres se te da regulín.</p>
           <a href="https://w2g.tv/" target="_blank"> <Button variant="success">W 2 G</Button></a>  
           <p>W2G es una web para crear listas de reproducción de YouTube y que la escuche a la vez todo tu grupo.</p>
           <a href="https://artflow.ai/" target="_blank"> <Button variant="success">Artflow</Button></a>  
           <p>Artflow  es una IA que genera avatares de personas de varios estilos a partir de una descripción (en inglés ).</p>
           <a href="https://picrew.me/ " target="_blank"> <Button variant="success">Picrew </Button></a>  
           <p>Picrew es una web para hacerte tu propio avatar de un montón de estilos diferentes, hecha por artistas (en japonés).</p>
           <a href="https://oskarstalberg.com/Townscaper/" target="_blank"> <Button variant="success">Townscraper</Button></a>  
           <p> Townscaper es un jueguito de navegador para crear ciudades para ayudarte a crear escenarios rápidamente.</p>
           <a href="https://www.wombo.art/" target="_blank"> <Button variant="success">Wombo</Button></a>  
           <p>Wombo es otra IA que crea todo tipo de ideas según tu descripción (en inglés).</p>
           <a href="https://thispersondoesnotexist.com/" target="_blank"> <Button variant="success">This person doesn't exist</Button></a>  
           <p>This person doesn't exist es otra  IA que crea caras realistas aleatoriamente, eso sí, que no existen.</p>
 



   



    
    </div>
  );
};

export default Recursos;
