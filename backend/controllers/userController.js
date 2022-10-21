import mongoose from "mongoose";
import { userSchema } from "../models/userModel";

const User = mongoose.model("User", userSchema);

//add User
export const addNewUser = (req, res) => {
  let newUser = new User(req.body);

  newUser.save((err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

//get all Users
export const getUsers = (req, res) => {
  User.find({},(err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

//get one User
export const getUserWithId = (req, res) => {
  User.findById(req.params.UserId,(err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

//update User
export const updateUser = (req, res) => {
  User.findOneAndUpdate({_id: req.params.UserId}, req.body, {new: true}, (err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

//delete User
export const deleteUser = (req, res) => {
  User.remove({_id: req.params.UserId}, (err, User) => {
    if (err) {
      res.send(err);
    }
    res.json({message: "Succesfully deleted User"});
  });
};