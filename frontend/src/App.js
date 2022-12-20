//import styling
import "./App.css";


//import packages
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import page component
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.js";
import CardioWorkout from "./components/CardioWorkout.jsx";
import NotFound from "./components/NotFound.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="cardioWorkout" element={<CardioWorkout />} />

          <Route path="/login" element={<Login />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
