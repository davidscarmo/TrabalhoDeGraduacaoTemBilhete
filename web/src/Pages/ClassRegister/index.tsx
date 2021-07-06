import React, { FormEvent, useEffect, useState } from "react";

import "./styles.css";

import api from "../../Services/api";
import Footer from "../../Components/Footer";
import PageHeader from "../../Components/PageHeader";
import { useHistory } from "react-router-dom";
import { InputComponent } from "../../Components/Input/Index";
interface TeachersProps {
  id: number;
  name: string;
}

const ClassRegister = () => {
  const [class_name, setClassName] = useState("");
  const [year, setYear] = useState("");
  const [teacher_id, setTeacherId] = useState("");

  const [teachers, setTeachers] = useState([]);
  const searchTeachers = async () => {
    const response = await api.get("teachers");

    setTeachers(response.data);
    console.log(response);
  };

  useEffect(() => {
    searchTeachers();
  }, []);

  const navigate = useHistory();

  const handleCreateClass = (e: FormEvent) => {
    e.preventDefault();
    api
      .post("/classes", {
        class_name,
        year,
        teacher_id,
      })
      .then(() => {
        alert("Turma cadastrada com Sucesso!");
        navigate.push("/classesList");
      })
      .catch(() => {
        alert("Erro ao cadastrar Turma! Confira os campos e tente novamente!");
      });
  };

  return (
    <div className="container">
      <PageHeader title="Cadastre as suas turmas de forma fácil e rápida." />

      <main className="form-area">
        <form className="form" onSubmit={handleCreateClass}>
          <h2>Preencha os dados</h2>

          <div className="input-group">
            <InputComponent
              label="Nome da Turma : "
              name="class_name"
              id="class_name"
              value={class_name}
              setValue={setClassName}
              required
            />
          </div>
          <div className="input-group">
            <InputComponent
              label="Ano : "
              name="year"
              id="year"
              value={year}
              setValue={setYear}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="teacher_id">Professor da Turma</label> <br />
            <select
              name="teacher_id"
              id="teacher_id"
              value={teacher_id}
              onChange={(e) => {
                setTeacherId(e.target.value);
              }}
              required
            >
              <option value="0"> Escolha um Professor</option>
              {teachers.map((teacher: TeachersProps) => {
                return (
                  <option key={teacher.id} value={teacher.id}>
                    {" "}
                    {teacher.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="button-area-class">
            <button type="submit">Cadastrar Turma</button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default ClassRegister;
