import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
//import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Login from "./Login";
import Logout from "./Logout";
//import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";
//import { Link } from "react-router-dom";

export default function Navibar() {
  const { isLoading, error, isAuthenticated } = useAuth0();

  return (
    <Navbar className="color-nav" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="/logo.png" width={150} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#nutritions">Nutritions</Nav.Link>
            <NavDropdown title="Workouts" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#strengthWorkouts">
                Strength workouts
              </NavDropdown.Item>
              <NavDropdown.Item href="/cardioWorkout">
                Cardio workouts
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#mixedWorkouts">
                Mixed workouts
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {isAuthenticated && (
            <Button variant="outline-primary" style={{ marginRight: 10 }}>
              <Nav.Link href="/profile">
                {error && <p>Authentication Error</p>}
                {!error && isLoading && <p>Loading...</p>}
                {!error && !isLoading}
                Profile
              </Nav.Link>
            </Button>
          )}
          <div>
            {error && <p>Authentication Error</p>}
            {!error && isLoading && <p>Loading...</p>}
            {!error && !isLoading && (
              <>
                <Login variant="primary" />
                <Logout variant="primary" />
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
