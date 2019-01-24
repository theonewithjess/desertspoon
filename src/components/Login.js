import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import {userLoggedIn} from '../ducks/reducer'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'


class Login extends Component {
    constructor(){
        super()
        
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            error: ''
        }
    }
    handleUsernameChange(email){
        this.setState({
            email
        })
    }
    handlePasswordChange(password){
        this.setState({
            password
        })
    }
    handleKeyPress = (event) => {
        if( event.key==="Enter" ){
            this.handleLogin()
        }  
    }
    handleLogin = () => {
        axios.post('/auth/login', this.state).then(response => {
            let user = response.data
            this.props.userLoggedIn(user)
            toast.success('Successfully logged in')
        }).catch(error => {
            console.log(error.response)
            toast.error('The email or password you entered is incorrect')
        })
    }

    render() {
        return this.props.isAuthenticated ? 
            <Redirect to="/"/> :
            <div className="login-component">       
                <section className="login-container">
                    <div className="user-pass">
                        <div className="group">
                            <input className="login-input" onChange={ (e) => this.handleUsernameChange( e.target.value ) } onKeyPress={this.handleKeyPress} type="text" required/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>E-mail</label>
                        </div>

                        <div className="group">
                            <input className="login-input" onChange={ (e) => this.handlePasswordChange( e.target.value ) } onKeyPress={this.handleKeyPress} type="password" required/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Password</label>
                        </div>

                    </div>

                    <div className="login-buttons">
                        <button className="login-button" onClick={ this.handleLogin }>Login</button>
                        <p id="signup-link">Not a member? <Link to="/register">Sign up now</Link></p>
                        
                    </div>
            
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
                
                </section>

        </div>
    }
}

function mapStateToProps(state){
    let {isAuthenticated, user} = state
    return{
        isAuthenticated,
        user
    }
}

export default connect(mapStateToProps, {userLoggedIn})(Login)