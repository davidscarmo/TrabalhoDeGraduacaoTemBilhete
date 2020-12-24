import {Request, Response} from 'express'; 

import db from '../database/connection'; 

export default class TeachersController 
{
    async index (request: Request, response: Response)
    {
       
       
        const teachers = await db('classes').select('*').rightJoin('teacherClass', 'classes.id', 'teacherClass.class_id' ).rightJoin('teachers','teacherClass.teacher_id','teachers.id');
        return response.json(teachers);
       

        
    }
    
    async teacherData(request: Request, response: Response) 
    {
        const {
            teacher_id 
        } = request.query; 

        try{
            const teacherData = await db('teachers').select('*').where('id', '=', `${teacher_id}`); 
            return response.status(200).json(teacherData); 
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
            email, 
            rg, 
            cpf,
            dataNascimento,
            tel, 
            pasep
        } = request.body; 

    

        try{

           await db('teachers').insert(
                {
                    name,
                    email, 
                    rg, 
                    cpf,
                    dataNascimento,
                    tel,
                    pasep
                }
            ); 

            return response.status(201).send();
        }
        catch(err)
        {
            return response.status(400).json(
                {
                    error: 'Unexpected error while creating a new teacher'
                }
            )
        }
    }
    async editTeacher(request: Request, response: Response)
    {
        const 
        {
            teacher_id, 
            name,
            email, 
            rg, 
            cpf,
            dataNascimento,
            tel, 
            pasep
        } = request.body; 

        try 
        {
            await db('teachers')
                .where('id', '=', `${teacher_id}`)
                .update({
                    name: name, 
                    email: email,  
                    rg: rg,
                    cpf: cpf,
                    dataNascimento: dataNascimento, 
                    tel: tel, 
                    pasep: pasep, 
                }); 
            
            return response.status(200).send(); 
        }
        catch(err)
        {
            return response.status(400).json(err);
        }
        
    }
    async delTeacher(request: Request, response: Response)
    {
        const 
        {
            id
        } = request.query; 
        
        try
        {
            
            await db('teachers').where('id', `${id}`).del(); 
            return response.status(200).send(); 
        }
        catch(err)
        {
            return response.status(400).json(err);
        }

    }
};