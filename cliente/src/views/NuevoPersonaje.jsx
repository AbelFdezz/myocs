import React from "react";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import axios from "axios";



const NuevoPersonaje = () => {
  const [datos, setDatos] = useState({});

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };






  useEffect(() => {
    const getData = async () => {
      try {
        let res = await axios(
          "/juegos",
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTYxZDExMmU4MDVkN2U0MTMwNjNkYSIsImlhdCI6MTYzODM3NTM4NywiZXhwIjoxNjM5NTg0OTg3fQ._qvQR1Kr7zmcFcJbKtfNRJSSsnnQbK_cLRG_OTPNY_w",
            },
          }
        );



        
        console.log(res.data)
     
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);









//no tocar
  const enviarPersonaje = async (event) => {
    event.preventDefault();
    var data = new FormData();
    for (var key in datos) {
      if (datos[key]) {
        data.append(key, datos[key]);
      }
    }
    try {
      let response = await axios.post("/personajes", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTYxZDExMmU4MDVkN2U0MTMwNjNkYSIsImlhdCI6MTYzODM3NTM4NywiZXhwIjoxNjM5NTg0OTg3fQ._qvQR1Kr7zmcFcJbKtfNRJSSsnnQbK_cLRG_OTPNY_w",
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }



  };

  return (
    <Fragment>
      <h2>Nuevo personaje</h2>

      <form className="row" onSubmit={enviarPersonaje}>
        <div className="col-md-3">
          <input
            type="text"
            name="nombre"
            placeholder="nombre"
            className="form-control"
            onChange={handleInputChange}
          ></input>
          <input
            type="text"
            name="juego"
            placeholder="juego"
            className="form-control"
            onChange={handleInputChange}
          ></input>
          <input
            type="text"
            name="propietario"
            placeholder="propietario"
            className="form-control"
            onChange={handleInputChange}
          ></input>
          <button className="btn btn-success" type="submit">
            Enviar
          </button>
          <br />
        </div>
      </form>
    </Fragment>
  );
};

export default NuevoPersonaje;
