import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {searchFoods} from '../ducks/reducer'
import Card from './Card';
import data from '../components/data'
import axios from 'axios'

const APP_ID = `${process.env.REACT_APP_APP_ID}`
const APP_KEY = `${process.env.REACT_APP_APP_KEY}`

class Landing extends Component {
    constructor(props){
        super(props);
        this.state = {
            properties: data.properties,
            property: data.properties[0],
            query: ''        
        }
    }
        
    nextProperty = () => {
        if(this.state.property.index === this.state.properties.length-1){
            let newIndex = 0
            this.setState({
                property: data.properties[newIndex]
            })
        } else {
            let newIndex = this.state.property.index+1
            this.setState({
                property: data.properties[newIndex]
            })
        }
    }
    
        
    prevProperty = () => {
        if(this.state.property.index === 0){
            let newIndex = this.state.properties.length-1
            this.setState({
                property: data.properties[newIndex]
            })
        } else {
            let newIndex = this.state.property.index-1;
            this.setState({
                property: data.properties[newIndex]
            })
        }
    }

    updateInput = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    keyPress = e => {
        if(e.keyCode === 13){
            this.redirect()
        }
    }

    redirect = e => {
        axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${this.state.query}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(res => {
            this.props.searchFoods(res.data.hints)
            if(this.props.location.pathname !== '/query'){
                this.props.history.push('/query')
            }
        })        
    }

    render() {
    const {property} = this.state
    return (
        <div>
            
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
                                <Link to="/dailylog"><button id="landing-button">Track your goals HERE!</button></Link>
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
                {this.props.isAuthenticated ? 
                                    <div className="search-div"></div>
                                    :
                    <div className="search-div">
                        <h1 id="search-title">Learn more about what you eat, search over 700,000 foods to get nutrient information.</h1>
                        <div className="search-container"> 
                            <input className="search-bar" placeholder="... try searching your favorite food" onChange={this.updateInput} onKeyDown={this.keyPress}></input>
                            <i className="fa fa-search" onClick={this.redirect}></i>
                        </div>
                    </div>
                }
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
                    <div className={`cards-slider active-slide-${property.index}`}>
                        <button 
                        className="victory-buttons"
                        type="button"
                        onClick={() => this.prevProperty()} 
                        ><h2>{"<<"}</h2></button>

                            <div className="cards-slider-wrapper" >
                                {
                                    <Card property={property} />
                                }
                            </div>
                        
                        <button 
                        className="victory-buttons1"
                        type="button"
                        onClick={() => this.nextProperty()}
                        ><h2>{">>"}</h2></button>
                    </div>
                </div>
             
            </div>
            <br></br>
            <br></br>
            <br></br>
            <hr id="land3-4"></hr>
                <h1 id="search-title">Meet the team behind the scenes</h1>
            <div className="landing-4">
                <div className="dev-container">
                    <div className="dev-team" id="austin-overton">
                        
                    </div>
                    <h1>Austin Overton</h1>
                    <h2><a href="https://austinsoverton.wixsite.com/stevenoverton">portfolio</a></h2>
                    <hr id="land3-4"></hr>
                    <p>
                        <a href="https://github.com/Zinthero"><i class="fab fa-github-square"></i></a>    
                        <a href="https://www.linkedin.com/in/steven-austin-overton/"><i class="fab fa-linkedin"></i></a>
                    </p>
                </div>

                <div className="dev-container">
                    <div className="dev-team" id="jessica-morgan">
                       
                    </div>
                    <h1>Jessica Morgan</h1>
                    <h2><a href="https://www.theonewithjess.com/">portfolio</a></h2>
                    <hr id="land3-4"></hr>
                    <p>
                        <a href="https://github.com/theonewithjess"><i class="fab fa-github-square"></i></a>    
                        <a href="https://www.linkedin.com/in/theonewithjess/"><i class="fab fa-linkedin"></i></a>
                    </p>
                </div>

                <div className="dev-container">
                    <div className="dev-team" id="austin-brake">
                        
                    </div>
                    <h1>Austin Brake</h1>
                    {/* <h2><a href="">Portfolio</a></h2> */}
                    <hr id="land3-4"></hr>
                    <p>
                        <a href="https://github.com/codeBrake"><i class="fab fa-github-square"></i></a>    
                        <a href="https://www.linkedin.com/in/austin-brake/"><i class="fab fa-linkedin"></i></a>
                    </p>
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
export default connect(mapStateToProps, {searchFoods})(Landing)