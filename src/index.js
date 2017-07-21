import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBdHuat6xcid48svtGgfUFaWzccRB9IoBc';

//arrow syntax is cleaner and makes this keyword have a different value compared to normal function syntax
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//putting App inside tag creates an instance of the class
ReactDOM.render(<App />, document.querySelector('.container'));
