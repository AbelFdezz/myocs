import "./index.css";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuUsuario from "./views/MenuUsuario";
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

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<MyOCS />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/MenuUsuario" element={<MenuUsuario />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route exact path="/MisPersonajes" element={<MisPersonajes />} />
        <Route path="/MisPersonajes/:PersonajeId" element={<Personaje />} />
        <Route path="/MisPersonajes/:PersonajeId/:TrasfondoId" element={<Trasfondo />} />
        <Route path="MisPersonajes/:PersonajeId/:PersonajeId/NuevoTrasfondo" element={<NuevoTrasfondo />} />
        <Route path="/MiPerfilSetup" element={<MiPerfilSetup />} />
        <Route path="/MiPerfil" element={<MiPerfil />} />
        <Route path="/Recursos" element={<Recursos />} />
        <Route path="/NuevoPersonaje" element={<NuevoPersonaje />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
