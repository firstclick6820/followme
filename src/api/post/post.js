import axios from "axios";


const apis = axios.create({
    baseURL: 'http://192.168.0.115/api/Post'
})
const postImage = payload => apis.post("/ImageUpload",payload.fromData,{headers:{"Authorization":`Bearer ${payload.token}`}})
const postCreatePost = payload => apis.post("/CreatePost", payload.post, { headers: { "Authorization": `Bearer  ${payload.token}` } })
const getGetPosts = (payload) => apis.get(`/GetPosts?PageSize=${payload.data.pagesize}&pageno=${payload.data.pageno}`, { headers: { "Authorization": `Bearer ${payload.token}` } })
const getGetPostsByUserId = (payload) => apis.get(`/GetPostsByUserId?User_Id=${payload.data.userid}&PageSize=${payload.data.pagesize}&pageno=${payload.data.pageno}`, { headers: { "Authorization": `Bearer ${payload.token}` } })
const getGetCommentsByPostId = (payload) => apis.get(`/GetCommentsByPostId?Post_Id=${payload.data.Post_Id}&User_Id=${payload.data.userid}&PageSize=${payload.data.pagesize}&pageno=${payload.data.pageno}`, { headers: { "Authorization": `Bearer ${payload.token}` } })
const getGetPostByPostId = (payload) => apis.get(`/GetPostByPostId?Post_Id=${payload.data.Post_Id}`, { headers: { "Authorization": `Bearer ${payload.token}` } })
const getTagFriend = () => apis.get("/TagFriend")
const getLikePost = (payload) => apis.get(`/LikePost?Post_Id=${payload.id}`, { headers: { "Authorization": `Bearer ${payload.token}` } })
const getUnLikePost = (payload) => apis.get(`/UnLikePost?Post_Id=${payload.id}`, { headers: { "Authorization": `Bearer ${payload.token}` } })
const getLikeComment = () => apis.get("/LikeComment")
const getUnLikeComment = () => apis.get("/UnLikeComment")
const postComment = (payload) => apis.post("/Comment", payload.commentorreply, { headers: { "Authorization": `Bearer ${payload.token}` } })
const postCommentReply = (payload) => apis.post("/CommentReply", payload.commentorreply, { headers: { "Authorization": `Bearer ${payload.token}` } })
const getRepost = () => apis.get("/Repost")
const getHidePost = () => apis.get("/HidePost")
const getHideAllPost = () => apis.get("/HideAllPost")
const getGetTrends = () => apis.get("/GetTrends")
const getTurnOffNotifications = () => apis.get("/TurnOffNotifications")
const getReportPost = () => apis.get("/ReportPost")

export {
    postImage,
    postCreatePost,
    getGetPosts,
    getGetPostsByUserId,
    getGetCommentsByPostId,
    getGetPostByPostId,
    getTagFriend,
    getLikePost,
    getUnLikePost,
    getLikeComment,
    getUnLikeComment,
    postComment,
    postCommentReply,
    getRepost,
    getHidePost,
    getHideAllPost,
    getGetTrends,
    getTurnOffNotifications,
    getReportPost


}
//getGetPostsByUserId,