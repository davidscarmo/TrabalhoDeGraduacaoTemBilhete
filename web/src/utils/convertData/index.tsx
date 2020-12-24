const realDate = (params: string) =>
{
    
    const year = params.slice(0,4);
    const month = params.slice(5,7);
    const day = params.slice(8,10);
    const stringDate = `${day}/${month}/${year}`;
    return stringDate;
}

export default realDate; 