import React from 'react'; 
import { Link } from 'react-router-dom';
import api from '../../Services/api';
import RealDate from './../../utils/convertData'; 
export interface Students
{
    id: number;
    name: string; 
    email: string;
    ra: string;
    rg: string; 
    cpf: string; 
    dataNascimento: string; 
    nomeMae: string; 
    nomePai: string; 
    tel1: string; 
    tel1Desc: string;
    tel2: string; 
    tel2Desc: string;
    class_name: string; 
    student_id: number; 
    class_id: number; 
}

interface StudentsProps  
{
    students: Students;
}

const StudentsItem: React.FC<StudentsProps> = ({students})  =>
{
    const handleDeleteStudent = async () =>
    {
        
        if(window.confirm(`Deseja excluir ${students.name}? `))
            {
               console.log(students.id);
                await api.delete('/students',
                {
                    params:
                    {
                        id: students.id
                    }
                }).then(
                    ()=>
                    {
                        alert('Aluno excluído com Sucesso!'); 
                    }
                ).catch(
                    ()=>
                    {
                        alert('Erro ao excluir Aluno!');
                    }
                );
            } 
        }
    return (
        <tr>
           <td>{students.id}</td>
           <td>{students.name}</td>    
           <td>{students.ra}</td>
           <td>{RealDate(students.dataNascimento)}</td>
           <td>{students.nomeMae}</td>
           <td>{students.tel1}</td>
           <td>{students.tel1Desc}</td>
           <td>{students.tel2}</td>
           <td>{students.tel2Desc}</td>
           <td>{students.class_name}</td>
           
           <td><Link to={`/editStudent/${students.id}`}>Editar</Link></td>
           <td><button className="buttonLists" onClick={handleDeleteStudent}>Excluir</button></td>
        </tr>
    )
}

export default StudentsItem; 