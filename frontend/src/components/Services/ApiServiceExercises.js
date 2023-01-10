import axios from "axios";

const API_BASE_URL = "http://localhost:3003/exercises";
//const API_TEST_URL = "mockapi";

class ApiService {
  getExercises() {
    return axios.get(API_BASE_URL);
  }

  createExercise(exercise) {
    return axios.post(API_BASE_URL, exercise);
  }

  // createExerciseNoParams(){
  //   return axios.post(API_BASE_URL);
  // }

  getExerciseById(exerciseId) {
    return axios.get(API_BASE_URL + "/" + exerciseId);
  }

  updateExercise(exercise, exerciseId) {
    return axios.put(API_BASE_URL + "/" + exerciseId, exercise);
  }

  deleteExercise(exerciseId) {
    return axios.delete(API_BASE_URL + "/" + exerciseId);
  }
}

export default new ApiService();
