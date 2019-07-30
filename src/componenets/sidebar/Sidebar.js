import React, { Component } from "react";
import ParticipantList from "../ParticipantList";
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
          Show Chat
        </button>
        <ParticipantList participants={this.props.participants} />
      </div>
    );
  }
}
