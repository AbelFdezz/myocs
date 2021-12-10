import "./index.css";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./views/Signup";
import SobreNosotros from "./views/SobreNosotros";
import MisPersonajes from "./views/MisPersonajes";
import NuevoPersonaje from "./views/NuevoPersonaje";
import MiPerfilSetup from "./views/MiPerfilSetup";
import MiPerfil from "./views/MiPerfil";
import Recursos from "./views/Recursos";
import App from "./App";
import MyOCS from "./views/MyOCS";
import Personaje from "./views/Personaje";
import NuevoTrasfondo from "./views/NuevoTrasfondo";
import Trasfondo from "./views/Trasfondo";
import TrasfondoSetup from "./views/TrasfondoSetup"
import PersonajeSetup from "./views/PersonajeSetup"
import MensajeBorrar from "./views/MensajeBorrar"
import MensajeBorrarPersonaje from "./views/MensajeBorrarPersonaje"
import BorrarTrasfondo from "./views/BorrarTrasfondo"
import BorrarPersonaje from "./views/BorrarPersonaje"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<MyOCS />} />
        <Route path="/MiPerfil" element={<MiPerfil />} />
        <Route path="/MiPerfil/:UsuarioId" element={<MiPerfilSetup />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route exact path="/MisPersonajes/:UsuarioId" element={<MisPersonajes />} />
        <Route exact path="/MiPersonajes/:PersonajeId" element={<Personaje />} />
        <Route path="/NuevoPersonaje/:UsuarioId" element={<NuevoPersonaje />} />
        <Route exact path="/MisPersonajes/Trasfondo/:trasfondoId/" element={<Trasfondo />} />
        <Route exact path="/MisPersonajes/:PersonajeId/Setup" element={<PersonajeSetup />} />
        <Route exact path="/TrasfondoSetup/:TrasfondoId" element={<TrasfondoSetup />} />
        <Route exact path="/NuevoTrasfondo/:PersonajeId" element={<NuevoTrasfondo />} /> 
        <Route exact path="/MensajeBorrar/:trasfondoId" element={<MensajeBorrar />} />
        <Route exact path="/MensajeBorrarPersonaje/:PersonajeId" element={<MensajeBorrarPersonaje />} />
        <Route exact path="/BorrarTrasfondo/:trasfondoId" element={<BorrarTrasfondo />} />
        <Route exact path="/BorrarPersonaje/:PersonajeId" element={<BorrarPersonaje />} />
        <Route path="/Recursos" element={<Recursos />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
