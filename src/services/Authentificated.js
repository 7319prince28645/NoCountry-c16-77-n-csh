import { baseApi } from "../lib/BaseApi";

export const getObtenerUser = async (email1,contra) => {
  try {
    const response = await baseApi.post("api/Authentication/Validate", {
        email: email1,
        password: contra,
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener el usuario", error);
  }
};
