import React, { Component } from 'react';
import './TopHeader.css'


class TopHeader extends Component {

  render() {
    return (

      <div className="header-container">
        <h1>To Do List</h1>
        <small className="Mode">Normal Mode By Daniel Freeman</small>
      </div>

      );
    }
  }

  export default TopHeader;
