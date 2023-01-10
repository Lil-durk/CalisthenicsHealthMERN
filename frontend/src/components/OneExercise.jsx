import React, { useEffect } from "react";
import ApiServiceExercises from "./Services/ApiServiceExercises";
import Navibar from "./Navibar";
import "../App.css";

//import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Footer from "./Footer";

const backgrImg = {
  backgroundImage: `url(https://strengthgang.com/wp-content/uploads/2021/10/pexels-cottonbro-7688862.jpg)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "absolute",
};

export default function Exercises() {
  const [exercises, setExercises] = React.useState([]);

  useEffect(() => {
    ApiServiceExercises.getExercises().then((response) => {
      setExercises(response.data);
      console.log(response.data);
      console.log(exercises);
    });
  }, []);

  return (
    <>
      <div style={backgrImg}>
        <Navibar />

        {exercises.map((exercisesData) => {
          return (
            <>
              <Container>
                <Row>
                  <Col>
                    <Card
                      style={{
                        width: "18rem",
                      }}
                    >
                      <Card.Body>
                        <Card.Title>{exercisesData.exerciseName}</Card.Title>
                        <Card.Text>
                          <h6 class="font-weight-bold">How to do?</h6>
                          {exercisesData.exerciseTutorialDescription}
                        </Card.Text>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                          Muscle group(s): {exercisesData.exerciseMuscleGroup}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Repetitions: {exercisesData.exerciseRepetitions}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Difficulty: {exercisesData.exerciseDifficulty}
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>
                  <Col>
                    <img
                      src="https://www.verywellfit.com/thmb/QbzJaBojLh1tGjw7hI6bQZi-1tk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/basicpushup-6d55a2fb6179471494e8fa9a04d8615a.gif"
                      style={{
                        width: "40%",
                        height: "50%",
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        margin: "auto",
                      }}
                    />
                  </Col>
                  <Col>
                    <Card className="text-center"
                      style={{
                        width: "10rem",
                        float: "right",
                        top: "30%"
                      }}
                    >
                      <Card.Header>Difficulties</Card.Header>
                      <ListGroup variant="flush">
                        <a href="#idkyet">
                          <ListGroup.Item>Beginner</ListGroup.Item>
                        </a>
                        <a href="#idkyet">
                          <ListGroup.Item>Intermediate</ListGroup.Item>
                        </a>
                        <a href="#idkyet">
                          <ListGroup.Item>Advanced</ListGroup.Item>
                        </a>
                      </ListGroup>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </>
          );
        })}

        <Footer />
      </div>
    </>
  );
}
