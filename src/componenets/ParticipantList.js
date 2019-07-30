import React from "react";
import Participant from "./participant/Participant";

const ParticipantList = ({ participants }) => {
  return (
    <div className="p-list">
      {participants.map(particpant => (
        <Participant {...particpant} />
      ))}
    </div>
  );
};

export default ParticipantList;
