import { CategoryModel } from "src/models/categoryModel";
import axiosClient from "./axiosClient";

const prefixApi = "/api/admin/category";

const categoryApi = {
    getAll: () => {
        const url = prefixApi;
        return axiosClient
            .get<CategoryModel[]>(url)
            .then(response => {
                return response.data;
            });
    },

    get: (id: string) => {
        const url = `${prefixApi}/${id}`;
        return axiosClient.get<CategoryModel>(url)
            .then(response => {
                return response.data;
            });
    },

    post: (data: CategoryModel) => {
        return axiosClient
            .post(prefixApi, data)
            .then(response => {
                console.log(response);
            });
    },

    put: (id: string, data: CategoryModel) => {
        const url = `${prefixApi}/${id}`;
        return axiosClient
            .put(url, data)
            .then(response => {
                console.log(response);
            });
    },
};

export default categoryApi;
