import mongoose from "mongoose";
import { exerciseSchema } from "../models/exerciseModel";

const Exercise = mongoose.model("Exercise", exerciseSchema);

//add Exercise
export const addNewExercise = async (req, res) => {
  let newExercise = new Exercise(req.body);

  await newExercise.save((err, Exercise) => {
    if (err) {
      res.send(err);
    }
    res.status(201).json(Exercise);
  });
}

//get all Exercises
export const getExercises = (req, res) => {
  Exercise.find({}, (err, Exercise) => {
    if (err) {
      res.send(err);
    }
    res.json(Exercise);
  });
}

//get one Exercise
export const getExerciseWithId = (req, res) => {
  Exercise.findById(req.params.ExerciseId, (err, Exercise) => {
    if (err) {
      res.send(err);
    }
    res.json(Exercise);
  });
};

//update Exercise
export const updateExercise = (req, res) => {
  Exercise.findOneAndUpdate(
    { _id: req.params.ExerciseId },
    req.body,
    { new: true },
    (err, Exercise) => {
      if (err) {
        res.send(err);
      }
      res.json(Exercise);
    }
  );
};

//delete Exercise
export const deleteExercise = (req, res) => {
  Exercise.remove({ _id: req.params.ExerciseId }, (err, Exercise) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Succesfully deleted Exercise" });
  });
};
