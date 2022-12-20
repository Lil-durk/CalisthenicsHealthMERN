import React, { useEffect } from "react";
import ApiService from "./Services/ApiService";
import Navibar from "./Navibar";
import "../App.css";

//import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const backgrImg = {
  backgroundImage: `url(https://strengthgang.com/wp-content/uploads/2021/10/pexels-cottonbro-7688862.jpg)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "absolute",
};

export default function cardioWorkout() {
  return (
    <>
      <div style={backgrImg}>
        <Navibar />
        
      </div>
    </>
  );
}
