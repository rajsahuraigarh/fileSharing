import aixos from 'axios';

const API_URL="http://localhost:8000";

export const uploadFile = async (data)=>{
    try{
        let reasponse =await aixos.post(`${API_URL}/upload` ,data);
        return reasponse.data;
    }catch(err){
        console.error('Error while calling the api',err.massage);
    }
}
