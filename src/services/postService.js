import {axiosService} from "./axiosService";
import {urls} from "../configs";

const PostService={
    getAll:()=>axiosService.get(urls.posts)
}
export {PostService}