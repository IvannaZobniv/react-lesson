import {axiosApi} from "./axiosApi";

const space_x_Api = {
    getAll: () => axiosApi.get('/launches').then(value => value.data),
};

export {space_x_Api};
