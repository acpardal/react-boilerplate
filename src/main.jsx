import React from 'react';
import { render } from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        Hello World from React!!
      </div>
    );
  }
}

render(
  <HelloWorld/>,
  document.getElementById('ReactApp')
);
