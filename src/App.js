import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Switch, Route, withRouter} from 'react-router-dom'
import DailyLog from './components/DailyLog'
import Query from './components/Query'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>DESERTSPOON</h1>
        <DailyLog />
        <Query />
      </div>
    );
  }
}

export default App;
