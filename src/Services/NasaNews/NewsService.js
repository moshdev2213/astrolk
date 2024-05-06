import axios from "axios";

class NewsService {
    constructor() {
        this.BASE_URL = "https://images-api.nasa.gov/search?q=galaxy&media_type=image";
        this.API_KEY = import.meta.env.VITE_NASA_KEY;
    }
    getAllNews() {
        return axios.get(this.BASE_URL, {
            headers: {
                "Authorization": `api_key ${this.API_KEY}`
            }
        });
    }
}

const newsService = new NewsService();
export default newsService;
