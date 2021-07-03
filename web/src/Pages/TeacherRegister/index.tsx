import React, { FormEvent, useState } from 'react'; 

import './styles.css';
import { useHistory } from 'react-router-dom';
import api from '../../Services/api'; 
import Footer from '../../Components/Footer';
import PageHeader from '../../Components/PageHeader';

const TeacherRegister = () => 
{
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [rg, setRG] = useState(''); 
    const [cpf, setCPF] = useState(''); 
    const [dataNascimento, setDataNascimento] = useState(''); 
    const [tel, setTel] = useState(''); 
    const [pasep, setPasep] = useState(''); 
    
    const navigate = useHistory();

    const handleCreateTeacher = (e: FormEvent) =>
    {
        e.preventDefault();
        api.post('/teachers', 
        {   
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
                alert('Professor cadastrado com Sucesso!'); 
                navigate.push('/teachersList');
            }
        ).catch(
            ()=>
            {
                alert('Erro ao cadastrar Professor! Confira os campos e tente novamente!');
            }
        );
    }

    return (
        <div>
        <PageHeader title="Cadastre os professores de forma fácil e rápida.."/>
            
        <main className="form-area"> 
        
            <form className="form" onSubmit={handleCreateTeacher}>
               
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
                        <button type="submit">Cadastrar Professor</button>
                    </div>
            </form>
       
        </main>
         
           
        </div>
    ); 
}

export default TeacherRegister; 