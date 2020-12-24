import React from 'react'; 
import { Link } from 'react-router-dom';
import api from '../../Services/api';

export interface Classes
{
    id: number;
    class_name: string; 
    year: number;
    name: string; 
    teacher_id: number;
}

interface ClassesProps  
{
    classes: Classes;
}

const ClassesItem: React.FC<ClassesProps> = ({classes})  =>
{
    const handleDeleteClass= async () =>
    {
        
        if(window.confirm(`Deseja excluir ${classes.class_name}? `))
            {
               console.log(classes.id);
                await api.delete('/classes',
                {
                    params:
                    {
                        id: classes.id
                    }
                }).then(
                    ()=>
                    {
                        alert('Turma excluída com Sucesso!'); 
                    }
                ).catch(
                    ()=>
                    {
                        alert('Erro ao excluir Turma!');
                    }
                );
            } 
        }
    return (
        <tr>
           <td>{classes.id}</td>    
           <td>{classes.class_name}</td>
           <td>{classes.name}</td>
           <td>{classes.year}</td>
           <td><Link to={`/studentClassRegister/${classes.id}`}>Adicionar</Link></td>
           <td><Link to={`/editClass/${classes.id}/${classes.teacher_id}`}>Editar</Link></td>
           <td><button className="buttonLists" onClick={handleDeleteClass}>Excluir</button></td>
        </tr>
    )
}

export default ClassesItem; 