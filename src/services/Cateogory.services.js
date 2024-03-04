import { baseApi } from "../lib/BaseApi";

export const CategoryService = async () => {
    try {
        const token = JSON.parse(localStorage.getItem('user'))
        const response = await baseApi.get('api/category', {
            headers: {
                Authorization: `Bearer ${token?.token}`
            }
        })
        return response.data
    } catch (error) {
        console.error(error)
    }
}