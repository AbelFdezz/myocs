import "./App.css";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

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
