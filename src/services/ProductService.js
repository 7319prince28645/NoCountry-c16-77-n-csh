import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/products';

const ProductService = {
    getAllProducts: async () => {
        try {
            const response = await axios.get(BASE_URL);
            return response.data;
        } catch (error) {
            console.error(error);
            return [];
        }
    },
    addProduct: async (productData) => {
        try {
            const response = await axios.post(BASE_URL, productData);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },
    updateProduct: async (productId, productData) => {
        try {
            const response = await axios.put(`${BASE_URL}/${productId}`, productData);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },
    deleteProduct: async (productId) => {
        try {
            const response = await axios.delete(`${BASE_URL}/${productId}`);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
};

export default ProductService;
