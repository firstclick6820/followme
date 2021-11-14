import axios from "axios";

const apis = axios.create({
    baseURL: 'http://192.168.0.115/api/Admin'
})
const postAddAdmin = () => apis.post("/AddAdmin")
const getSearchAdmins = () => apis.get("/SearchAdmins")
const getDeleteEntity = () => apis.get("/DeleteEntity")
const postChangePassword = (payload) => apis.post("/ChangePassword", payload)
const postAddNotification = (payload) => apis.post("/AddNotification", payload)
const getSearchNotifications = () => apis.get("/SearchNotifications")
const postChangeUserStatuses = (payload) => apis.post("/ChangeUserStatuses", payload)
const getGetUsers = () => apis.get("/GetUsers")
const getGetUser = () => apis.get("/GetUser")
const getGetSalesGraphData = () => apis.get("/GetSalesGraphData")
const postSendNotificationToUser = (payload) => apis.post("/SendNotificationToUser", payload)
const postAddUpdateFCMToken = (payload) => apis.post("/AddUpdateFCMToken", payload)
const getTestNotificationToAdmin = () => apis.get("/TestNotificationToAdmin")


export {
    postAddAdmin,
    getSearchAdmins,
    getDeleteEntity,
    postChangePassword,
    postAddNotification,
    getSearchNotifications,
    postChangeUserStatuses,
    getGetUsers,
    getGetUser,
    getGetSalesGraphData,
    postSendNotificationToUser,
    postAddUpdateFCMToken,
    getTestNotificationToAdmin
}