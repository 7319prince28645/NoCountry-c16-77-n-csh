import {baseApi} from "../lib/BaseApi";

export const getObtenerUser = async() =>{
    try{
        const response = await baseApi.get('api/Users')
        return response.data;
    }
    catch(error){
        console.error(error);
    }
}

