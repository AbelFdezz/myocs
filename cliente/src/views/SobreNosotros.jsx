import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const SobreNosotros = () => {

    useEffect(() =>{   //cuando arranca por primera vez se ejecuta.
        console.log("con dependencias")
    }, []);


  return (<div>
      <Header />


      <h3>Probando ruta a página "Sobre MyOCS</h3>
</div>

      );
  };
  
export default SobreNosotros;