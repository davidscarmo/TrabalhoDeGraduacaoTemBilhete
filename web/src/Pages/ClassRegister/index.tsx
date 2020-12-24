import React, { FormEvent, useEffect, useState } from 'react'; 

import './styles.css';

import api from '../../Services/api'; 
import Footer from '../../Components/Footer';
import PageHeader from '../../Components/PageHeader';
import {useHistory} from 'react-router-dom';
interface TeachersProps {
    id: number;
    name: string;
}

const ClassRegister = () => 
{
    const [class_name, setClassName] = useState(''); 
    const [year, setYear] = useState(0); 
    const [teacher_id, setTeacherId] = useState(''); 
    
    const [teachers, setTeachers] = useState([]); 
    const searchTeachers = async () => 
    {
        const response = await api.get('teachers');

        setTeachers(response.data); 
        console.log(response); 
    }

    useEffect(() => 
    {
        searchTeachers();
    }, []); 

    const navigate = useHistory();

    const handleCreateClass = (e: FormEvent) =>
    {
        e.preventDefault();
        api.post('/classes', 
        {   
            class_name, 
            year, 
            teacher_id, 
           

        }).then(
            ()=>
            {
                alert('Turma cadastrada com Sucesso!'); 
                navigate.push('/classesList'); 
            }
        ).catch(
            ()=>
            {
                alert('Erro ao cadastrar Turma! Confira os campos e tente novamente!');
            }
        );
    }

    return (
        <div className="container">
        <PageHeader title="Cadastre as suas turmas de forma fácil e rápida."/>
            
        <main className="form-area"> 
        
            <form className="form" onSubmit={handleCreateClass}>
               
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
                            <option value="0"> Escolha um Professor</option>
                            {teachers.map((teacher: TeachersProps) => 
                            {
                                return <option key={teacher.id} value={teacher.id}> {teacher.name}</option>
                            })}
                        </select>

                    </div>
               
                                                      
                    <div className="button-area-class">
                        <button type="submit">Cadastrar Turma</button>
                    </div>
            </form>
       
        </main>
         
             <Footer />
        </div>
    ); 
}

export default ClassRegister; 