import axios from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create({baseURL});

const tokenKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWQ0YzIyZjc2MzQwMmEwNDA0ODNkMTlkNTE5YTE0YiIsInN1YiI6IjYzZWY3M2E3MzU4MThmMDBiYzBkYjQwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bdwc8mgfdPedoe7zyKp6RaAfOIsDarRMnkuy76jxaEg'

axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${tokenKey}`
    return config
})

export {axiosService}