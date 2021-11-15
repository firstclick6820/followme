import axios from "axios";

const apis = axios.create({
    baseURL: 'http://192.168.0.115/api/FollowFollower'
})

const getFollow = payload => apis.get(`/Follow?FollowUser_Id=${payload}`)
const getUnFollow = payload => apis.get(`/UnFollow?UnFollowUser_Id=${payload}`)
const getGetFollowers = () => apis.get("/GetFollowers")
const getGetFollowings = () => apis.get("/GetFollowings")
const getGetTopFollowers = () => apis.get("/GetTopFollowers")


export { getFollow, getUnFollow, getGetFollowers, getGetFollowings, getGetTopFollowers }