import {Request, Response} from 'express';

import db from '../database/connection'; 

export default class AnnouncementsController
{

    async index(request: Request, response: Response) 
    {
        try 
        {
           const announcements =  await db('announcements').select('*'); 
             
           console.log(announcements);
            return response.status(201).json(announcements);
        }
        catch(err)
        {
            return response.status(400).json(
                {
                    error: "Unexpected error while creating a new announcement"
                }
            )
        }
    }
    async create(request: Request, response: Response)
    {
        const 
        {
            subject, 
            message, 
        } = request.body; 

        try 
        {
            await db('announcements').insert(
                {
                    subject, 
                    message, 
                }
            ); 
            return response.status(201).send();
        }
        catch(err)
        {
            return response.status(400).json(
                {
                    error: "Unexpected error while creating a new announcement"
                }
            )
        }
    }
}