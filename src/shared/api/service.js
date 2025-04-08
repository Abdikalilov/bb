import axios from "./Axios";

class StoreService {
  getAllCategories() {
    return axios.get("/categories");
  }

  async getProjectData() {
    const response = await axios.get("/projects/our-projects/");
    return response.data; 
  }

}

export default new StoreService();
