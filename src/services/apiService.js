import axios from "axios";

import {moviesBaseURL} from "../configs";
const apiService = axios.create({baseURL: moviesBaseURL});

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWQ0YzIyZjc2MzQwMmEwNDA0ODNkMTlkNTE5YTE0YiIsInN1YiI6IjYzZWY3M2E3MzU4MThmMDBiYzBkYjQwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bdwc8mgfdPedoe7zyKp6RaAfOIsDarRMnkuy76jxaEg'
    return config
})

export {
    apiService
}