import React, { Component } from 'react';

//use class component instead of functional componenet when you need more functionality, i.e. component needs to be more aware
//class componenets need render method, functional do not
class SearchBar extends Component {
    render() {
        return <input />;
    }
}

export default SearchBar;