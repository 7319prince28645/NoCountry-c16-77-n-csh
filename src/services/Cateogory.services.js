import { baseApi } from "../lib/BaseApi";

export const CategoryService = async () => {
    try {
        const response = await baseApi.get('api/category')
        return response.data
    } catch (error) {
        console.error(error)
    }
}