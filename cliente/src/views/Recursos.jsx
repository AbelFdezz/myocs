 

import { useEffect } from "react";

const Recursos = () => {
  useEffect(() => {
    console.log("con dependencias");
  }, []);

  return (
    <div>


      <h2>Enlaces a recursos de interés</h2>
      <p>https://inkarnate.com/</p>
      <p>https://www.owlbear.rodeo/</p>
      <p>https://nivel20.com/</p>
      <p>https://inkarnate.com/</p>
      <p>https://www.fantasynamegenerators.com/</p>
      <p>https://thispersondoesnotexist.com/</p>
      <p>https://w2g.tv/</p>
    </div>
  );
};

export default Recursos;
