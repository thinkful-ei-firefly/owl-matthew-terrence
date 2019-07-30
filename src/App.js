import React from "react";
import "./App.css";
import Sidebar from "./componenets/sidebar/Sidebar";

function App({ store }) {
  return (
    <div className="App">
      <Sidebar
        participants={store.participants}
        chatEvents={store.chatEvents}
      />
    </div>
  );
}

export default App;
