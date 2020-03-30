import axios from "axios";
import { ApiUrl } from "../utility-helper/constants";

class AuthService {
  static login = credential => {
    return axios.post(ApiUrl + "Login/Login", credential);
  };
}

export default AuthService;
