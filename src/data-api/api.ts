import axios from "axios";

export const fetchApiData = async () => {
    
    const response = await axios.get(
      "https://mocki.io/v1/795a4a6b-db23-4578-9a28-5958bc958293"
    );
    return response.data;
  };