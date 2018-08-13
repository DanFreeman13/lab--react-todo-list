import React, { Component } from 'react';
import List from './ListOfTasks/List.js';
import './BodyList.css';
import listOfObjects from './listOfObjects.js'

class BodyList extends Component {
  constructor() {
    super();

    this.state = {
      key: (listOfObjects[3].key)+1,
      task: '',
      date: '',
    };
  }

  readInput= (e) => {
    this.setState({ task: e.target.value });
  }

  readDate= (e) => {
    console.log(e.currentTarget)
    var fecha = e.currentTarget.value
    this.setState({ date: fecha });
  }

  storeValue = (e) => {
    e.preventDefault();
    this.setState({
      key: (this.state.key)+1,
    });
    listOfObjects.push(this.state);
    console.log(listOfObjects)
  }

  render() {
    return (
      <div className="innerBody">
        <form id="inputSubmit" onSubmit={this.storeValue}>
          <div className="submitText">
            <input id="dialogBox" type='text' value={this.state.task} onChange={this.readInput} />
            <button id="submitButton" className="submit">+</button>
          </div>
          <input className="dateSelector" name="duedate" type="date" value={this.state.date} onChange={this.readDate}/>
        </form>
        <div>
          { listOfObjects.map(function(frame) {
            return <List key={ frame.key } data={ frame } />
          }) }
        </div>
      </div>
    );
  }
}

export default BodyList;
