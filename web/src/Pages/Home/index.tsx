import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";
import "./styles.css";

import PageHeader from "../../Components/PageHeader";
import RequestItem, { RequestsInterface } from "../../Components/RequestItem";
import Footer from "../../Components/Footer";

import api from "../../Services/api";
const Home = () => {
  const [requests, setRequests] = useState([]);

  const searchRequests = async () => {
    const response = await api.get("latestRequests");

    setRequests(response.data);
    console.log(response);
  };

  useEffect(() => {
    searchRequests();
  }, []);
  return (
    <div className="container">
      <PageHeader title="Tem Bilhete?  O seu sistema para comunicação escolar." />
      <main className="mainHomeContainer">
        <div>
          <h2>Funcionalidades Principais</h2>
          <div className="shortcutArea">
            <div className="shortcutItem">
              <Icon.MessageCircle color="#5686F9" size={42} />
              <Link to="/announcements" className="shortcutItemLink">
                {" "}
                Enviar Bilhete{" "}
              </Link>
            </div>
            <div className="shortcutItem">
              <Icon.Send color="#5686F9" size={42} />
              <Link to="/scraps" className="shortcutItemLink">
                {" "}
                Enviar Recado{" "}
              </Link>
            </div>
            <div className="shortcutItem">
              <Icon.Bell color="#5686F9" size={42} />
              <Link to="/requests" className="shortcutItemLink">
                {" "}
                Solicitações{" "}
              </Link>
            </div>
            <div className="shortcutItem">
              <Icon.Save color="#5686F9" size={42} />
              <Link to="/studentRegister" className="shortcutItemLink">
                {" "}
                Cadastrar Aluno{" "}
              </Link>
            </div>
            <div className="shortcutItem">
              <Icon.List color="#5686F9" size={42} />
              <Link to="/classesList" className="shortcutItemLink">
                {" "}
                Listar Turmas{" "}
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h2>Últimas Solicitações</h2>
          <div className="tableHomeArea">
            <table>
              <thead className="tableHomeHeaderTitle">
                <tr>
                  <th>Nome</th>
                  <th>R.A.</th>
                  <th>Turma</th>
                  <th>Tipo de Documento</th>
                  <th>Data da Solicitação</th>
                  <th>Observação</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="tableHomeContent">
                {requests.map((latestRequest: RequestsInterface) => {
                  if (latestRequest.documentType === "undefined") {
                    console.log(latestRequest);
                  } else {
                    return (
                      <RequestItem
                        key={latestRequest.id}
                        requests={latestRequest}
                      />
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
