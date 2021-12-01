import { useEffect } from "react";

const SobreNosotros = () => {
  useEffect(() => {
    //cuando arranca por primera vez se ejecuta.
    console.log("con dependencias");
  }, []);

  return (
    <div>


      <h3>Probando ruta a página "Sobre MyOCS</h3>
    </div>
  );
};

export default SobreNosotros;
