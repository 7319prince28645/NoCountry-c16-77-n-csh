import axios from "axios";

const commonApi = "https://api-cpe.sunat.gob.pe/v1/contribuyente/controlcpe/comprobantes/sustento";

const postSunat = async (ruc) => {
  try {
    const response = await axios.post(commonApi, [
      {
        "numRuc": "20145236524",
        "codCpe": "01",
        "numSerie": "E001",
        "numCpe": 81
      },
      {
        "numRuc": "20145236524",
        "codCpe": "02",
        "numSerie": "E002",
        "numCpe": 90
      }
    ]);

    return response.data;
  } catch (error) {
    console.error("Error al realizar la solicitud POST a la SUNAT:", error);
    throw error;
  }
};

export default postSunat ;

