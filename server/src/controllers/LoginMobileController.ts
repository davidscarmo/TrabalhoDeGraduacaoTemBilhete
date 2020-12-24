import {Request, Response} from 'express'; 

import db from '../database/connection';

interface RaProps
{
    ra: string, 
}

export default class LoginMobileController 
{
    async login(request: Request, response: Response)
    {
        const {ra} = request.query;
     
        const validLogin = await db('students').select('id').where('ra', '=', `${ra}`); 

        if(validLogin.toString() !== '')
        {          
        response.status(200).json(true);
        }
        else{
        response.status(500).json(false);
        }
        
    } 
}
