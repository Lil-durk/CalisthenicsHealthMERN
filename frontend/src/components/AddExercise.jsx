import React, { useState } from "react";
import Navibar from "./Navibar";
import ApiServiceExercises from "./Services/ApiServiceExercises";

const AddExercise = () => {
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseType, setExerciseType] = useState("");
  const [exerciseTutorialDescription, setExerciseDescription] = useState("");
  const [exerciseMuscleGroup, setMuscleGroup] = useState("");
  const [exerciseRepetitions, setReps] = useState("");
  const [exerciseDifficulty, setDifficulty] = useState("");

  const submitHandler = (e) => {
    
    e.preventDefault();

    const postData = { exerciseName, exerciseType, exerciseTutorialDescription, exerciseMuscleGroup, exerciseRepetitions, exerciseDifficulty };
    console.log(postData);

    ApiServiceExercises.createExercise(postData)
      .then((res) => {
        console.log(res);
        //alert("Added succesfully!");
        //window.location.replace("/exercises");
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navibar />
      <div className="Auth-form-container" style={{padding: "1%"}}>
        <form className="Auth-form" onSubmit={submitHandler}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Add exercise</h3>
            <div className="form-group mt-3">
              <label>Name of exercise</label>
              <input
                type="text"
                className="form-control mt-1"
                id="exerciseName"
                placeholder="Enter exercise name"
                value={exerciseName}
                onChange={(e) => {
                  setExerciseName(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Exercise type</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Strength or Cardio"
                value={exerciseType}
                onChange={(e) => {
                  setExerciseType(e.target.value);
                }}
                required
              />
              {/* <select
                type="text"
                className="form-control mt-1"
                placeholder="Select exercise type"
                value={exerciseType}
                onChange={(e) => {
                  setExerciseType(e.target.value);
                }}
              /> */}
            </div>
            <div className="form-group mt-3">
              <label>Exercise tutorial description</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter description"
                value={exerciseTutorialDescription}
                onChange={(e) => {
                  setExerciseDescription(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Muscle group</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter muscle group"
                value={exerciseMuscleGroup}
                onChange={(e) => {
                  setMuscleGroup(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Repetitions</label>
              <input
                type="number"
                className="form-control mt-1"
                placeholder="Enter amount of reps"
                min={1}
                max={100}
                value={exerciseRepetitions}
                onChange={(e) => {
                  setReps(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Difficulty</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter difficulty"
                value={exerciseDifficulty}
                onChange={(e) => {
                  setDifficulty(e.target.value);
                }}
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
            </p>
          </div>
        </form>
      </div>

    </>
  );
};

export default AddExercise;
