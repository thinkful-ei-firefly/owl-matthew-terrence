import React, { Component } from "react";
import ParticipantList from "../ParticipantList";
import Chatbox from "../chatbox/Chatbox";
import "./sidebar.css";

export default class Sidebar extends Component {
  state = {
    chatShow: false
  };
  handleClick = () => {
    this.setState({ chatShow: !this.state.chatShow });
  };
  render() {
    return (
      <div className="sidebar">
        <button className="button" onClick={this.handleClick}>
          Toggle Chat
        </button>
        {this.state.chatShow ? (
          <Chatbox
            participants={this.props.participants}
            chatList={this.props.chatEvents}
          />
        ) : (
          <ParticipantList participants={this.props.participants} />
        )}
      </div>
    );
  }
}
