import axios from "axios";
import {config} from "../config";

class MaterialsService {

    GET_MATERIAL = "/material/";
    GET_MATERIALS = "/materials";
    CREATE_MATERIAL = "/material";
    DELETE_MATERIAL = "/material/";
    UPDATE_MATERIAL = "/material/";


    constructor(){}

    getMaterial = async (material) => {
        return await axios.get(`${config.base_endpoint}${this.GET_MATERIAL}/${material}`);
    };

    getMaterials = async () => {
        return await axios.get(`${config.base_endpoint}${this.GET_MATERIALS}`);
    };

    createMaterial = async (material) => {
        return await axios.post(`${config.base_endpoint}${this.CREATE_MATERIAL}`, material);
    };

    updateMaterial = async (material) => {
        return await axios.put(`${config.base_endpoint}${this.UPDATE_MATERIAL}/${material.id}`, material);
    };

    deleteMaterial = async (material) => {
        return await axios.delete(`${config.base_endpoint}${this.DELETE_MATERIAL}/${material}`);
    };
}

export default MaterialsService;