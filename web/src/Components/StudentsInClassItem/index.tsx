import React from 'react'; 
import { useParams } from 'react-router-dom';
import api from '../../Services/api';

export interface StudentsInClass
{
    id: number;
    name: string; 
    ra: string; 
} 

interface Index
{
    index: number; 
}

interface StudentsInClassProps 
{
    studentInClass: StudentsInClass; 
}
interface ParamType
{
    class_id: string; 
}

const StudentInClassItem: React.FC<StudentsInClassProps & Index> = ({studentInClass, index}) => 
{
    let  param  = useParams<ParamType>(); 
   
    const class_id = param.class_id;
    const handleDeleteStudentInClass = async () =>
{
    
    if(window.confirm(`Deseja excluir ${studentInClass.name}? `))
        {
           
            await api.delete('/studentClass',
            {
                params:
                {
                    id: studentInClass.id,
                    class_id: class_id,
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

    return(
        <tr>
            <td>{index +1}</td>
            <td>{studentInClass.name}</td>
            <td> {studentInClass.ra}</td>
           <td> <button className="buttonLists" onClick={handleDeleteStudentInClass}>Excluir</button></td>
        </tr>
    )
}

export default StudentInClassItem; 