import axios from "axios";
import {config} from "../config";

class SpendingService {

    SPEND = "/spending";

    constructor(){}


    getSpending = async (material) => {
        return await axios.get(`${config.base_endpoint}/material/${material}${this.SPEND}`);
    };

    spend = async (spending) => {
        return await axios.post(`${config.base_endpoint}${this.SPEND}`, spending);
    };

}

export default SpendingService;