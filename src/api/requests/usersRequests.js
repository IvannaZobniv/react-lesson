import { axiosRequest } from "../../services/axiosConfig";
import { requestEndpoints } from "../endpoints";

 const usersRequests = {
    getAll: () => axiosRequest.get(requestEndpoints.users),
    createUser: (data) => axiosRequest.post(requestEndpoints.users, data)
}
export{usersRequests};