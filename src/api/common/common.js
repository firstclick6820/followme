import axios from "axios";

const apis = axios.create({
    baseURL: 'http://192.168.0.115/api/Common'
})

const getGetEntityById = payload => apis.get(`/GetEntityById?EntityType=${payload}&Id=${payload}`)


export { getGetEntityById }