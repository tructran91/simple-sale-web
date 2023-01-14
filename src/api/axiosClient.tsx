import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
    baseURL: "http://localhost:5290/",
    headers: {
        "content-type": "application/json",
    },
    // paramsSerializer: (params : any) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    // const token = await getFirebaseToken();
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        // console.log('axiosClient response', response);
        if (response && response) {
            return response;
        }
        return response;
    },
    (error) => {
        console.log('axiosClient error', error);
        throw error;
    }
);

export default axiosClient;
