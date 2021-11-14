import axios from "axios";

const apis = axios.create({
    baseURL: 'http://192.168.0.115/api/Ratings'
})

const getMarkProductAsFavourite = () => apis.get("/MarkProductAsFavourite")
const postRateUser = (payload) => apis.post("/RateUser", payload)

const getRateApp = () => apis.get("/RateApp")
const getGetUserFavourites = () => apis.get("/GetUserFavourites")


export {
    getMarkProductAsFavourite,
    postRateUser,
    getRateApp,
    getGetUserFavourites
}