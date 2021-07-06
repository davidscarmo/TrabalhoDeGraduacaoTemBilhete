import React, { FormEvent, useState } from "react";

import "./styles.css";
import { useHistory } from "react-router-dom";
import api from "../../Services/api";

import PageHeader from "../../Components/PageHeader";
import { InputComponent } from "../../Components/Input/Index";

const TeacherRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rg, setRG] = useState("");
  const [cpf, setCPF] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [tel, setTel] = useState("");
  const [pasep, setPasep] = useState("");

  const navigate = useHistory();

  const handleCreateTeacher = (e: FormEvent) => {
    e.preventDefault();
    api
      .post("/teachers", {
        name,
        email,
        rg,
        cpf,
        dataNascimento,
        tel,
        pasep,
      })
      .then(() => {
        alert("Professor cadastrado com Sucesso!");
        navigate.push("/teachersList");
      })
      .catch(() => {
        alert(
          "Erro ao cadastrar Professor! Confira os campos e tente novamente!"
        );
      });
  };

  return (
    <div>
      <PageHeader title="Cadastre os professores de forma fácil e rápida.." />

      <main className="form-area">
        <form className="form" onSubmit={handleCreateTeacher}>
          <h2>Preencha os dados</h2>

          <div className="input-group">
            <InputComponent
              label="Nome : "
              name="name"
              id="name"
              value={name}
              setValue={setName}
              required
            />
          </div>
          <div className="input-group">
            <InputComponent
              label="Email : "
              name="email"
              id="email"
              value={email}
              setValue={setEmail}
              required
            />
          </div>
          <div className="input-group">
            <InputComponent
              label="R.G. : "
              name="rg"
              id="rg"
              value={rg}
              setValue={setRG}
              required
            />
          </div>
          <div className="input-group">
            <InputComponent
              label="CPF : "
              name="cpf"
              id="cpf"
              value={cpf}
              setValue={setCPF}
              required
            />
          </div>
          <div className="input-group">
            <InputComponent
              label="Date de Nascimento"
              type="date"
              name="dataNascimento"
              id="dataNascimento"
              value={dataNascimento}
              setValue={setDataNascimento}
              required
            />
          </div>
          <div className="input-group">
            <InputComponent
              label="Telefone : "
              name="tel"
              id="tel"
              value={tel}
              setValue={setTel}
              required
            />
          </div>
          <div className="input-group">
            <InputComponent
              label="PASEP : "
              name="pasep"
              id="pasep"
              value={pasep}
              setValue={setPasep}
              required
            />
          </div>

          <div className="button-area-teacher">
            <button type="submit">Cadastrar Professor</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default TeacherRegister;
