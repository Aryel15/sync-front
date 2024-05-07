import { api } from "./api";

async function validationToken(){
    try{
        const response = await api.get('/auth')
        return response.data
    }catch(error){
        console.error(error)
        return false
    }
}