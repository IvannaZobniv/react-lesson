import axios from "axios";

import { baseURL } from "../api/endpoints";

const axiosRequest = axios.create({baseURL});

export{axiosRequest};
