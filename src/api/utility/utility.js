import axios from "axios";

const apis = axios.create({
    baseURL: 'http://192.168.0.115/api/Utility'
})


const postUtility = (payload) => apis.post("/Utility", payload)



export { postUtility }