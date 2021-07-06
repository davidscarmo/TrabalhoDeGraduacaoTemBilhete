import React, { FormEvent, useState } from "react";

import "./styles.css";

import api from "../../Services/api";
import PageHeader from "../../Components/PageHeader";
import { InputComponent } from "../../Components/Input/Index";

const Announcements = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCreateAnnouncements = (e: FormEvent) => {
    e.preventDefault();
    api
      .post("/announcements", {
        subject,
        message,
      })
      .then(() => {
        alert("Bilhete Enviado com Sucesso!");
      })
      .catch(() => {
        alert("Erro no enviar bilhete! Confira os campos e tente novamente!");
      });
  };

  return (
    <div>
      <PageHeader title="Envie bilhetes de forma fácil e rápida." />

      <main className="form-area">
        <form className="form" onSubmit={handleCreateAnnouncements}>
          <h2>Preencha os dados</h2>
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
              rows={20}
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
