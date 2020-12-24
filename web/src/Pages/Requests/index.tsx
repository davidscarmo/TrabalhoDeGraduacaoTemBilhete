import React, { useEffect, useState } from 'react'; 
import Footer from '../../Components/Footer';
import PageHeader from '../../Components/PageHeader';
import RequestItem, { RequestsInterface } from '../../Components/RequestItem';
import api from '../../Services/api';
import './styles.css'; 

const Requests = () => 
{
    const[requests, setRequests] = useState([]); 

    const searchRequests = async () =>
    {
        const response = await api.get('requests'); 

        setRequests(response.data); 
        console.log(response); 
    } 

    useEffect(() => 
    {
        searchRequests();
    }); 

    return(
        <div className="container">
            <PageHeader title="Confira aqui as suas solicitações de documentos." />
            <main className="mainRequestContainer">
                    <h2>Solicitações</h2>
                    <div className="tableRequestArea">
                    <table>
                        <thead className="tableRequestHeaderTitle">
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
                        <tbody className="tableContentRequest">
                               {requests.map((latestRequest: RequestsInterface) =>
                               {
                                if(latestRequest.documentType === 'undefined')
                                {
                                    console.log(latestRequest)
                                }
                                else
                                {
                                    return <RequestItem key={latestRequest.id} requests={latestRequest} />
                                }
                               })}
                        </tbody>
                    </table>
                    </div>
                    
                </main>
            <Footer />
        </div>
    )
}

export default Requests; 