import axios from "axios";


const Login = payload => axios.post('http://192.168.0.115:8888/api/User/Login/', payload)
const SignUpapi = payload => axios.post('http://192.168.0.115:8888/api/User/SignUp/', payload)
const CheckValidaty = payload => axios.post('http://192.168.0.115:8888/api/User/EmailValidity/', payload)


export {
    Login,
    SignUpapi,
    CheckValidaty
}