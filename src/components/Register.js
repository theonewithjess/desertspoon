import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {userLoggedIn} from '../ducks/reducer'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';


class Register extends Component {
    constructor(){
        super()

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            calorieGoal: '',
            error: ''
        }
    }
    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    
    handleKeyPress = (event) => {
        
            if(event.key==="Enter"){
                // axios.post('/auth/register', this.state).then(response => {
                //     console.log(1111111, response)
                //     let user = response.data
                //     this.props.userLoggedIn(user)
                // }).catch(error => {
                //     console.log(error.response)
                //     toast.error('email already exists')
                // })
                this.handleRegister()
            }
    }

    handleRegister = () => {
        if(this.state.password === this.state.confirmPassword){
            axios.post('/auth/register', this.state).then(response => {
                console.log(1111111, response)
                let user = response.data
                this.props.userLoggedIn(user)
            }).catch(error => {
                console.log(error.response)
                toast.error('email already exists, or invalid')
            })

        }else{
            toast.error('passwords dont match')
        
        }
    }
    

    
    render(){
        return(
            <div className="login-component">
                
                <Header/>

                <section className="register-container">
                    <div className="user-pass-2">
                        <div className="group">
                            <input value={this.state.firstName} onChange={this.handleChange} onKeyPress={this.handleKeyPress} type="text" name="firstName" required/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Firstname</label>
                        </div> 
                        <div className="group">
                            <input value={this.state.lastName} onChange={this.handleChange} onKeyPress={this.handleKeyPress} type="text" name="lastName" required/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Lastname</label>
                        </div> 
                        <div className="group">
                            <input value={this.state.email} onChange={this.handleChange} onKeyPress={this.handleKeyPress} type="email" name="email" required/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>E-mail</label>
                        </div>

                        <div className="group">
                            <input value={this.state.password} onChange={this.handleChange} onKeyPress={this.handleKeyPress} type="password" name="password" required/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Password</label>
                        </div>
                        <div className="group">
                            <input value={this.state.confirmPassword} onChange={this.handleChange} onKeyPress={this.handleKeyPress} type="password" name="confirmPassword" required/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Confirm password</label>
                        </div>
                        <div className="group">
                            <input value={this.state.calorieGoal} onChange={this.handleChange} onKeyPress={this.handleKeyPress}  type="text" name="calorieGoal" required/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Daily calorie goal</label>
                        </div>
                        
                    </div>

                    <div className="login-buttons">
                        
                        <button className="login-button" onClick={this.handleRegister}>Register</button>
                        <p id="signup-link">Have an account? <Link to="/login">Log in</Link></p>
                        {this.state.error}
                        <ToastContainer
                            position="top-left"
                            autoClose={4000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnVisibilityChange
                            draggable
                            pauseOnHover
                        />
                    </div>
                </section>

            
            </div>

        )
            



   
}
}

function mapStateToProps(state){
    let {isAuthenticated} = state
    return{
        isAuthenticated
    }
}


export default connect(mapStateToProps, {userLoggedIn})(Register)