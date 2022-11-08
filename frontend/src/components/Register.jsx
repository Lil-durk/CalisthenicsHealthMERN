import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navibar from "./Navibar";
import ApiService from "./Services/ApiService";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const postData = { firstName, lastName, email, password };
    console.log(postData);

    ApiService.createUser(postData)
      .then((res) => {
        console.log(res);
        alert("Registered succesfully!");
        window.location.replace("/home");
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navibar />

      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={submitHandler}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>
            <div className="form-group mt-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control mt-1"
                id="firstName"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Last name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Already have an account? <Link to="/login">Click here</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
