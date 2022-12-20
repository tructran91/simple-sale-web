import { BrandModel } from "../models/brandModel";
import axiosClient from "./axiosClient";

const brandApi = {
    getAll: () => {
        const url = '/api/admin/brand';
        return axiosClient
            .get<BrandModel[]>(url)
            .then(response => {
                return response.data;
            });
    },

    get: (id: string) => {
        const url = `/api/admin/brand/${id}`;
        return axiosClient.get<BrandModel>(url)
            .then(response => {
                return response.data;
            });
    },

    post: (data: BrandModel) => {
        return axiosClient
            .post("api/admin/brand", data)
            .then(response => {
                console.log(response);
            });
    },
};

export default brandApi;
