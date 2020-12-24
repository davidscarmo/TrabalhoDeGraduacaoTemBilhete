import {Request, Response} from 'express'; 
 
import db from '../database/connection'; 

export default class ClassesController 
{
    async index (request: Request, response: Response)
    {
        const classes  = await db('classes').select('classes.id', 'classes.class_name', 'classes.year', 'teacherClass.teacher_id', 'teachers.name').innerJoin('teacherClass', 'classes.id', 'teacherClass.class_id').innerJoin('teachers', 'teacherClass.teacher_id', 'teachers.id'); 

        return response.status(201).json(classes); 
    }

    async classData(request: Request, response: Response)
    {
        const { 
            class_id, 
            current_teacher_id
        } = request.query; 

        console.log(current_teacher_id);
        try
        {
            const classData = await db('classes').select('classes.id', 'classes.class_name', 'classes.year', 'teacherClass.teacher_id', 'teachers.name').innerJoin('teacherClass', 'classes.id', 'teacherClass.class_id').innerJoin('teachers', 'teacherClass.teacher_id', 'teachers.id').where(`teacher_id`,  '=', `${current_teacher_id}`); 
            return response.status(200).json(classData);
        }
        catch(err)
        {
            return response.json(err);
        }
    }
    async create(request: Request, response: Response)
    {
        const 
        {
            class_name, 
            year, 
            teacher_id, 
        } = request.body;
        console.log(teacher_id);
        const trx = await db.transaction(); 
        try
        {

        const insertedClassId = await trx('classes').insert(
            {
                class_name, 
                year  
            }
        )
        console.log('ok');
        const class_id = insertedClassId[0]; 
        console.log(class_id);
        await trx('teacherClass').insert(
            {
                teacher_id, 
                class_id
            }
        )

        trx.commit(); 

        return response.status(201).send(); 
        }
        catch(err)
        {
            trx.rollback();
            return response.status(400).json(
                {
                    error: 'Unexpected error while creating a new class'
                }
            )
        }
    }
    async editClass (request: Request, response: Response)
    {
        const
        {
            class_id, 
            class_name, 
            year, 
            current_teacher_id, 
            teacher_id, 
        }= request.body; 
        const trx = await db.transaction(); 
        try
        {
            await trx('classes')
            .where('id', '=', `${class_id}`)
            .update({
              class_name: `${class_name}`,
              year: `${year}`
            }); 

            await trx('teacherClass').where('class_id', '=', `${class_id}`).andWhere('teacher_id', '=', `${current_teacher_id}`).update(
                {
                    teacher_id: `${teacher_id}`,
                }
            ); 

            trx.commit();
    
            return response.status(200).send(); 
        }
        catch(err)
        {
            trx.rollback();
            return response.json(err).send();
        }
    }
    async delClass(request: Request, response: Response)
    {
        const 
        {
            id
        } = request.query; 
        
        try
        {
            
            await db('classes').where('id', `${id}`).del(); 
            return response.status(200).send(); 
        }
        catch(err)
        {
            return response.status(400).json(err);
        }

    }
}