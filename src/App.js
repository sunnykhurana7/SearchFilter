import React, { Component } from 'react';
import './assets/style.css';
import Header from '../src/shared/header'
import Search from '../src/homepage/search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search/>
      </div>
    );
  }
}

export default App;
