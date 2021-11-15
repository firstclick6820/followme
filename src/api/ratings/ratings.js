import axios from "axios";

const apis = axios.create({
    baseURL: 'http://192.168.0.115/api/Ratings'
})

const getMarkProductAsFavourite = payload => apis.get(`/MarkProductAsFavourite?UserId=${payload}&ProductId=${payload}&Favourite=${payload}`)
const postRateUser = (payload) => apis.post("/RateUser", payload)

const getRateApp = payload => apis.get(`/RateApp?UserId=${payload}&Rating=${payload}&Feedback=${payload}`)
const getGetUserFavourites = payload => apis.get(`/GetUserFavourites?UserId=${payload}`)


export {
    getMarkProductAsFavourite,
    postRateUser,
    getRateApp,
    getGetUserFavourites
}