import {baseApi} from "../lib/BaseApi";

export const getObtenerUserAuthen = async(id,token) =>{
    try{
        const response = await baseApi.get(`api/Users/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return response.data;
    }
    catch(error){
        console.error(error);
    }
}

