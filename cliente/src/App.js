import "./App.css";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
/*
import MyOCS from "./views/MyOCS";
import MenuUsuario from "./views/MenuUsuario";
import Signup from "./views/Signup";
import SobreNosotros from "./views/SobreNosotros";
import MisPersonajes from "./views/MisPersonajes";
import NuevoPersonaje from "./views/NuevoPersonaje";
import MiPerfilSetup from "./views/MiPerfilSetup";
import MiPerfil from "./views/MiPerfil";
import Recursos from "./views/Recursos";
*/

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
