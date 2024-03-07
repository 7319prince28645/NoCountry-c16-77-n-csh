import {baseApi} from "../lib/BaseApi";

export const BrandService= async () => {
    try{
        const response = await baseApi.get('api/brand')
        return response.data
    }
    catch (error) {
        console.error(error)
    }
}
