import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://api-period.shirpala.ir",
    withCredentials: true,
})