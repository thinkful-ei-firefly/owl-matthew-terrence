import React from "react";
import "./App.css";
import Sidebar from "./componenets/sidebar/Sidebar";
import Stage from './componenets/Stage'
import './componenets/Stage.css'


function App({ store }) {
  return (
    <div className="App">
      <Sidebar
        participants={store.participants}
        chatEvents={store.chatEvents}
      />      
        <Stage participants={store.participants}></Stage>
      
    </div>

  );
}

export default App;
