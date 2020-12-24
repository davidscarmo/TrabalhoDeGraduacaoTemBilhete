import React, { FormEvent, useEffect, useState } from 'react'; 

import './styles.css';

import api from '../../Services/api'; 
import Footer from '../../Components/Footer';
import PageHeader from '../../Components/PageHeader';
import { useParams, useHistory } from 'react-router-dom';

interface TeachersProps {
    id: number;
    name: string;
}
interface ParamType
{
    class_id: string; 
    current_teacher_id: string;
}

const ClassEdit = () => 
{
    const [class_name, setClassName] = useState(''); 
    const [year, setYear] = useState(0); 
    const [teacher_id, setTeacherId] = useState(''); 
    const [teachers, setTeachers] = useState([]); 
    
    let  param  = useParams<ParamType>(); 
   
    const class_id = param.class_id;
    const current_teacher_id = param.current_teacher_id; 
    const history = useHistory(); 
    const searchClass = async () => 
    {
        const response = await api.get('/classData', {
            params:
            {
                class_id: class_id, 
                current_teacher_id: current_teacher_id, 
            }
        });
        
       setClassName(response.data[0].class_name);
       setYear(response.data[0].year);
        setTeacherId(response.data[0].teacher_id); 
        console.log(response); 
        console.log('teste');
    }
    const searchTeachers = async () => 
    {
        const response = await api.get('teachers');

        setTeachers(response.data); 
        console.log(response); 
    }

    useEffect(() => 
    {
        searchClass();
        searchTeachers(); 
    },[]); 

    const handleCreateAnnouncements = (e: FormEvent) =>
    {
        e.preventDefault();
       api.put('/classes', 
        {   class_id, 
            class_name, 
            year, 
            current_teacher_id: current_teacher_id, 
            teacher_id, 
           

        }).then(
            ()=>
            {
                alert('Turma alterada com Sucesso!'); 
                history.push('/classesList');
            }
        ).catch(
            ()=>
            {
                alert('Erro ao alterar Turma! Confira os campos e tente novamente!');
            }
        );
        
    }

    return (
        <div className="container">
        <PageHeader title="Edite a sua turma de forma fácil e rápida."/>
            
        <main className="form-area"> 
        
            <form className="form" onSubmit={handleCreateAnnouncements}>
               
                    <h2>
                        Preencha os dados
                    </h2>
                                 
                    <div className="input-group">
                        <label htmlFor="class_name">Nome da Turma</label> <br/>
                        <input 
                            type="text" 
                            name="class_name"
                            id="class_name"
                            value={class_name}
                            onChange={(e)=>{setClassName(e.target.value)}}
                            required/>

                    </div>
                    <div className="input-group">
                        <label htmlFor="year">Ano</label> <br/>
                        <input 
                            type="number" 
                            name="year"
                            id="year"
                            value={year}
                            onChange={(e)=>{setYear(e.target.valueAsNumber)}}
                            required/>

                    </div>
                    <div className="input-group">
                        <label htmlFor="teacher_id">Professor da Turma</label> <br/> 
                        <select name="teacher_id" id="teacher_id" value={teacher_id} onChange={(e)=>{setTeacherId(e.target.value)}} required>
                            
                            {teachers.map((teacher: TeachersProps) => 
                            {
                                if(teacher.id.toString() === teacher_id)
                                {
                                    return <option key={teacher.id} value={teacher.id} selected> {teacher.name} </option>
                                }
                                else
                                {
                                    return <option key={teacher.id} value={teacher.id}> {teacher.name}</option>
                                }
                            })}
                        </select>

                    </div>
               
                                                      
                    <div className="button-area-class">
                        <button type="submit">Alterar Turma</button>
                    </div>
            </form>
       
        </main>
         
             <Footer />
        </div>
    ); 
}

export default ClassEdit; 