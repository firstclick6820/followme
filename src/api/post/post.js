import axios from "axios";

const apis  = axios.create({
    baseURL:'http://192.168.0.115/api/Post'
})
const getPosts = ()=>apis.get("/GetPosts")


export {
    getPosts
}