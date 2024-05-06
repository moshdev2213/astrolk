import axios from "axios";

class BaseService{
    constructor() {
        axios.defaults.baseURL = "http://localhost:3500/api/v1/"
    }
    getHeader() {
        return { headers: { Authorization: `api_key ${import.meta.env.VITE_NASA_KEY}` } }
    }
    getBaseURL() {
        return this.baseURL;
    }
}
export default BaseService = new BaseService()