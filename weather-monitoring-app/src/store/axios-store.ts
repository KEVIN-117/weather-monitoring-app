"use server";
import axios from "axios";
import { envs } from "@/config/loadEnv"

const { baseUrl, authUrl } = envs
const axiosInstance = axios.create({
    baseURL: baseUrl
})

export const authInstance = axios.create({
    baseURL: authUrl
})

export default axiosInstance;