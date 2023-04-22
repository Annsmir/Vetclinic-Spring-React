import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8090/";

const getUsers = () => {
  return axios.get(API_URL + "users", { headers: authHeader() });
};

const UserService = {
  getUsers,
};

export default UserService;