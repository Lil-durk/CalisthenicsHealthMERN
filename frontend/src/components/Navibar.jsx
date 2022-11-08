import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navibar() {
  return (
    <Navbar className="color-nav" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img src="/logo.png" width={150} alt="logo"/></Navbar.Brand>
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
              <NavDropdown.Item href="#cardioWorkouts">
                Cardio workouts
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#mixedWorkouts">
                Mixed workouts
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="primary" href="/login">
            Login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
