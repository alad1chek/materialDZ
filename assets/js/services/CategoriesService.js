import axios from "axios";
import {config} from "../config";

class CategoriesService {

    GET_CATEGORY = "/category/";
    GET_CATEGORIES = "/categories";
    CREATE_CATEGORY = "/category";
    DELETE_CATEGORY = "/category/";
    UPDATE_CATEGORY = "/category/";


    constructor(){}

    getCategory = async (category) => {
        return await axios.get(`${config.base_endpoint}${this.GET_CATEGORY}/${category}`);
    };

    getCategories = async () => {
        return await axios.get(`${config.base_endpoint}${this.GET_CATEGORIES}`);
    };

    createCategory = async (material) => {
        return await axios.post(`${config.base_endpoint}${this.CREATE_CATEGORY}`, material);
    };

    updateCategory = async (material) => {
        return await axios.put(`${config.base_endpoint}${this.DELETE_CATEGORY}/${material.id}`, material);
    };

    deleteCategory = async (material) => {
        return await axios.delete(`${config.base_endpoint}${this.UPDATE_CATEGORY}/${material}`);
    };
}

export default CategoriesService;