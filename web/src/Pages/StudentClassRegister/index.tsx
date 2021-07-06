import React, { FormEvent, useEffect, useState } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import api from "../../Services/api";

import PageHeader from "../../Components/PageHeader";
import StudentInClassItem from "../../Components/StudentsInClassItem";
import { InputComponent } from "../../Components/Input/Index";

interface StudentInClassProps {
  id: number;
  index: number;
  name: string;
  ra: string;
}

interface ParamType {
  class_id: string;
}
const StudentClassRegister = () => {
  const [studentsInClass, setStudentInClass] = useState([]);
  const [className, setClassName] = useState("");

  const [ra, setRA] = useState("");

  //getting the class_id from the current url
  let param = useParams<ParamType>();

  const class_id = param.class_id;

  const searchForClassName = async () => {
    const response = await api.get(`/className?class_id=${class_id}`);
    setClassName(response.data[0].class_name);
  };
  const searchForStudentsInClass = async () => {
    const response = await api.get(`/studentClass?class_id=${class_id}`);

    setStudentInClass(response.data);
  };

  useEffect(() => {
    searchForStudentsInClass();
    searchForClassName();
  }, []);

  const handleAddStudentInClass = async (e: FormEvent) => {
    e.preventDefault();
    api
      .post("/studentClass", {
        ra,
        class_id: class_id,
      })
      .then(() => {
        searchForStudentsInClass();
        alert("Aluno adicionado com Sucesso!");
      })
      .catch(() => {
        alert("Erro ao adicionar Aluno! Confira os campos e tente novamente!");
      });
  };

  return (
    <div className="container">
      <PageHeader title="Adicione aqui os alunos na turma" />
      <main className="mainStudentClassRegisterContainer">
        <h2>{className}</h2>
        <div className="addStudentArea">
          <form onSubmit={handleAddStudentInClass}>
            <InputComponent
              label="Informe o R.A :"
              name="ra"
              id="ra"
              value={ra}
              setValue={setRA}
              required
            />
            <button type="submit"> Adicionar Aluno</button>
          </form>
        </div>

        <div className="tableAreaStudentsAlreadyInClass">
          <table>
            <thead className="tableStudentsAlreadyInClassHeaderTitle">
              <tr>
                <th>Número</th>
                <th>Nome</th>
                <th>R.A.</th>
                <th>Excluir Aluno</th>
              </tr>
            </thead>
            <tbody className="tableContentStudentsAlreadyInClass">
              {studentsInClass.map((students: StudentInClassProps, index) => {
                return (
                  <StudentInClassItem
                    key={students.id}
                    studentInClass={students}
                    index={index}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default StudentClassRegister;
