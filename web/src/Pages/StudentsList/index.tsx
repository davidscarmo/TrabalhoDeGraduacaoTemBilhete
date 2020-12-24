import React, { useEffect, useState } from 'react'; 
import Footer from '../../Components/Footer';
import PageHeader from '../../Components/PageHeader';
import api from '../../Services/api';
import './styles.css'; 
import StudentsItem, {Students} from '../../Components/StudentsItem'; 

const StudentsList = () => 
{
    const[studentsData, setStudentsData] = useState([]); 

    const searchStudentsData = async () =>
    {
        const response = await api.get('/students'); 

        setStudentsData(response.data); 
        console.log(response); 
    } 

    useEffect(() => 
    {
        searchStudentsData();
    }); 
    return(
        <div className="container" >
            <PageHeader title="Confira aqui os alunos cadastrados."/> 
            <main className="mainStudentsListContainer">
            <h2>Alunos</h2>
                    <div className="tableAreaStudentsList">
                    <table>
                        <thead className="tableStudentsListHeaderTitle">
                            <tr>
                                <th>Cod.</th>
                                <th>Nome</th>
                                <th>RA</th>
                                <th>Data de Nascimento</th>
                                <th>Nome da Mãe</th>
                                <th>Telefone 1</th>
                                <th>Tel. 1 Desc</th>
                                <th>Telefone 2</th>
                                <th>Tel. 2 Desc</th>
                                <th>Turma</th>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>
                        <tbody className="tableContentStudentsList">
                        {studentsData.map((students: Students) =>
                               {
                                   return <StudentsItem key={students.id} students={students}/>
                               })}  
                        </tbody>
                    </table>
                    </div>
            </main>
            <Footer />
        </div>
    )
}

export default StudentsList; 