import axios from "axios";

const apis = axios.create({
    baseURL: 'http://192.168.0.115/api/Admin'
})
const postAddAdmin = () => apis.post("/AddAdmin")
const getSearchAdmins = payload => apis.get(`/SearchAdmins?FirstName=${payload} &LastName=${payload}&Email=${payload}&Phone=${payload}&StoreId=${payload}`)
const getDeleteEntity = payload => apis.get(`/DeleteEntity?EntityType=${payload}&Id=${payload}`)
const postChangePassword = payload => apis.post("/ChangePassword", payload)
const postAddNotification = payload => apis.post("/AddNotification", payload)
const getSearchNotifications = () => apis.get("/SearchNotifications")
const postChangeUserStatuses = payload => apis.post("/ChangeUserStatuses", payload)
const getGetUsers = () => apis.get("/GetUsers")
const getGetUser = payload => apis.get(`/GetUser?UserId=${payload}&SignInType=${payload}`)
const getGetSalesGraphData = () => apis.get("/GetSalesGraphData")
const postSendNotificationToUser = payload => apis.post("/SendNotificationToUser", payload)
const postAddUpdateFCMToken = payload => apis.post("/AddUpdateFCMToken", payload)
const getTestNotificationToAdmin = payload => apis.get(`/TestNotificationToAdmin?Text=${payload}`)


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