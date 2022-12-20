import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

// import { Link } from "react-router-dom";
// import Navibar from "./Navibar";

const Login = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    !isAuthenticated && (
      <Button variant="primary" onClick={loginWithRedirect}>Log in</Button>
    )
    // <>
    //   <Navibar />

    //   <div className="Auth-form-container">
    //     <form className="Auth-form">
    //       <div className="Auth-form-content">
    //         <h3 className="Auth-form-title">Sign In</h3>
    //         <div className="form-group mt-3">
    //           <label>Email address</label>
    //           <input
    //             type="email"
    //             className="form-control mt-1"
    //             placeholder="Enter email"
    //           />
    //         </div>
    //         <div className="form-group mt-3">
    //           <label>Password</label>
    //           <input
    //             type="password"
    //             className="form-control mt-1"
    //             placeholder="Enter password"
    //           />
    //         </div>
    //         <div className="d-grid gap-2 mt-3">
    //           <button type="submit" className="btn btn-primary">
    //             Submit
    //           </button>
    //         </div>
    //         <p className="forgot-password text-right mt-2">
    //           Register first? <Link to="/register">Click here</Link>
    //         </p>
    //       </div>
    //     </form>
    //   </div>
    // </>
  );
};

export default Login;
