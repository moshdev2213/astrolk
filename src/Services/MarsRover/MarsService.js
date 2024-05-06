import axios from "axios";

class MarsService {
    constructor() {
        this.BASE_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";
        this.API_KEY = import.meta.env.VITE_NASA_KEY;
    }
    getAllMedia() {
        return axios.get(this.BASE_URL, {
            params: {
                api_key: this.API_KEY,
                camera: "NAVCAM",
                sol:"1000"
            }
        });
    }
}
const marsService = new MarsService();
export default marsService;
