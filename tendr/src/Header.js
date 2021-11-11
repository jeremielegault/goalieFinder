import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import "./Header.css";

const Header = () => {
  return (
    //   BEM
    <div className="header">
      <PersonIcon />
      <h2>I am a header</h2>
      <ChatBubbleIcon />
    </div>
  );
};

export default Header;
