import axios from "axios";

const apis = axios.create({
    baseURL: 'http://192.168.0.115/api/Post'
})
const postImageUpload = () => apis.post("/ImageUpload")
const postCreatePost = payload => apis.post("/CreatePost", payload)
const getGetPosts = payload => apis.get(`/GetPosts?PageSize=${payload}&PageNo=${payload}`)
const getGetPostsByUserId = payload => apis.get(`/GetPostsByUserId?User_Id=${payload}&PageSize=${payload}&PageNo=${payload}`)
const getGetPostByPostId = payload => apis.get(`/GetPostByPostId?Post_Id=${payload}`)
const getTagFriend = payload => apis.get(`/TagFriend?name=${payload}`)
const getLikePost = payload => apis.get(`/LikePost?Post_Id=${payload}`)
const getUnLikePost = payload => apis.get(`/UnLikePost?Post_Id=${payload}`)
const getLikeComment = payload => apis.get(`/LikeComment?Comment_Id=${payload}`)
const getUnLikeComment = payload => apis.get(`/UnLikeComment?Comment_Id=${payload}`)
const postComment = (payload) => apis.post("/Comment", payload)
const postCommentReply = (payload) => apis.post("/CommentReply", payload)
const getRepost = payload => apis.get(`/Repost?Post_Id=${payload}&Location=${payload}`)
const getHidePost = payload => apis.get(`/HidePost?Post_Id=${payload}`)
const getHideAllPost = payload => apis.get(`/HideAllPost?HideAllPostsUser_Id=${payload}`)
const getGetTrends = () => apis.get("/GetTrends")
const getTurnOffNotifications = payload => apis.get(`/TurnOffNotifications?Post_Id=${payload}`)
const getReportPost = payload => apis.get(`/ReportPost?Post_Id=${payload}&ReportType=${payload}&Text=${payload}`)

export {
    postImageUpload,
    postCreatePost,
    getGetPosts,
    getGetPostsByUserId,
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