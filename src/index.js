import React from 'react';
import ReactDOM from 'react-dom';

//arrow syntax is cleaner and makes this keyword have a different value compared to normal function syntax
const App = () => {
  return <div>Hi!</div>;
}

//putting App inside tag creates an instance of the class
ReactDOM.render(<App />, document.querySelector('.container'));
