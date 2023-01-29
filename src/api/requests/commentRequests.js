import { axiosRequest } from "../../services/axiosConfig";
import { requestEndpoints } from "../endpoints";

 const commentRequests = {
    getAll: () => axiosRequest.get(requestEndpoints.comments),
    addComment: (data) => axiosRequest.post(requestEndpoints.comments, data)
}
export{commentRequests};