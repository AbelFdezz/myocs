import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Fotillo from "../arbolPortada.png";

const MyOCS = () => {
  return (
    <div>
      <Header />
      <h2>Bienvenid@ a MyOCS</h2>
      <img src={Fotillo} alt="Imagen" />
<p>My OCS es un repositorio de personajes y trasfondos blablabla</p>
    
      <Link to="/Signup">
        <Button variant="success">Comienza</Button>
      </Link>

    </div>
  );
};

export default MyOCS;
