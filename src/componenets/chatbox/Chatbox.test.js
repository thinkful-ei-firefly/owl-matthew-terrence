import React from "react";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";
import Chatbox from "./Chatbox";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Chatbox participants={[]} chatList={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer.create(<Chatbox participants={[]} chatList={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
