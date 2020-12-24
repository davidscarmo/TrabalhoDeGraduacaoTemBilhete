import {Request, Response} from 'express'; 
import {createTransport} from 'nodemailer'; 
import db from '../database/connection'; 
export default class EmailController 
{
    
    async sendEmail(request: Request, response: Response)
    {
        const connection = createTransport({
            host: 'smtp.gmail.com', 
            port: 587, 
            auth: {
                user: 'adicionar um gmail para o envio ', 
                pass: 'inserir senha '
            }
        }); 
        const messageTextRa = request.query;
        
        console.log(messageTextRa);
        

        const ra = messageTextRa.ra; 
        const studentNameId = await db('students').select(['name', 'id']).where('ra', '=', `${ra}`); 
        const subject = messageTextRa.subject?.toString(); 
        const studentClassId = await db('studentClass').select('class_id', 'id').where('student_id', '=', `${studentNameId[0].id}`);
       console.log(studentClassId); 
        const studentClassName = await db('classes').select('class_name').where('id', '=', studentClassId[studentClassId.length -1].class_id); 

        console.log(studentClassName); 
       // console.log(studentClassId);
        let messageString = ''; 
        let note: (string | undefined) = ''; 
        if( subject == 'Recado Aplicativo')
        {
            messageString = messageTextRa.message + `\n\nRecado enviado pelo responsável da/do ${studentNameId[0].name}\n R.A.: ${ra} `; 
        }
        else 
        {
            let obs: (string | undefined) = 'Sem observações'; 
            console.log(messageTextRa.message);
            if(messageTextRa.message !== '')
            {
              obs = messageTextRa.message?.toString();  
            }
            note = obs; 
            messageString = `Solicitação de documento. \n\nTipo: ${messageTextRa.documentType} \nDados\nNome:${studentNameId[0].name} \nRA: ${ra} \nTurma: ${studentClassName[studentClassName.length -1].class_name} \nObservação: ${obs} `
        }

        const message = messageString; 

        console.log(message); 
        
        const messageBody = {
            from: 'adicionar o email de envio', // Sender address
            to: 'adicionar o email que vai receber',         // List of recipients
            subject: subject + ` - ${studentNameId[0].name}` + ` - ${studentClassName[0].class_name}`, // Subject line
            text: message // Plain text body
        };
        console.log(messageBody)

        
        
        connection.sendMail(messageBody, async function(err, info) {
            if (err) {
              console.log(err)
              return response.status(400).send(err);
            } else {
              console.log(info);
              try{
                  await db('requests').insert(
                      {
                          name: studentNameId[0].name , 
                          ra: `${ra}`, 
                          class: `${studentClassName[0].class_name}`, 
                          documentType: `${messageTextRa.documentType}`,   
                          studentClass_id: studentClassId[studentClassId.length -1].id,
                          note: note,
                      }
                 )
                }
                catch(err)
                {
                    console.log(err)
                    return response.status(400).send('erro ao armazenar a solicitação no banco de dados'); 
                }
              return response.status(201).send();
            }
        });
        }
       
}