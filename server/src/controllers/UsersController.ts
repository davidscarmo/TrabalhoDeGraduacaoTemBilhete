import {Request, Response} from 'express'; 
import db from '../database/connection';
import bcrypt from 'bcryptjs'; 

export default class StudentsController 
{

    async index (request: Request, response: Response)
    {
        const allUsers = await db('users').select('*'); 

        return response.json(allUsers);
    }
    async create(request: Request, response: Response)
    {


        const 
        {
            user, 
            email,
            password
        } = request.body; 
        const hash = await bcrypt.hash(password, 10);
        try
        {
           await db('users')
            .insert(
                {
                    user, 
                    email,
                    password: hash
                }
            ); 

        return response.status(201).send();
        }
        catch(err)
        {
            return response.status(400).json(err)
        }
    }
};