import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {userLoggedIn} from '../ducks/reducer'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Register extends Component {
    constructor(){
        super()

        this.state = {
            firstName: '',
            lastName: '',
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
    let {isAuthenticated} = state
    return{
        isAuthenticated
    }
}


export default connect(mapStateToProps, {userLoggedIn})(Register)