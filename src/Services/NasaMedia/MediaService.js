import axios from "axios";

class MediaService {
    constructor() {
        this.BASE_URL = "https://images-api.nasa.gov/search?q=space&media_type=image";
        this.API_KEY = import.meta.env.VITE_NASA_KEY;
    }
    getAllMedia() {
        return axios.get(this.BASE_URL, {
            headers: {
                "Authorization": `api_key ${this.API_KEY}`
            }
        });
    }
}

const mediaService = new MediaService();
export default mediaService;
