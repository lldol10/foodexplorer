import axios from "axios"

export const api = axios.create({
    baseURL: "https://foodexplorer-t29z.onrender.com"
})