import { axiosRequest } from "../../services/axiosConfig";
import { requestEndpoints } from "../endpoints";

export const commentRequests = {
    getAll: () => axiosRequest.get(requestEndpoints.comments),
    addComment: (data) => axiosRequest.post(requestEndpoints.comments, data)
}
