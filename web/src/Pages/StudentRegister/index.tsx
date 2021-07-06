import React, { FormEvent, useState } from "react";

import "./styles.css";

import api from "../../Services/api";

import PageHeader from "../../Components/PageHeader";
import { useHistory } from "react-router-dom";
import { InputComponent } from "../../Components/Input/Index";
const StudentRegister = () => {
  const [name, setName] = useState("");
  const [ra, setRA] = useState("");
  const [rg, setRG] = useState("");
  const [cpf, setCPF] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [nomeMae, setNomeMae] = useState("");
  const [nomePai, setNomePai] = useState("");
  const [tel1, setTel1] = useState("");
  const [tel1Desc, setTel1Desc] = useState("");
  const [tel2, setTel2] = useState("");
  const [tel2Desc, setTel2Desc] = useState("");

  const navigate = useHistory();
  const handleCreateStudents = (e: FormEvent) => {
    e.preventDefault();
    api
      .post("/students", {
        name,
        ra,
        rg,
        cpf,
        dataNascimento,
        nomeMae,
        nomePai,
        tel1,
        tel1Desc,
        tel2,
        tel2Desc,
      })
      .then(() => {
        alert("Aluno cadastrado com Sucesso!");
        navigate.push("/studentsList");
      })
      .catch(() => {
        alert("Erro ao cadastrar Aluno! Confira os campos e tente novamente!");
      });
  };

  return (
    <div>
      <PageHeader title="Cadastre os alunos de forma fácil e rápida." />

      <main className="form-area">
        <form className="form" onSubmit={handleCreateStudents}>
          <h2>Preencha os dados</h2>

          <div className="input-group">
            <InputComponent
              label="Nome : "
              id="name"
              value={name}
              setValue={setName}
              name="name"
              required
            />
          </div>
          <div className="input-group">
            <InputComponent
              label="R.A. :"
              id="ra"
              value={ra}
              setValue={setRA}
              required
            />
          </div>
          <div className="input-group">
            <InputComponent
              label="R.G. :"
              name="rg"
              id="rg"
              value={rg}
              setValue={setRG}
            />
          </div>
          <div className="input-group">
            <InputComponent
              label="CPF: "
              name="cpf"
              id="cpf"
              value={cpf}
              setValue={setCPF}
              required
            />
          </div>
          <div className="input-group">
            <InputComponent
              type="date"
              label="Data de Nascimento : "
              name="dataNascimento"
              id="dataNascimento"
              value={dataNascimento}
              setValue={setDataNascimento}
              required
            />
          </div>

          <div className="input-group">
            <InputComponent
              label="Nome da Mãe : "
              name="nomeMae"
              id="nomeMae"
              value={nomeMae}
              setValue={setNomeMae}
              required
            />
          </div>
          <div className="input-group">
            <InputComponent
              label="Nome do Pai: "
              name="nomePai"
              id="nomePai"
              value={nomePai}
              setValue={setNomePai}
            />
          </div>
          <div className="input-group">
            <InputComponent
              label="Telefone 1 : "
              name="tel1"
              id="tel1"
              value={tel1}
              setValue={setTel1}
              required
            />
          </div>
          <div className="input-group">
            <InputComponent
              label="Falar com : "
              name="tel1Desc"
              id="tel1Desc"
              value={tel1Desc}
              setValue={setTel1Desc}
              required
            />
          </div>
          <div className="input-group">
            <InputComponent
              label="Telefone 2 : "
              name="tel2"
              id="tel2"
              value={tel2}
              setValue={setTel2}
              required
            />
          </div>
          <div className="input-group">
            <InputComponent
              label="Falar com : "
              name="tel2Desc"
              id="tel2Desc"
              value={tel2Desc}
              setValue={setTel2Desc}
              required
            />
          </div>

          <div className="button-area-student">
            <button type="submit">Cadastrar Aluno</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default StudentRegister;
