import React, { FormEvent, useEffect, useState } from 'react'; 

import './styles.css';

import api from '../../Services/api'; 
import Footer from '../../Components/Footer';
import PageHeader from '../../Components/PageHeader';
import { useHistory, useParams } from 'react-router-dom';

const StudentEdit = () => 
{
    const [name, setName] = useState(''); 
    const [ra, setRA] = useState(''); 
    const [rg, setRG] = useState(''); 
    const [cpf, setCPF] = useState(''); 
    const [dataNascimento, setDataNascimento] = useState(''); 
    const [nomeMae, setNomeMae] = useState(''); 
    const [nomePai, setNomePai] = useState(''); 
    const [tel1, setTel1] = useState(''); 
    const [tel1Desc, setTel1Desc] = useState(''); 
    const [tel2, setTel2] = useState(''); 
    const [tel2Desc, setTel2Desc] = useState(''); 
    
    const history = useHistory(); 
       
    interface ParamType
    {
        student_id: string; 
    }

    let  param  = useParams<ParamType>(); 
   
    const student_id = param.student_id;

    const searchStudent = async () => 
    {
        const response = await api.get('/studentData', {
            params:
            {
                student_id: student_id, 
                 
            }
        });

        setName(response.data[0].name);
        setRA(response.data[0].ra);
        setRG(response.data[0].rg);
        setCPF(response.data[0].cpf);
        setDataNascimento(response.data[0].dataNascimento);
        setNomeMae(response.data[0].nomeMae);
        setNomePai(response.data[0].nomePai);
        setTel1(response.data[0].tel1);
        setTel1Desc(response.data[0].tel1Desc);
        setTel2(response.data[0].tel2);
        setTel2Desc(response.data[0].tel2Desc);
      
        console.log(response); 
    }

   useEffect(() => 
       {
           searchStudent(); 
       }
   , []);

   

    const handleCreateStudents = (e: FormEvent) =>
    {
        e.preventDefault();
        api.put('/students', 
        {   
            student_id: student_id,
            name, 
            ra, 
            rg, 
            cpf,
            dataNascimento, 
            nomeMae, 
            nomePai, 
            tel1, 
            tel1Desc,
            tel2, 
            tel2Desc
            
        }).then(
            ()=>
            {
                alert('Aluno editado com Sucesso!'); 
                history.push('/studentsList');
            }
        ).catch(
            ()=>
            {
                alert('Erro ao aditar Aluno! Confira os campos e tente novamente!');
            }
        );
    }

    return (
        <div>
        <PageHeader title="Edite o aluno de forma fácil e rápida."/>
            
        <main className="form-area"> 
        
            <form className="form" onSubmit={handleCreateStudents}>
               
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
                        <label htmlFor="ra">R.A.</label> <br/>
                        <input 
                            type="text" 
                            name="ra"
                            id="ra"
                            value={ra}
                            onChange={(e)=>{setRA(e.target.value)}}
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
                            />

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
                        <label htmlFor="nomeMae">Nome da Mae</label> <br/>
                        <input 
                            type="text" 
                            name="nomeMae"
                            id="nomeMae"
                            value={nomeMae}
                            onChange={(e)=>{setNomeMae(e.target.value)}}
                            required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="nomePai">Nome do Pai</label> <br/>
                        <input 
                            type="text" 
                            name="nomePai"
                            id="nomePai"
                            value={nomePai}
                            onChange={(e)=>{setNomePai(e.target.value)}}
                            />  
                    </div>
                    <div className="input-group">
                        <label htmlFor="tel1">Telefone 1</label> <br/>
                        <input 
                            type="text" 
                            name="tel1"
                            id="tel1"
                            value={tel1}
                            onChange={(e)=>{setTel1(e.target.value)}}
                            required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="nomeMae">Falar com:  </label> <br/>
                        <input 
                            type="text" 
                            name="tel1Desc"
                            id="tel1Desc"
                            value={tel1Desc}
                            onChange={(e)=>{setTel1Desc(e.target.value)}}
                            required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="tel2">Telefone 2</label> <br/>
                        <input 
                            type="text" 
                            name="tel2"
                            id="tel2"
                            value={tel2}
                            onChange={(e)=>{setTel2(e.target.value)}}
                            />
                    </div>
                    <div className="input-group">
                        <label htmlFor="nomeMae">Falar com:  </label> <br/>
                        <input 
                            type="text" 
                            name="tel2Desc"
                            id="tel2Desc"
                            value={tel2Desc}
                            onChange={(e)=>{setTel2Desc(e.target.value)}}
                            />
                    </div>
                                                      
                    <div className="button-area-student">
                        <button type="submit">Editar Aluno</button>
                    </div>
            </form>
       
        </main>
         
             <Footer />
        </div>
    ); 
}

export default StudentEdit; 