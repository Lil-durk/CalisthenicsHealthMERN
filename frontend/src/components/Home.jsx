import React, { useEffect } from "react";
import ApiService from "./Services/ApiService";
import Navibar from "./Navibar";
import "../App.css"

import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";


const backgrImg = {
  backgroundImage: `url(https://wallpapercave.com/wp/wp2346419.jpg)`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "absolute",
};

export default function App() {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    ApiService.getUsers().then((response) => {
      setUsers(response.data);
      console.log(response.data);
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

        <div>
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
        </div>
      </div>
    </>
  );
}
