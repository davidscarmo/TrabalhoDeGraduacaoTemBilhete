import React, { useState, FormEvent } from "react";

import "./styles.css";
import api from "../../Services/api";

import PageHeader from "../../Components/PageHeader";

import { InputComponent } from "../../Components/Input/Index";
const Announcements = () => {
  const [ra, setRa] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCreateScraps = (e: FormEvent) => {
    e.preventDefault();
    api
      .post("/scraps", {
        ra,
        subject,
        message,
      })
      .then(() => {
        setRa("");
        setSubject("");
        setMessage("");
        alert("Recado Enviado com Sucesso!");
      })
      .catch(() => {
        alert("Erro no enviar recado! Confira os campos e tente novamente!");
      });
  };
  return (
    <div className="container">
      <PageHeader title="Envie recados de forma fácil e rápida." />

      <main className="form-area">
        <form className="form" onSubmit={handleCreateScraps}>
          <h2>Preencha os dados</h2>
          <div className="input-group">
            <InputComponent
              label="R.A. do Aluno : "
              name="ra"
              id="ra"
              value={ra}
              setValue={setRa}
            />
          </div>

          <div className="input-group">
            <InputComponent
              label="Assunto : "
              name="subject"
              id="subject"
              value={subject}
              setValue={setSubject}
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Mensagem</label>
            <br />
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="button-area">
            <button type="submit">Enviar Bilhete</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Announcements;
