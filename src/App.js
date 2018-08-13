import React, { Component } from 'react';
import BodyList from './components/BodyList.js'
import TopHeader from './components/TopHeader/topHeader.js'
import './App.css'

class App extends Component {

  render() {
    return (
      <div id="app-container">
        <TopHeader />
        <BodyList />
      </div>
    );
  }
}

export default App;
