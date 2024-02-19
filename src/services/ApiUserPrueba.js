import axios from "axios"

const getObtenerUser = async() =>{
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        return response.data;
    }
    catch(error){
        console.error(error);
    }

}

export default getObtenerUser;