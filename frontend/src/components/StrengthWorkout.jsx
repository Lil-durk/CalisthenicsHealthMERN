import React, { useEffect } from "react";
import ApiService from "./Services/ApiService";
import Navibar from "./Navibar";
import "../App.css";

//import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./Footer";

const backgrImg = {
  backgroundImage: `url(https://strengthgang.com/wp-content/uploads/2021/10/pexels-cottonbro-7688862.jpg)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "absolute",
};

export default function strengthWorkout() {
  return (
    <>
      <div style={backgrImg}>
        <Navibar />

        <Container style={{padding: "2%"}}>
          <Row>
            <Col style={{ backgroundColor: "white", textAlign: "center", padding: "2%", borderRadius: "10%", margin: 10 }}>
            <h1>Beginner</h1>
            <hr style={{width: "80%", margin: "auto", padding: "1%"}}/>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic type
            </Col>
            <Col style={{ backgroundColor: "white", textAlign: "center", padding: "2%", borderRadius: "10%", margin: 10 }}>
            <h1>Intermediate</h1>
            <hr style={{width: "80%", margin: "auto", padding: "1%"}}/>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not onlysum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </Col>
            <Col style={{ backgroundColor: "white", textAlign: "center", padding: "2%", borderRadius: "10%", margin: 10 }}>
            <h1>Advanced</h1>
            <hr style={{width: "80%", margin: "auto", padding: "1%"}}/>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambe 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    </>
  );
}
