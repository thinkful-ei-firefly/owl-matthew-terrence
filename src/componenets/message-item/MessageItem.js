import React from "react";

const MessageItem = ({ participant, type, message, time, timestamp }) => {
  const determineMessage = () => {
    if (type === "message") {
      return <h3>{`${message} at ${new Date(timestamp)}`}</h3>;
    } else if (type === "left") {
      return <p>{`${participant.name} left at ${new Date(timestamp)}`}</p>;
    } else {
      return <p>{`${participant.name} ${type} at ${new Date(timestamp)}`}</p>;
    }
  };

  return (
    <div className="participant">
      <img className="avatar" src={participant.avatar} />
      <h3>{participant.name}</h3>
      {determineMessage()}
    </div>
  );
};

export default MessageItem;
