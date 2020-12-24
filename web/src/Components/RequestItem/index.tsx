
import React from 'react'; 
import api from '../../Services/api';
import RealDate from './../../utils/convertData'; 
import './styles.css';
export interface RequestsInterface
{
    id: number;
    name: string; 
    ra: string;
    class: string; 
    documentType: string; 
    requestDate: string;
    note: string;
    status: string; 
}

interface RequestsProps  
{
    requests: RequestsInterface;
}

const handleChangeStatus= async (param: number) =>
{
    if(window.confirm('Deseja confirmar a entrega do documento?'))
    {
        try
        {
            const response = await api.put('requests', 
            {
                params:
                {
                    id: param,
                
                }
            });
    
            console.log(response.status);
        }
        catch(e)
        {
            alert("Não foi possível confirmar a entrega do documento!");
        }
    }
    }
    


const RequestItem: React.FC<RequestsProps> = ({requests})  =>
{
    const teste = (param: string) => 
    {
        if(param === 'no')
            return( 
                <button className="requestButtonConfirm" onClick={() => {handleChangeStatus(requests.id)}}> Confirmar Entrega</button>
            )
        else if(param === 'yes')
        {
            return('Entregue');
        }
    
   }
    return (
        <tr>
           <td>{requests.name}</td>
           <td>{requests.ra}</td>
           <td>{requests.class}</td>
           <td>{requests.documentType}</td>
           <td>{RealDate(requests.requestDate)}</td>
           <td>{requests.note}</td>
           <td>{teste(requests.status)}</td>
        </tr>
    )
}

export default RequestItem; 