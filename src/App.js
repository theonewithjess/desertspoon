import React, { Component } from 'react';
import './reset.css';
import './App.css';
import {connect} from 'react-redux'
import {Switch, Route, withRouter} from 'react-router-dom'
import {userLoggedIn} from './ducks/reducer'
import {HashRouter} from 'react-router-dom'
import axios from 'axios'
import Landing from './components/Landing'
import DailyLog from './components/DailyLog'
import Login from './components/Login'
import Register from './components/Register'


class App extends Component {
  constructor(){
    super()

    this.state = {
      isLoading: true
    }
  }

  componentDidMount(){
    axios.get('/auth/currentUser').then(response => {
      if(response.data){
        this.props.userLoggedIn(response.data)
      }

      this.setState({
        isLoading: false
      })
    })
  }
  render() {
    return this.state.isLoading ?
    <div></div>

    :
    <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/daily-log" component={DailyLog}/>
        </Switch>

        
      </div>

    </HashRouter>
    
  }
}

export default connect(null, {userLoggedIn})(App);
