import { baseApi } from "../../lib/BaseApi";

export const postNewBrand = async (brand, token) => {
    try {
        const response = await baseApi.post('api/brand', {
            name : brand
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }
    catch (error) {
        console.error(error)
    }
}