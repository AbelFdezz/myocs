import React from "react";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Select = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await axios("/juegos", {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTYxZDExMmU4MDVkN2U0MTMwNjNkYSIsImlhdCI6MTYzODM3NTM4NywiZXhwIjoxNjM5NTg0OTg3fQ._qvQR1Kr7zmcFcJbKtfNRJSSsnnQbK_cLRG_OTPNY_w",
          },
        });

        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <Fragment>
      <h2>Nuevo personaje</h2>

      <form className="row" onSubmit={enviarPersonaje}>
        <div className="col-md-3">
          <input
            type="select"
            name="juego"
            placeholder="juego"
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

export default Select;
