import {Request, Response} from 'express'; 
import db from '../database/connection';

export default class StudentsController 
{

    async index (request: Request, response: Response)
    {
        const allStudents = await db('classes')
        .select('*')
        .rightJoin('studentClass', 'classes.id', 'studentClass.class_id' )
        .rightJoin('students','studentClass.student_id','students.id')
        .orderBy('class_name', 'asc')
        .orderBy('name', 'asc'); 

        return response.json(allStudents);
    }

    async studentData(request: Request, response: Response)
    {
        const 
        {
            student_id
        } = request.query;
        
        try
        {
            const studentData = await db('students').select('*').where('id', '=', `${student_id}`);
            return response.status(200).json(studentData); 
        }
        catch(err)
        {
            return response.status(400).json(err);
        }

    }
    async create(request: Request, response: Response)
    {


        const 
        {
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
        } = request.body; 
    
      
        try
        {
           await db('students')
            .insert(
                {
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
                }
            ); 

        return response.status(201).send();
        }
        catch(err)
        {
            return response.status(400).json(err)
        }
    }

    async editStudent(request: Request, response: Response)
    {
        const 
        {
            student_id, 
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
        } = request.body; 
        
        console.log(student_id);
        try
        {
            await db('students')
                .where('id', '=', `${student_id}`)
                .update({
                    name: name,
                    ra: ra,
                    rg:rg,
                    cpf: cpf, 
                    dataNascimento: dataNascimento,  
                    nomeMae: nomeMae,
                    nomePai:  nomePai, 
                    tel1: tel1, 
                    tel1Desc: tel1Desc, 
                    tel2: tel2, 
                    tel2Desc:tel2Desc, 
                }); 
            
            return response.status(200).send(); 
        }
        catch(err)
        {
            return response.status(400).json(err);
        }
    }
    async delStudent( request: Request, response: Response)
    {
        const 
        {
            id
        } = request.query; 
        
        try
        {
            console.log(id);
            await db('students').where('id', `${id}`).del(); 
            return response.status(200).json(id); 
        }
        catch(err)
        {
            return response.status(400).json(err);
        }

    }
};