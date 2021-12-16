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
import MensajeBorrarPersonaje from "./views/MensajeBorrarPersonaje"
import BorrarPersonaje from "./views/BorrarPersonaje"
import BorrarPersonajeFail from "./views/BorrarPersonajeFail"
import RequireAuth from "./views/RequireAuth"



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<MyOCS />} />
        <Route element={<RequireAuth />}>
        <Route path="/MiPerfil" element={<MiPerfil />} />
        </Route>
        <Route path="/MiPerfil/:UsuarioId" element={<MiPerfilSetup />} />

        <Route path="/Signup" element={<Signup />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route element={<RequireAuth />}>
        <Route exact path="/MisPersonajes/:UsuarioId" element={<MisPersonajes />} />
        </Route>
        <Route exact path="/MiPersonajes/:PersonajeId" element={<Personaje />} />
        <Route element={<RequireAuth />}>
        <Route path="/NuevoPersonaje/:UsuarioId" element={<NuevoPersonaje />} />
       </Route>
        <Route exact path="/MisPersonajes/Trasfondo/:trasfondoId/" element={<Trasfondo />} />
        <Route element={<RequireAuth />}>
        <Route exact path="/MisPersonajes/:PersonajeId/Setup" element={<PersonajeSetup />} />
        </Route>
        <Route element={<RequireAuth />}>
        <Route exact path="/TrasfondoSetup/:TrasfondoId" element={<TrasfondoSetup />} />
       </Route>
       <Route element={<RequireAuth />}>
        <Route exact path="/NuevoTrasfondo/:PersonajeId" element={<NuevoTrasfondo />} /> 
        </Route>
       <Route element={<RequireAuth />}>
        <Route exact path="/MensajeBorrarPersonaje/:PersonajeId" element={<MensajeBorrarPersonaje />} />
        </Route>
        <Route element={<RequireAuth />}>
        <Route exact path="/BorrarPersonaje/:PersonajeId" element={<BorrarPersonaje />} />
        </Route>
        <Route  path="/BorrarPersonajeFail" element={<BorrarPersonajeFail />} />
        <Route path="/Recursos" element={<Recursos />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
