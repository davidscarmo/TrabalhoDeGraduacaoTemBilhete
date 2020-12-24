import {Request, Response} from 'express'; 
import db from '../database/connection';
import bcrypt from 'bcryptjs';  

interface LoginProps 
{
    password: string, 
    user: string
}
export default class LoginWebController
{
    async login(request: Request, response: Response)
    {
        const {user, password} = request.body; 


    try
    {
        const validLogin = await db('users').select('password').where('user', '=', `${user}`);
        
        const isValid = await bcrypt.compare(password,validLogin[0].password); 

       
        if(isValid)
        {
            return response.status(201).json(true); 
        }
        else
        {
            return response.status(201).json('Senha Incorreta!'); 
        }
    }
    catch(err)
    {
        return response.status(201).json('Usuário Incorreto'); 
    } 
        
       
    }
}