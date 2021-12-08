import { useEffect } from "react";

const SobreNosotros = () => {
  useEffect(() => {
    //cuando arranca por primera vez se ejecuta.
    console.log("con dependencias");
  }, []);

  return (
    <div>


      <h3>MyOCS es una web muy molona tal y tal y cual</h3>
    </div>
  );
};

export default SobreNosotros;
