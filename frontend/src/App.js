//import styling
import "./App.css";

//import packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import page component
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.js";
import CardioWorkout from "./components/CardioWorkout.jsx";
import NotFound from "./components/NotFound.js";
import StrengthWorkout from "./components/StrengthWorkout.jsx";
import Exercises from "./components/Exercises.jsx";
import AddExercise from "./components/AddExercise.jsx";
import OneExercise from "./components/OneExercise.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="cardioWorkout" element={<CardioWorkout />} />
          <Route path="strengthWorkout" element={<StrengthWorkout />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/addExercise" element={<AddExercise/>} />
          <Route path="/exercise/:exerciseName" element={<OneExercise/>} />
          
          <Route path="/login" element={<Login />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
