import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://linkedin-clone-backend-qapn.onrender.com",
  timeout: 1000000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Include credentials (cookies) in requests
});

/* Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const authData =JSON.parse(localStorage.getItem("authData"));
    console.log("authData", authData);

    if (authData) {
      config.headers.Authorization = `Bearer ${authData?.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);*/

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized! Please login again.");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;