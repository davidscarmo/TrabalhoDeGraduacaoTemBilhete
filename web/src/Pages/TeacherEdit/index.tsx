import React, { FormEvent, useEffect, useState } from 'react'; 
import { useHistory, useParams } from 'react-router-dom';
import './styles.css';

import api from '../../Services/api'; 
import Footer from '../../Components/Footer';
import PageHeader from '../../Components/PageHeader';

const TeacherEdit = () => 
{
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [rg, setRG] = useState(''); 
    const [cpf, setCPF] = useState(''); 
    const [dataNascimento, setDataNascimento] = useState(''); 
    const [tel, setTel] = useState(''); 
    const [pasep, setPasep] = useState(''); 
    
    const history = useHistory();

    interface ParamType
    {
        teacher_id: string; 
    }

    let  param  = useParams<ParamType>(); 
   
    const teacher_id = param.teacher_id;

    const searchTeacher = async () => 
    {
        const response = await api.get('/teacherData', {
            params:
            {
                teacher_id: teacher_id, 
                 
            }
        });

        setName(response.data[0].name); 
        setEmail(response.data[0].email);
        setRG(response.data[0].rg);
        setCPF(response.data[0].cpf);
        setDataNascimento(response.data[0].dataNascimento);
        setTel(response.data[0].tel);
        setPasep(response.data[0].pasep);
      
        console.log(response); 
    }

   useEffect(() => 
       {
           searchTeacher(); 
       }
   , []);

    const handleEditTeacher = (e: FormEvent) =>
    {
        e.preventDefault();
        api.put('/teachers', 
        {   
            teacher_id: teacher_id,
            name, 
            email, 
            rg, 
            cpf,
            dataNascimento, 
            tel,
            pasep
        }).then(
            ()=>
            {
                alert('Professor editado com Sucesso!'); 
                history.push('/teachersList');
            }
        ).catch(
            ()=>
            {
                alert('Erro ao editar Professor! Confira os campos e tente novamente!');
            }
        );
    }

    return (
        <div>
        <PageHeader title="Edite o professor de forma fácil e rápida."/>
            
        <main className="form-area"> 
        
            <form className="form" onSubmit={handleEditTeacher}>
               
                    <h2>
                        Preencha os dados
                    </h2>
                                 
                    <div className="input-group">
                        <label htmlFor="name">Nome</label> <br/>
                        <input 
                            type="text" 
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                            required/>

                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label> <br/>
                        <input 
                            type="email" 
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            required/>

                    </div>
                    <div className="input-group">
                        <label htmlFor="rg">R.G.</label> <br/>
                        <input 
                            type="text" 
                            name="rg"
                            id="rg"
                            value={rg}
                            onChange={(e)=>{setRG(e.target.value)}}
                            required/>

                    </div>
                    <div className="input-group">
                        <label htmlFor="cpf">CPF</label> <br/>
                        <input 
                            type="text" 
                            name="cpf"
                            id="cpf"
                            value={cpf}
                            onChange={(e)=>{setCPF(e.target.value)}}
                            required/>

                    </div>
                    <div className="input-group">
                        <label htmlFor="dataNascimento">Data de Nascimento</label> <br/>
                        <input 
                            type="date" 
                            name="dataNascimento"
                            id="dataNascimento"
                            value={dataNascimento}
                            onChange={(e)=>{setDataNascimento(e.target.value)}}
                            required/>

                    </div>
                    <div className="input-group">
                        <label htmlFor="tel">Telefone</label> <br/>
                        <input 
                            type="text" 
                            name="tel"
                            id="tel"
                            value={tel}
                            onChange={(e)=>{setTel(e.target.value)}}
                            required/>

                    </div>
                    <div className="input-group">
                        <label htmlFor="pasep">PASEP</label> <br/>
                        <input 
                            type="text" 
                            name="pasep"
                            id="pasep"
                            value={pasep}
                            onChange={(e)=>{setPasep(e.target.value)}}
                            required/>

                    </div>
                                                      
                    <div className="button-area-teacher">
                        <button type="submit">Editar Professor</button>
                    </div>
            </form>
       
        </main>
         
             <Footer />
        </div>
    ); 
}

export default TeacherEdit; 