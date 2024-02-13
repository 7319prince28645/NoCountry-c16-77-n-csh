import axios from "axios";

const useApiProducts = async() => {
   try{
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
   }
    catch(error){
         console.error(error);
    }
}
export default useApiProducts;