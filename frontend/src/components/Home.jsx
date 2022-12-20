import React, { useEffect } from "react";
import ApiService from "./Services/ApiService";
import Navibar from "./Navibar";
import "../App.css";

//import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
//import Button from "@mui/material/Button";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

const backgrImg = {
  backgroundImage: `url(https://wallpapercave.com/wp/wp2346534.jpg)`,
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

const homeFooter = {
  marginTop: "10%",  
  position: "absolute",
  alignItems: "center",
  textAlign: "center",
  bottom: 0,
  left: "40%",
  width: "20%",
  backgroundColor: "white",
};

export default function App() {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    ApiService.getUsers().then((response) => {
      setUsers(response.data);
      console.log(response.data);
      console.log(users);
    });
  }, []);

  const deleteUser = async (_id) => {
    try {
      const res = await ApiService.deleteUser(_id);
      console.log("User successfully deleted.");
      alert("User deleted succesfully!");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div style={backgrImg}>
        <Navibar />

        <Button variant="primary" style={homeBtn}>
          Start your journey!
        </Button>

          <MDBContainer style={homeFooter} className="p-3 pb-0">
            <section className="mb-3">
              <MDBBtn
                outline
                color="dark"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn
                outline
                color="dark"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn
                outline
                color="dark"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="google" />
              </MDBBtn>
              <MDBBtn
                outline
                color="dark"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="instagram" />
              </MDBBtn>

              <MDBBtn
                outline
                color="dark"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>

              <MDBBtn
                outline
                color="dark"
                floating
                className="m-1"
                href="#!"
                role="button"
              >
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </section>
          </MDBContainer>

          {/* <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright: Dirk van der Enden
          </div> */}
        {/* <div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((userData) => {
                return (
                  <>
                    <tr>
                      <td>{userData.firstName}</td>
                      <td>{userData.lastName}</td>
                      <td>{userData.email}</td>
                      <td>
                        <Button variant="warning">Edit</Button>
                      </td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() => deleteUser(userData._id)}
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
        </div> */}
      </div>
    </>
  );
}
