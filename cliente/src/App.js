import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyOCS from "./views/MyOCS";
import MenuUsuario from "./views/MenuUsuario";
import Signup from "./views/Signup";
import SobreNosotros from "./views/SobreNosotros";
import MisPersonajes from "./views/MisPersonajes";
import NuevoPersonaje from "./views/NuevoPersonaje";
import MiPerfilSetup from "./views/MiPerfilSetup";
import MiPerfil from "./views/MiPerfil";
import Recursos from "./views/Recursos";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MyOCS />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/MenuUsuario" element={<MenuUsuario />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/MisPersonajes" element={<MisPersonajes />} />
        <Route path="/MiPerfilSetup" element={<MiPerfilSetup />} />
        <Route path="/MiPerfil" element={<MiPerfil />} />
        <Route path="/Recursos" element={<Recursos />} />
        <Route path="/NuevoPersonaje" element={<NuevoPersonaje />} />
      </Routes>


    </div>
  );
};

export default App;
