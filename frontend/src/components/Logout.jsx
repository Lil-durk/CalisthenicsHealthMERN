import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";


const Logout = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && (
      <Button variant="primary"
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
      >
        Log out
      </Button>
    )
  );
};

export default Logout;
