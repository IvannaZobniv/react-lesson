import {axiosService} from "./axios.service";
import {urls} from "../configs";


const genresService = {
    getGenres: () => axiosService(urls.genres)
}

export {genresService}