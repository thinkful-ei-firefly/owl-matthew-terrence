import React from "react";
import ReactDOM from "react-dom";
import STORE from "./store";
import App from "./App";

ReactDOM.render(<App store={STORE} />, document.getElementById("root"));
