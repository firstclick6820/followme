import axios from "axios";

const apis = axios.create({
    baseURL: 'http://192.168.0.115/api/Common'
})

const getGetEntityById = () => apis.get("/GetEntityById")


export { getGetEntityById }