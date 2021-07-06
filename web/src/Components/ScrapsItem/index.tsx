import React from 'react'; 
import ConvertData from '../../utils/convertData'; 
export interface Scraps
{
    id: number; 
    name: string;
    subject: string;
    message: string;
    scrapsDate: string;
    status: string;
    studentClass_id: number; 
}

interface ScrapsProps  
{
    scraps: Scraps;
}

const ScrapsItem: React.FC<ScrapsProps> = ({scraps})  =>
{
        let status = ''; 
        if(scraps.status === 'no')
        {
            status = 'Não visualizada'; 
        }
        else if(scraps.status === 'yes')
        {
            status= 'Visualizada'; 
        }
    return (
        <tr>
           <td>{scraps.id}</td>    
           <td>{scraps.name}</td>
           <td>{scraps.subject}</td>
           <td>{scraps.message}</td>
           <td>{ConvertData(scraps.scrapsDate)}</td>
           <td>{status}</td>
        </tr>
    )
}

export default ScrapsItem; 