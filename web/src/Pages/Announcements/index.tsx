import React, { FormEvent, useState } from 'react'; 

import './styles.css';

import api from '../../Services/api'; 
import Footer from '../../Components/Footer';
import PageHeader from '../../Components/PageHeader';

const Announcements = () => 
{
    const [subject, setSubject] = useState(''); 
    const [message, setMessage] = useState(''); 

    const handleCreateAnnouncements = (e: FormEvent) =>
    {
        e.preventDefault();
        api.post('/announcements', 
        {
            subject, 
            message
        }).then(
            ()=>
            {
                alert('Bilhete Enviado com Sucesso!'); 
            }
        ).catch(
            ()=>
            {
                alert('Erro no enviar bilhete! Confira os campos e tente novamente!');
            }
        );
    }

    return (
        <div>
        <PageHeader title="Envie bilhetes de forma fácil e rápida."/>
            
        <main className="form-area"> 
        
            <form className="form" onSubmit={handleCreateAnnouncements}>
               
                    <h2>
                        Preencha os dados
                    </h2>
                    
                    

                    <div className="input-group">
                        <label htmlFor="subject">Assunto</label> <br/>
                        <input 
                            type="text" 
                            name="subject"
                            id="subject"
                            value={subject}
                            onChange={(e)=>{setSubject(e.target.value)}}/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="message">Mensagem</label><br/>
                        <textarea 
                            name="message" 
                            id="message" 
                            cols={30} 
                            rows={20}
                            value={message}
                            onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                    </div>

                    <div className="button-area">
                        <button type="submit">Enviar Bilhete</button>
                    </div>
            </form>
       
        </main>
         
             <Footer />
        </div>
    ); 
}

export default Announcements; 