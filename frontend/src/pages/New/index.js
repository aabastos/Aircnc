import React, { useState, useMemo } from "react";
import api from "../../services/api";

import camera from "../../assets/camera.svg";

import "./styles.css";

export default function New({ history }) {
  const [company, setCompany] = useState("");
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleNewSpotSubmit(event) {
    event.preventDefault();

    const user_id = localStorage.getItem("user");
    const data = new FormData();
    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);

    await api.post("/spots", data, {
      headers: { user_id },
    });

    history.push("/dashboard");
  }

  return (
    <>
      <form onSubmit={handleNewSpotSubmit}>
        <label
          id="thumbnail"
          style={{ backgroundImage: "url(" + preview + ")" }}
          className={thumbnail ? "has-thumbnail" : ""}
        >
          <input
            type="file"
            onChange={(event) => setThumbnail(event.target.files[0])}
          />
          <img src={camera} alt="Selecione a imagem" />
        </label>

        <label htmlFor="company">EMPRESA *</label>
        <input
          type="text"
          id="company"
          placeholder="O nome da sua empresa"
          onChange={(event) => setCompany(event.target.value)}
          value={company}
        />

        <label htmlFor="techs">TECNOLOGIAS * (separadas por vírgula)</label>
        <input
          type="text"
          id="techs"
          placeholder="Quais tecnologias usam?"
          onChange={(event) => setTechs(event.target.value)}
          value={techs}
        />

        <label htmlFor="price">
          VALOR DA DIÁRIA * (em branco para GRATUITO)
        </label>
        <input
          type="text"
          id="price"
          placeholder="Valor cobrado por dia"
          onChange={(event) => setPrice(event.target.value)}
          value={price}
        />

        <button className="btn" type="submit">
          Cadastrar
        </button>
      </form>
    </>
  );
}
