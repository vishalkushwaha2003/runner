import React from "react";
import { Button } from "@mui/material";
import BackgroundAnimation from "./BackgroundAnimation";

import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect} = useAuth0();
 

 
  return (
    <>
      <BackgroundAnimation />
      <Button
        variant="outlined"
        sx={{
          color: "rgba(114, 112, 108, 0.4)",
          borderRadius: "10px",
          borderColor: "rgba(114, 112, 108, 0.4)",
          ":hover": {
            color: "rgba(114, 112, 108, 0.8)",
            borderColor: "rgba(170, 167, 162, 0.432)",
          },
        }}
        onClick={async () => {
          await loginWithRedirect();
        }}
      >
        Log In
      </Button>
    </>
  );
};

export default LoginButton;
