import {
    addNewExercise,
    deleteExercise,
    getExercises,
    getExerciseWithId,
    updateExercise,
  } from "../controllers/exerciseController";
  
  const routes = (app) => {
    app
      .route("/exercises")
      //get endpoint
      .get(getExercises)
      //post endpoint
      .post(addNewExercise);
  
    app
      .route("/exercises/:ExerciseId")
      .get(getExerciseWithId)
      .put(updateExercise)
      .delete(deleteExercise);
  };
  
  export default routes;
  