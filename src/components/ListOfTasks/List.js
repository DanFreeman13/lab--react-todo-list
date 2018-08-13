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
          <input type="checkbox" className="indCheckbox" />{this.props.data.task}
          <i index={this.props.index} className="deleteMark" onClick={ this.RemoveLine }>X</i>
        </li>
      </ul>

      );
    }
  }

  export default List;
