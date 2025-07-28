import React from "react";
import Avatar from "./Avatar";
import "../assets/styles/card.css";

// Profile card....
const UserProfileCard = () => (
  <div className="card">
    <Avatar />
    <div className="card-name">Joy</div>
    <div>Joy is a Frontend Developer</div>
  </div>
);

export default UserProfileCard;
