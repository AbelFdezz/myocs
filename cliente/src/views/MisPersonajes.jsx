import Header from "../components/Header";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";



const MisPersonajes = () => {

        useEffect(() => {
          console.log("con dependencias");
        }, []);

    return (
      <div>
   <Header />

<h2>Lista de personajes</h2>

<Link to="/NuevoPersonaje"><Button variant="success">Nuevo personaje</Button></Link> <hr />
      </div>
       );
    };
    
    export default MisPersonajes;
    