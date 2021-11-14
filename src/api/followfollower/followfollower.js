import axios from "axios";

const apis = axios.create({
    baseURL: 'http://192.168.0.115/api/FollowFollower'
})

const getFollow = () => apis.get("/Follow")
const getUnFollow = () => apis.get("/UnFollow")
const getGetFollowers = () => apis.get("/GetFollowers")
const getGetFollowings = () => apis.get("/GetFollowings")
const getGetTopFollowers = () => apis.get("/GetTopFollowers")


export { getFollow, getUnFollow, getGetFollowers, getGetFollowings, getGetTopFollowers }