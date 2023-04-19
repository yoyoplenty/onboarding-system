import axios from "axios";

const baseUrl = process.env.BASE_URL || "https://user-management-system-zeq5.onrender.com/api/v1/";
// const baseUrl = "https://jsonplaceholder.typicode.com/";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

/**MAKE API REQUESTS */

export const getData = async (url: string) => {
  try {
    const { data } = await axios.get(`${baseUrl}${url}`, config);

    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const postData = async (url: string, payload: any): Promise<any> => {
  const postPayload = JSON.stringify(payload);

  try {
    const { data } = await axios.post(`${baseUrl}${url}`, postPayload, config);

    return data;
  } catch (error) {
    console.log(error);
  }
};
