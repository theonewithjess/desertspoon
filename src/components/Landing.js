import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'



export default class Landing extends Component {
  render() {
    return (
        <div>
            <Header/>
            <div className="landing-1">
                <div className="welcome-div">
                    <div>
                        <h1 className="title">You are what you eat</h1>
                        <div className="inner-welcome-div">
                            <p id="landing-p">Know what you're eating. Fuel the right way. Start today. </p>
                            <Link to="/register"><button id="landing-button">Join today</button></Link>

                        </div>

                    </div>
                </div>
             
            </div>
            <div className="landing-2">
                Features
             
            </div>
            <div className="landing-3">
                succes stories
             
            </div>
            <div className="landing-4">
                about the dev team
             
            </div>
        </div>
    )
  }
}
