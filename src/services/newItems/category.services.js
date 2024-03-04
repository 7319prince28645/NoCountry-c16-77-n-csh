import { baseApi } from "../../lib/BaseApi";

export const postNewCategory = async (category, token) => {
    try {
        const response = await baseApi.post('api/category', {
            name: category
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

