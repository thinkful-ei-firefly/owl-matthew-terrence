import React from "react";
import "./participant.css";

const Participant = ({ name, avatar, inSession, onStage }) => {
  return (
    <div className="participant">
      <img className="avatar" src={avatar} alt="avatar" />
      <div className="info">
        <h3>{name}</h3>
        <p>{inSession ? "In Session" : ""}</p>
        <p>{onStage ? "true" : ""}</p>
        <a href="#">Boot</a>
      </div>
    </div>
  );
};

export default Participant;
