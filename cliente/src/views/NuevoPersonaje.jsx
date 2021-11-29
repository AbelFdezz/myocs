import Header from "../components/Header";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";



const NuevoPersonaje= () => {

        useEffect(() => {
          console.log("con dependencias");
        }, []);

    return (
      <div>
   <Header />

<h2>Formulario de personaje</h2>

      </div>
       );
    };
    
    export default NuevoPersonaje;