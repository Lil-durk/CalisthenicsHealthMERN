import axios from "axios";

const API_BASE_URL = "http://localhost:3003/users";
const API_TEST_URL = "mockapi";

class ApiService {
  getUsers() {
    return axios.get(API_BASE_URL);
  }

  createUser(user) {
    return axios.post(API_BASE_URL, user);
  }

  // createUserNoParams(){
  //   return axios.post(API_BASE_URL);
  // }

  getUserById(userId) {
    return axios.get(API_BASE_URL + "/" + userId);
  }

  updateUser(user, userId) {
    return axios.put(API_BASE_URL + "/" + userId, user);
  }

  deleteUser(userId) {
    return axios.delete(API_BASE_URL + "/" + userId);
  }
}

export default new ApiService();
