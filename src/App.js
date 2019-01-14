import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {Switch, Route, withRouter} from 'react-router-dom'
import DailyLog from './components/DailyLog'
import LineChart from './components/LineChart'
import Chart from './components/Chart'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{},
      lineChartData:{},
    }
  }
  render() {
    return (
      <div className="App">
        <h1>desertspoon.com</h1>
        <DailyLog />
        {/*<Chart chartData={this.state.chartData} legendPosition="right"/>*/}
        {/*<LineChart lineChartData={this.state.LineChartData} legendPosition="right"/>*/}
      </div>
    );
  }
}

export default App;
