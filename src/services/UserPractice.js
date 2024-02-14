import axios from "axios";

const fetchUserPractice = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data;
    } catch (error) {
        console.error(error);
    }
    }

export default fetchUserPractice;