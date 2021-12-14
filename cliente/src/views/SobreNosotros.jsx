import { useEffect } from "react";
import { Button } from "react-bootstrap";

const SobreNosotros = () => {


  return (
    <div className="container col-sm-12 col-md-10 col-lg-8 col-xl-6">
 <h5>MyOC es un proyecto personal de Abel Fernández.</h5>
 <hr />

    <p> La idea surgió de NiX, que es una jugona, y estaba harta de tener sus perfiles, personajes e historias, desperdigados en Google Drive, o en documentos de texto perdidos en carpetas  y que nadie acaba leyendo. La idea es tener los personajes bien organizados, al alcance de cualquiera, y tener la facilidad de compartirlos. </p>
      <br/>
   <p>
     MyOC es, de manera literal, mi primer trabajo fullstack, y ha sido el proyecto final de mi Bootcamp (Hola, Let's Coder!), con lo que, en el momento de su desarrollo, todavía estaba verde. Si se te ocurre alguna mejora, sugerencia, o encuentras algún bug, puedes mandarme un correo  y trataré de solucionarlo. ¡Gracias por tu tiempo!</p>


     <div className="mailto d-flex justify-content-center mb-3">
     <a href="mailto:abelfdezz@gmail.com" target="_blank"> <Button variant="success">Escríbeme</Button></a>  
     </div>
     
     
     

    </div>
  );
};

export default SobreNosotros;
