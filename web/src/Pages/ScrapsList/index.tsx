import React, { useEffect, useState } from 'react'; 
import ScrapsItem, {Scraps} from '../../Components/ScrapsItem';
import Footer from '../../Components/Footer';
import PageHeader from '../../Components/PageHeader';
import api from '../../Services/api';
import './styles.css'

const ScrapsList= () => 
{
    const[scrapsData, setscrapsData] = useState([]); 

    const searchScrapsData = async () =>
    {
        const response = await api.get('/scrapsList'); 

        setscrapsData(response.data); 
        console.log(response); 
    } 

    useEffect(() => 
    {
        searchScrapsData();
    }, []); 
    return(
        <div className="container">
            <PageHeader title="Confira os recados já enviados" />
            <main className="mainScrapsListContainer">
            
                <h2>Bilhetes Enviados</h2>
                <div className="tableScrapsArea">
                    <table>
                        <thead className="tableHeaderTitle">
                            <tr>
                               <th>Código</th>
                               <th>Aluno</th>
                               <th>Assunto</th>
                               <th>Mensagem</th>
                               <th>Data</th>
                               <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className="tableContentScraps">
                               {scrapsData.map((scraps: Scraps) =>
                               {
                                   return <ScrapsItem key={scraps.id} scraps={scraps} />
                               })}
                        </tbody>
                    </table>
                    </div>
                </main>
            <Footer />
        </div>
    )
}

export default ScrapsList; 