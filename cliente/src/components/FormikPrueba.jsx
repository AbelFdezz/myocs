import React from "react";
import { useFormik } from "formik";
function Formik() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async function (values) {
      // Aquí puedes usar values para enviar la información
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        value={values.email}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={handleChange}
        value={values.password}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}