import React, { useEffect, useState } from 'react'; 
import Footer from '../../Components/Footer';
import PageHeader from '../../Components/PageHeader';
import api from '../../Services/api';
import './styles.css'; 
import TeachersItem, {Teachers} from '../../Components/TeachersItem'; 

const TeachersList = () => 
{
    const[teachersData, setTeachersData] = useState([]); 

    const searchTeachersData = async () =>
    {
        const response = await api.get('/teachers'); 

        setTeachersData(response.data); 
     
    } 

    useEffect(() => 
    {
        searchTeachersData();
    }); 
    return(
        <div className="container" >
            <PageHeader title="Confira aqui os professores cadastrados."/> 
            <main className="mainTeacherListContainer">
            <h2>Professores</h2>
                    <div className="tableAreaTeacherList">
                    <table>
                        <thead className="tableTeacherListHeaderTitle">
                            <tr>
                                <th>Cod.</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>RG</th>
                                <th>CPF</th>
                                <th>Data de Nascimento</th>
                                <th>Telefone</th>
                                <th>Pasep</th>
                                <th>Turma</th>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>
                        <tbody className="tableContentTeacherList">
                        {teachersData.map((teachers: Teachers) =>
                               {
                                   return <TeachersItem key={teachers.id} teachers={teachers} />
                               })}  
                        </tbody>
                    </table>
                    </div>
            </main>
            <Footer />
        </div>
    )
}

export default TeachersList; 