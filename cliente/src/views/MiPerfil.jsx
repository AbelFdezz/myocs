import Header from "../components/Header";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";


const MiPerfil = () => {

        useEffect(() => {
          console.log("con dependencias");
        }, []);

    return (
      <div>
   <Header />

<h3>Tu perfil</h3> <hr/>
<Link to="/MiPerfilSetup"><Button variant="success">Editar perfil</Button></Link> <hr />

      </div>
       );
    };
    
    export default MiPerfil;
    