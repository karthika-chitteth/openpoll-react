import axios, { AxiosError, AxiosResponse } from "axios";

const apiInstance = axios.create({
  // baseURL: "https://openpoll.azurewebsites.net/api/",
  baseURL: "http://localhost:3000",
});
apiInstance.interceptors.request.use((config) => {
  return config;
});
apiInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status == 401) {
      console.log("error");
    }
    return error;
  }
);
export default apiInstance;
