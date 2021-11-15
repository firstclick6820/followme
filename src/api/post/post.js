import axios from "axios";

const apis = axios.create({
    baseURL: 'http://192.168.0.115/api/Post'
})
const postImageUpload = () => apis.post("/ImageUpload")
 const postCreatePost = payload => apis.post("/CreatePost",payload.post,{ headers: {"Authorization" : `Bearer ${payload.token}`} })
//const getGetPosts = () => apis.get("/GetPosts")
const getGetPosts = (payload) => apis.get(`/GetPostsByUserId?User_Id=${payload.data.userid}&PageSize=${payload.data.pagesize}&pageno=${payload.data.pageno}`,{ headers: {"Authorization" : `Bearer ${payload.token}`} })
const getGetPostByPostId = () => apis.get("/GetPostByPostId")
const getTagFriend = () => apis.get("/TagFriend")
const getLikePost = () => apis.get("/LikePost")
const getUnLikePost = () => apis.get("/UnLikePost")
const getLikeComment = () => apis.get("/LikeComment")
const getUnLikeComment = () => apis.get("/UnLikeComment")
const postComment = (payload) => apis.post("/Comment", payload)
const postCommentReply = (payload) => apis.post("/CommentReply", payload)
const getRepost = () => apis.get("/Repost")
const getHidePost = () => apis.get("/HidePost")
const getHideAllPost = () => apis.get("/HideAllPost")
const getGetTrends = () => apis.get("/GetTrends")
const getTurnOffNotifications = () => apis.get("/TurnOffNotifications")
const getReportPost = () => apis.get("/ReportPost")

export {
    postImageUpload,
    postCreatePost,
    getGetPosts,
  
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