import React, { FormEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./styles.css";

import api from "../../Services/api";
import PageHeader from "../../Components/PageHeader";
import { InputComponent } from "../../Components/Input/Index";

const TeacherEdit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rg, setRG] = useState("");
  const [cpf, setCPF] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [tel, setTel] = useState("");
  const [pasep, setPasep] = useState("");

  const history = useHistory();

  interface ParamType {
    teacher_id: string;
  }

  let param = useParams<ParamType>();

  const teacher_id = param.teacher_id;

  const searchTeacher = async () => {
    const response = await api.get("/teacherData", {
      params: {
        teacher_id: teacher_id,
      },
    });

    setName(response.data[0].name);
    setEmail(response.data[0].email);
    setRG(response.data[0].rg);
    setCPF(response.data[0].cpf);
    setDataNascimento(response.data[0].dataNascimento);
    setTel(response.data[0].tel);
    setPasep(response.data[0].pasep);

    console.log(response);
  };

  useEffect(() => {
    searchTeacher();
  }, []);

  const handleEditTeacher = (e: FormEvent) => {
    e.preventDefault();
    api
      .put("/teachers", {
        teacher_id: teacher_id,
        name,
        email,
        rg,
        cpf,
        dataNascimento,
        tel,
        pasep,
      })
      .then(() => {
        alert("Professor editado com Sucesso!");
        history.push("/teachersList");
      })
      .catch(() => {
        alert("Erro ao editar Professor! Confira os campos e tente novamente!");
      });
  };

  return (
    <div>
      <PageHeader title="Edite o professor de forma fácil e rápida." />

      <main className="form-area">
        <form className="form" onSubmit={handleEditTeacher}>
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
            <button type="submit">Editar Professor</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default TeacherEdit;
