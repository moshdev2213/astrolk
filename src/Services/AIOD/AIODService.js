import axios from "axios";

class AIODService {
    constructor() {
        this.BASE_URL = "https://api.nasa.gov/planetary/apod";
        this.API_KEY = import.meta.env.VITE_NASA_KEY;
    }
    getAllMedia() {
        return axios.get(this.BASE_URL, {
            params: {
                api_key: this.API_KEY
            }
        });
    }
}
const aiodService = new AIODService();
export default aiodService;
