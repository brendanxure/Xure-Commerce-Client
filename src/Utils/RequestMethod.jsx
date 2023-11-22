import axios from 'axios'
import { serverUrl } from './ServerUrl'

const JSONToken  = localStorage.getItem("persist:root")
export const accessToken = JSON.parse(JSON.parse(JSONToken).user).currentUser.accessToken
console.log(JSON.parse(JSON.parse(JSONToken).user).currentUser.accessToken)
export const userId = JSON.parse(JSON.parse(JSONToken).user).currentUser._id
console.log(userId)

export const publicRequest = axios.create({
    baseUrl: serverUrl,
})

export const userRequest = axios.create({
    baseURL: serverUrl,
    headers: {token: `Bearer ${accessToken}`},
})