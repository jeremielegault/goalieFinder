import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
import "./Header.css";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    //   BEM
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icons" />
      </IconButton>
      <IconButton>
        <SportsHockeyIcon className="header_icons" fontSize="large" />
      </IconButton>
      <IconButton>
        <ChatBubbleIcon fontSize="large" className="header_icons" />
      </IconButton>
    </div>
  );
};

export default Header;
