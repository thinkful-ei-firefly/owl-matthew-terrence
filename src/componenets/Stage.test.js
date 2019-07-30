
import React from 'react';
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom';
import Stage from "./Stage";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stage participants={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Stage participants={[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });