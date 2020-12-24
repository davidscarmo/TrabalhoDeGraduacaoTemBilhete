import {Request, Response} from 'express';

import db from '../database/connection'; 

export default class StudentClassControler 
{
    async studentByRA (request: Request, response: Response)
    {
        const{
            class_id
        } = request.query; 
        const StudentClassData = await db('studentClass')
        .select('students.id','students.name', 'students.ra')
        .innerJoin('classes', 'studentClass.class_id', '=', 'classes.id')
        .innerJoin('students', 'studentClass.student_id', '=', 'students.id')
        .where('class_id', '=', `${class_id}`)
        .orderBy('name', 'asc');
        
        
        //await db('classes').select('*').join('studentClass', 'classes.id', '=', 'studentClass.class_id').select(['classes.*', 'studentClass.*']) 
      
        return response.status(201).json(StudentClassData); 
    }


    async create(request: Request, response: Response)
    {
        const
        {
            ra,
            class_id
        } = request.body;
        
        try
        {
        const studentIdFound = await db('students').select('id').where('ra', '=', `${ra}`); 

        const {id} = studentIdFound[0];

        const student_id = id; 


        await db('studentClass').insert(
            {
                student_id, 
                class_id
            }
        ); 
        return response.status(201).send(); 
        }
        catch(err)
        {
            response.status(400).send(err);
        }
    }

    async className(request: Request, response: Response)
    {
        const{
            class_id
        } = request.query; 

        try
        {
            const className = await db('classes').select('class_name').where('id', '=', `${class_id}` ); 
            return response.status(201).json(className); 
        }
        catch(err)
        {
            return response.status(400).send(err);
        }

    }

    async delStudent(request: Request, response: Response)
    {
        const{
            id, 
            class_id
        } = request.query; 
        console.log(id, class_id); 
        try 
        {
            const deletedStudent = await db('studentClass').where('student_id', '=', `${id}`).andWhere('class_id', '=' ,`${class_id}`).del(); 
            return response.status(200).json(deletedStudent); 
           
        }
        catch(err)
        {
            return response.status(400).send(err);
        }
    }
}