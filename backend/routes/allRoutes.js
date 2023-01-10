import {
  addNewUser,
  deleteUser,
  getUsers,
  getUserWithId,
  updateUser,
} from "../controllers/userController";

import {
  addNewExercise,
  deleteExercise,
  getExercises,
  getExerciseWithId,
  updateExercise,
} from "../controllers/exerciseController";

const routes = (app) => {
  app
    .route("/users")
    //get endpoint
    .get(getUsers)
    //post endpoint
    .post(addNewUser);

  app
    .route("/exercises")
    //get endpoint
    .get(getExercises)
    //post endpoint
    .post(addNewExercise);

  app
    .route("/users/:UserId")
    .get(getUserWithId)
    .put(updateUser)
    .delete(deleteUser);

  app
    .route("/exercises/:ExerciseId")
    .get(getExerciseWithId)
    .put(updateExercise)
    .delete(deleteExercise);
};

export default routes;
