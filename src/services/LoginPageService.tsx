import axios from "../config/AxiosConfig";
import type { UserType } from "../types/Types";

class LoginPageService {
    login(): Promise<UserType[]> {
        return axios.get<UserType[]>("/users").then(response => response.data);
    }
}

export default new LoginPageService();