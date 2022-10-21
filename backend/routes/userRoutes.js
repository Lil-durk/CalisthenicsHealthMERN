import {
    addNewUser,
    deleteUser,
    getUsers,
    getUserWithId,
    updateUser,
  } from "../controllers/userController";
  
  const routes = (app) => {
    app
      .route("/users")
      //get endpoint
      .get(getUsers)
      //post endpoint
      .post(addNewUser);
  
    app
      .route("/users/:UserId")
      .get(getUserWithId)
      .put(updateUser)
      .delete(deleteUser);
  };
  
  export default routes;
  