import axios from "axios";

const apis = axios.create({
    baseURL: 'http://192.168.0.115/api/Settings'
})

const getGetSettings = () => apis.get("/GetSettings")
const postSetSettingsProduct = (payload) => apis.post("/SetSettingsProduct", payload)
const postSetSettings = () => apis.post("/SetSettings")
const postSetPrivacyPolicy = (payload) => apis.post("/SetPrivacyPolicy", payload)
const postSetAboutUs = (payload) => apis.post("/SetAboutUs", payload)
const postSetTermsAndConditions = (payload) => apis.post("/SetTermsAndConditions", payload)

export {

    getGetSettings,
    postSetSettingsProduct,
    postSetSettings,
    postSetPrivacyPolicy,
    postSetAboutUs,
    postSetTermsAndConditions



}