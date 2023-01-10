import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const exerciseSchema = new Schema({
  exerciseName: {
    type: String,
    required: true,
  },
  exerciseType: {
    type: String,
    enum: ['Strength', 'Cardio'],
    default: 'Strength',
    required: true,
  },
  exerciseTutorialDescription: {
    type: String,
    required: true,
  },
  exerciseFormDescription:{
    type: String,
  },
  exerciseMuscleGroup:{
    type: String
  },
  exerciseRepetitions:{
    type: Number,
    required: true
  },
  exerciseDifficulty:{
    type: String,
    required: true
  }
});
