import React, { useEffect } from "react";
import ApiServiceExercises from "./Services/ApiServiceExercises";
import Navibar from "./Navibar";
import "../App.css";
import Footer from "./Footer";

import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
//import Button from "@mui/material/Button";

const backgrImg = {
  backgroundImage: `url(https://strengthgang.com/wp-content/uploads/2021/10/pexels-cottonbro-7688862.jpg)`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "absolute",
};

const homeBtn = {
  display: "block",
  margin: "auto",
  marginTop: 200,
  width: "10%",
  height: "20%",
  borderRadius: "50%",
};

export default function App() {
  const [exercises, setExercises] = React.useState([]);

  useEffect(() => {
    ApiServiceExercises.getExercises().then((response) => {
      setExercises(response.data);
      console.log(response.data);
      console.log(exercises);
    });
  }, []);

  const deleteExercise = async (_id) => {
    try {
      const res = await ApiServiceExercises.deleteExercise(_id);
      console.log("Exercise successfully deleted.");
      alert("Exercise deleted succesfully!");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div style={backgrImg}>
        <Navibar />

        <Footer />

        <div style={{ padding: "3%" }}>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Exercises</th>
              </tr>
            </thead>
            <tbody>
              {exercises.map((exercisesData) => {
                return (
                  <>
                    <tr>
                      <td>{exercisesData.exerciseName}</td>
                      <td>
                        <Button
                          variant="primary"
                          href={"exercise/" + exercisesData.exerciseName}
                        >
                          Go to {exercisesData.exerciseName}
                        </Button>
                      </td>
                      <td>
                        <Button variant="warning">Edit</Button>
                      </td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() => deleteExercise(exercisesData._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
