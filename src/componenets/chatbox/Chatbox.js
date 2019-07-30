import React from "react";
import MessageItem from "../message-item/MessageItem";

const Chatbox = ({ chatList, participants }) => {
  console.log(participants);
  return (
    <div>
      {chatList.map(chat => {
        let participant;
        participants.forEach(a => {
          if (a.id === chat.participantId) {
            participant = a;
          }
        });

        console.log(participant);
        return <MessageItem participant={participant} {...chat} />;
      })}
    </div>
  );
};

export default Chatbox;
