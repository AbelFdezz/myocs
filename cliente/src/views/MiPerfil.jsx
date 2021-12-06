import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import Button from "react-bootstrap/Button";


const MiPerfil = () => {
  const [perfil, setPerfil] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios(
          "/usuarios/find/61961d112e805d7e413063da/",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTYxZDExMmU4MDVkN2U0MTMwNjNkYSIsImlhdCI6MTYzNzkxNTY1OSwiZXhwIjoxNjM5MTI1MjU5fQ.tzI2E-VSoQbp2CjPmppvdCfD0x4MgXx1pO9piJPnR6w",
            },
          }
        );
        setPerfil(response.data.arrayPersonajes);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h3>Tu perfil</h3> <hr />
      <Link to="/MiPerfilSetup">
        <Button variant="success">Editar perfil</Button>
      </Link>{" "}
      {perfil.map((usuario, i) => {
        return (
          <div>
            <div className="d-grid gap-2 mb-3  col-lg-6 ">
              <Link to={`${usuario._id}`}>
                <Button variant="success" size="lg">
                  <div key={i}>{usuario.nombre} </div>
                </Button>
              </Link>
            </div>
          </div>
        );
      })}


      <hr />
    </div>
  );
};

export default MiPerfil;
