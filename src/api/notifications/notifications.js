import axios from "axios";

const apis = axios.create({
    baseURL: 'http://192.168.0.115/api/Notifications'
})

const getGetNotifications = () => apis.get("/GetNotifications")
const getMarkNotificationAsRead = () => apis.get("/MarkNotificationAsRead")
const getUserNoticationsOnOff = () => apis.get("/UserNoticationsOnOff")



export { getGetNotifications, getMarkNotificationAsRead, getUserNoticationsOnOff }