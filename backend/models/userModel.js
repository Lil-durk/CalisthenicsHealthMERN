import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password:{
    type: String,
  },
  phone: {
    type: Number,
  },
  createdDate:{
    type: Date,
    default: Date.now
  }
});
