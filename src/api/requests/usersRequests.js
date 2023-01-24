import { axiosRequest } from "../../services/axiosConfig";
import { requestEndpoints } from "../endpoints";

export const usersRequests = {
    getAll: () => axiosRequest.get(requestEndpoints.users),
    createUser: (data) => axiosRequest.post(requestEndpoints.users, data)
}