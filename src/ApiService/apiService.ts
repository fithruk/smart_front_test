import axios from "axios";
import { User } from "../Types/types";

class ApiService {
  private url: string = "https://jsonplaceholder.typicode.com/users";

  public async getUsers(): Promise<User[]> {
    try {
      const { data, status } = await axios.get<User[]>(this.url);
      return status === 200 ? data : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
const apiService = new ApiService();
export default apiService;
