import React, { Component } from 'react';
import './List.css';

class List extends Component {

  constructor(props) {
    super();
    this.state = {
    };
  }

  RemoveLine= (e) => {
    e.target.parentNode.outerHTML = null;
  }


  render() {
    return (

      <ul className="listElements">
        <li className="taskLine">
          <label className="taskText">
            <input className="indCheckbox" type="checkbox" />
            <span>{this.props.data.task}</span>
          </label>
          <time className="dueDate" dateTime={this.props.data.date}>{this.props.data.date}</time>
          <i index={this.props.index} className="deleteMark" onClick={ this.RemoveLine }>X</i>
        </li>
      </ul>

      );
    }
  }

  export default List;
