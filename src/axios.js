import axios from "axios"


const instance = axios.create({
    baseURL: "https://us-central1-pic-firebase.cloudfunctions.net/api"

})

export default instance