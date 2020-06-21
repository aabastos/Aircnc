import React, { useState } from "react";
import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState("");

  function handleInputChange(event) {
    const { value } = event.target;
    setEmail(value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/sessions", { email: email });
    localStorage.setItem("user", response.data._id);

    setEmail("");

    history.push("/dashboard");
  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre{" "}
        <strong>talentos</strong> para sua empresa{" "}
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="emal">E-MAIL *</label>
        <input
          onChange={handleInputChange}
          type="email"
          id="email"
          name="email"
          placeholder="Digite aqui o seu e-mail"
          value={email}
        />
        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
    </>
  );
}
