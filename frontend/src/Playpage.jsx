import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from "@mui/material";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


function Playpage() {

    const {user}=useAuth0();
    console.log("user information",user)

  return (
    <div className="absolute top-4  flex w-screen justify-between">
    <div className="flex items-center ml-3 ">
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

    <div className="mr-5 hover:cursor-pointer">
      <LogoutOutlinedIcon onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}/>
    </div>
  </div>
  )
}

export default Playpage
