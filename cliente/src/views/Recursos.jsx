import Header from "../components/Header";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";


const Recursos = () => {

        useEffect(() => {
          console.log("con dependencias");
        }, []);

    return (
      <div>
   <Header />

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