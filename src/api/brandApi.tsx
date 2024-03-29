import { BrandModel } from "../models/brandModel";
import axiosClient from "./axiosClient";

const prefixApi = "/api/admin/brand";

const brandApi = {
    getAll: () => {
        const url = prefixApi;
        return axiosClient
            .get<BrandModel[]>(url)
            .then(response => {
                return response.data;
            });
    },

    get: (id: string) => {
        const url = `${prefixApi}/${id}`;
        return axiosClient.get<BrandModel>(url)
            .then(response => {
                return response.data;
            });
    },

    post: (data: BrandModel) => {
        return axiosClient
            .post(prefixApi, data)
            .then(response => {
                console.log(response);
            });
    },

    put: (id: string, data: BrandModel) => {
        const url = `${prefixApi}/${id}`;
        return axiosClient
            .put(url, data)
            .then(response => {
                console.log(response);
            });
    },
};

export default brandApi;
