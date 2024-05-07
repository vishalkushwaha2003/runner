import React, { useState, useEffect } from "react";
import useLogin from "./hooks/useLogin";

import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import WordAnimation from "./LetterAnimation";
import Typewriter from "./TypeWriter";
import { Button } from "@mui/material";

function AfterLogin() {
  const { user, logout, isAuthenticated } = useAuth0();
  const { login, Loading } = useLogin();

  useEffect(() => {
    if (isAuthenticated) {
      login({ userName: user.nickname, profilePic: user.picture });
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className="absolute flex flex-col  w-[100vw] h-[100vh]   ">
        <div className="justify-between  pt-[1vw] flex">
          <div className="flex items-center  ml-[1vw] ">
            <span className="hover:cursor-pointer">
              <Avatar alt="Travis Howard" src={`${user.picture}`} />{" "}
            </span>
            <h4 class="wordCarousel">
              <div>
                <ul class="flip5">
                  <li>{user.name}</li>
                  <li>{user.nickname}</li>
                  <li>Cool</li>
                  <li>Squirrel🐿</li>
                  <li>Rad</li>
                </ul>
              </div>
            </h4>
          </div>

          <div className="mr-[1vw] hover:cursor-pointer">
            <LogoutOutlinedIcon
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            />
          </div>
        </div>

        <Typewriter />

        <WordAnimation />

        <div className="flex basis-[30%] justify-center items-center">
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
          >
            Start
          </Button>
        </div>
      </div>
    </>
  );
}

export default AfterLogin;
