import React, { useEffect, useState } from "react";
import ClassesItem, { Classes } from "../../Components/ClassesItem";
import PageHeader from "../../Components/PageHeader";
import api from "../../Services/api";
import "./styles.css";

const ClassesList = () => {
  const [classesData, setClassesData] = useState([]);

  const searchClassesData = async () => {
    const response = await api.get("/classes");

    setClassesData(response.data);
    console.log(response);
  };

  useEffect(() => {
    searchClassesData();
  }, []);
  return (
    <div className="container">
      <PageHeader title="Confira aqui as turmas cadastradas" />
      <main className="mainClassesListContainer">
        <h2>Turmas Cadastradas</h2>
        <div className="tableClassesArea">
          <table>
            <thead className="tableHeaderTitle">
              <tr>
                <th>Código</th>
                <th>Turma</th>
                <th>Professor</th>
                <th>Ano</th>
                <th>Adicionar Aluno</th>
                <th>Editar Turma</th>
                <th>Excluir Turma</th>
              </tr>
            </thead>
            <tbody className="tableContentClasses">
              {classesData.map((classes: Classes) => {
                return <ClassesItem key={classes.id} classes={classes} />;
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ClassesList;
