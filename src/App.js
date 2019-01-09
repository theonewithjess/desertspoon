import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Switch, Route, withRouter} from 'react-router-dom'
import DailyLog from './components/DailyLog'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>desertspoon.com</h1>
        <DailyLog />
      </div>
    );
  }
}

export default App;
