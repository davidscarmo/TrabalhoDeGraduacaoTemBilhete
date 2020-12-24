import React from 'react'; 
import { Link } from 'react-router-dom';
import api from '../../Services/api';
import RealDate from './../../utils/convertData'; 

export interface Teachers
{
    id: number;
    name: string; 
    email: string;
    rg: string; 
    cpf: string; 
    dataNascimento: string; 
    tel: string; 
    pasep: string; 
    class_name: string; 
    teacher_id: number; 
    class_id: number; 
}

interface TeachersProps  
{
    teachers: Teachers;
}

const TeachersItem: React.FC<TeachersProps> = ({teachers})  =>
{
 
    const handleDeleteTeacher = async () =>
    {
        
        if(window.confirm(`Deseja excluir ${teachers.name}? `))
            {
               console.log(teachers.id);
                await api.delete('/teachers',
                {
                    params:
                    {
                        id: teachers.id
                    }
                }).then(
                    ()=>
                    {
                        alert('Professor excluído com Sucesso!'); 
                    }
                ).catch(
                    ()=>
                    {
                        alert('Erro ao excluir Professor!');
                    }
                );
            } 
        }
   
    return (
        <tr>
           <td>{teachers.id}</td>
           <td>{teachers.name}</td>    
           <td>{teachers.email}</td>
           <td>{teachers.rg}</td>
           <td>{teachers.cpf}</td>
           <td>{RealDate(teachers.dataNascimento)}</td>
           <td>{teachers.tel}</td>
           <td>{teachers.pasep}</td>
           <td>{teachers.class_name}</td>
           
           <td><Link to={`/editTeacher/${teachers.id}`}>Editar</Link></td>
           <td><button className="buttonLists" onClick={handleDeleteTeacher}>Excluir</button></td>
        </tr>
    )
}

export default TeachersItem; 