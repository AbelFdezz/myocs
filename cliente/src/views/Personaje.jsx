
import { useEffect } from "react";


const Personaje = () => {

    useEffect(() => {
      console.log("con dependencias");
    }, []);

return (
  <div>
<h3>Hoja de personaje</h3> <hr/>

 


</div>
       );
    };
    
    export default Personaje;