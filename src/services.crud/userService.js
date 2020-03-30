import axios from "axios";
import { ApiUrl } from "../utility-helper/constants";

class UserService {
  static getUser = () => {
    return axios.get(ApiUrl + "User", {});
  };

  static getUserbyId = userId => {
    return axios.get(ApiUrl + "User", {});
  };

  static createUser = user => {
    return axios.post(ApiUrl + "User", user, {});
  };
}

export default UserService;
