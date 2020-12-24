import { Request, Response} from 'express'; 
import db from '../database/connection'; 

export default class RequestsController 
{
    async latestRequests(request: Request, response: Response)
    {
        const requestsData = await db('requests').select('*').limit(5).orderBy('requestDate', 'desc');

        return response.status(201).json(requestsData); 
    }

    async index(request: Request, response: Response)
    {
        const requests = await db('requests').select('*').orderBy('requestDate', 'desc');;
        return response.status(201).json(requests); 
    }
    async editRequestStatus(request: Request, response: Response)
    {
        const requestId = request.body; 
        console.log(requestId.params.id);
        try
        {
            await db('requests')
                .where('id', '=', `${requestId.params.id}`)
                .update({
                    status: 'yes',
                }); 
            
            return response.status(200).send(); 
           
        }
        catch(err)
        {
            return response.status(400).json(err);
        }
    }
}