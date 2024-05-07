import React from "react";



import LoginButton from "./LoginButton";

import { useAuth0 } from "@auth0/auth0-react";
import AfterLogin from "./AfterLogin";
import Playpage from "./Playpage";



const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className=" text-white w-screen h-screen  flex justify-center items-center ">
      
      {isAuthenticated ? <AfterLogin /> : <LoginButton />}
      {/* <Playpage/> */}
      {/* <BackgroundAnimation/> */}
    </div>
  );
};

export default App;
