import axios from "axios"

export const api = axios.create({
    baseURL: "https://food-explorer-5w0e.onrender.com"
})