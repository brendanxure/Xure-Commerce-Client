import axios from 'axios'
import { serverUrl } from './ServerUrl'

const Token  = ""

export const publicRequest = axios.create({
    baseUrl: serverUrl,
})

export const userRequest = axios.create({
    baseURL: serverUrl,
    headers: {token: `Bearer ${Token}`},
})