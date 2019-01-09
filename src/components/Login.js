import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import {userLoggedIn} from '../ducks/reducer'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'



class Login extends Component {
    constructor(){
        super()
        
        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }







    render() {
        return (
        <div>
            
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

export default connect(mapStateToProps, {userLoggedIn})(Login)