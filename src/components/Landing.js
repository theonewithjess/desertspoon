import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'
import {connect} from 'react-redux'



class Landing extends Component {
  render() {
    return (
        <div>
            <Header/>
            <div className="landing-1">
            
                <div className="welcome-div">
                    <div className="outer-welcome-div">
                        <div className="welcome">
                            {
                                this.props.isAuthenticated ?
                                <h1 className="title">Welcome, {this.props.user.first_name}!</h1>
                                :
                                <h1 className="title">You are what you eat</h1>

                            }
                            <p id="landing-p">Know what you're eating. Fuel the right way. Start today. </p>
                        </div>
                        {
                            this.props.isAuthenticated ?
                            <div className="inner-welcome-div">
                                <Link to="/"><button id="landing-button">Track your goals HERE!</button></Link>
                            </div>
                            :
                            <div className="inner-welcome-div">
                                <Link to="/register"><button id="landing-button">Start for FREE!</button></Link>
                                <p>Already have an account? <Link to="/login">Login</Link></p>
                            </div>

                        }

                    </div>
                </div>
             
            </div>
            <div className="landing-2">
                <div className="search-div">
                    <h1 id="search-title">Learn more about what you eat, search over 700,000 foods to get nutrient information.</h1>
                    <div className="search-container"> 
                        <input className="search-bar" placeholder="... try searching your favorite food"></input>
                        <i className="fa fa-search"></i>
                    </div>
                </div>
                <h1 id="tracker-title">You have goals? We have tools to help you</h1>
                <div className="features">
                    <div className="feature-container">
                        <p id="feature-p">World leading macro nutrient tracker</p>
                        <div className="feature-pie">

                        </div>
                    </div>
                    <div className="feature-container">
                        <p id="feature-p">Tracking your weekly diet</p>
                        <div className="feature-graph">

                        </div>
                    </div>
                    <div className="feature-container">
                        <p id="feature-p">Access to the largest food database</p>
                        <div className="feature-search">

                        </div>
                    </div>
                </div>
             
            </div>
            <br></br>
            <hr id="land3-4"></hr>
            <div className="landing-3">
                <h1 id="search-title">Victory Wall!</h1>
                <div className="victory-carousel">
                   
                </div>
             
            </div>
            <hr id="land3-4"></hr>
                <h1 id="search-title">Meet the team behind the scenes</h1>
            <div className="landing-4">
                <div className="dev-container">
                    <div className="dev-team">
                        
                    </div>
                    <h1>Austin Overton</h1>
                    <hr id="land3-4"></hr>
                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className="dev-container">
                    <div className="dev-team">
                       
                    </div>
                    <h1>Jessica Morgan</h1>
                    <hr id="land3-4"></hr>
                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className="dev-container">
                    <div className="dev-team">
                        
                    </div>
                    <h1>Austin Brake</h1>
                    <hr id="land3-4"></hr>
                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
             
            </div>
        </div>
    )
  }
}
function mapStateToProps(state){
    let {isAuthenticated, user} = state
    return{
        isAuthenticated,
        user
        
    }
}
export default connect(mapStateToProps)(Landing)