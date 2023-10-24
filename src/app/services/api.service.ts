import axios, { AxiosError, AxiosResponse } from "axios";
// import { useNavigate } from "react-router-dom";

const apiInstance = axios.create({
  // baseURL: "https://openpoll.azurewebsites.net/api/",
  baseURL: "http://localhost:3000",
});
// eslint-disable-next-line react-hooks/rules-of-hooks
// const navigate = useNavigate();
apiInstance.interceptors.request.use((config) => {
  console.log(config);

  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }
  config.headers["Content-Type"] = "application/json";
  return config;
});
apiInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status == 401) {
      // navigate("/auth/signin");
      console.log("error");
    }
    return error;
  }
);
export default apiInstance;
