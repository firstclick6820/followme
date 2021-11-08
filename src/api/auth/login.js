import axios from "axios";


<<<<<<< HEAD
const Login = payload => axios.post('http://192.168.0.115:8888/api/User/Login/',payload)
const SignUpapi = payload => axios.post('http://192.168.0.115:8888/api/User/SignUp/',payload)
const CheckValidaty = payload => axios.post('http://192.168.0.115:8888/api/User/EmailValidity/',payload)
const CreatePost = payload => axios.post("http://192.168.0.115:8888//api/Post/CreateNewPost/",payload)
=======
const Login = payload => axios.post('http://192.168.0.115:8888/api/User/Login/', payload)
const SignUpapi = payload => axios.post('http://192.168.0.115:8888/api/User/SignUp/', payload)
const CheckValidaty = payload => axios.post('http://192.168.0.115:8888/api/User/EmailValidity/', payload)
>>>>>>> af7925970d324f39ecf429d15e0f2f20c427c318


export {
    Login,
    SignUpapi,
<<<<<<< HEAD
    CheckValidaty,
    CreatePost
}

=======
    CheckValidaty
}
>>>>>>> af7925970d324f39ecf429d15e0f2f20c427c318
