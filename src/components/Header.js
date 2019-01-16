import React, { Component } from 'react'
// import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {userLoggedOut, searchProducts} from '../ducks/reducer'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Header extends Component {
    constructor(){
        super()
        this.state = {
            showMenu: false,
            slide: 0, //how much it slides down
            lastScrollY: 0,  //current position in state
            
        }
    }
    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll = () => {
        
        const { lastScrollY } = this.state
        const currentScrollY = window.scrollY
        
        if(currentScrollY > lastScrollY){
            this.setState({ slide: '-50px' })
        }else {
            this.setState({ slide: '0px' })
        }
        this.setState({ lastScrollY: currentScrollY })
    }
    showMenu = () => {
        this.setState({
          showMenu: !this.state.showMenu
        })
    }
    handleLogout = () => {
        axios.get('/auth/logout').then(response => {
            this.props.userLoggedOut()
            toast.success('Successfully logged out')
        })
      
    }




    render() {
        return (
            <header className="navbar" style={{transform: `translate(0, ${this.state.slide})`, transition: 'transform 300ms linear'}}>
               
                <Link to="/" className="company-name">DESERT SPOON</Link>
                <div className="links">
                    
                        {
                            this.props.isAuthenticated ?

                        <div className="log-div">
                            
                            
                            <Link to="/" className="nav-link" onClick={this.handleLogout}>Logout</Link>
                        </div>
                            :
                        <div className="log-div">

                            <Link to="/login" className="nav-link">Login</Link>
                            <p className="nav-link">|</p>
                            <Link to="/register" className="nav-link">Sign up</Link>
                        </div>
                        }
                        
                        
                    
                    
                    <span className="menu"><i className="fa fa-bars" onClick={this.showMenu} transition={10000} ></i></span>
                    {
                        this.state.showMenu ? ( 
                            <div className="drop-menu" id="slide"onMouseLeave={this.showMenu}>
                                <h1>Test</h1>
                                <h1>Test</h1>
                                <h1>Test</h1>
                                <h1>Test</h1>
                                <h1>Test</h1>
                                
                            </div>
                        ) : (null)
                    }
                </div>
            </header>
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

export default connect(mapStateToProps, {userLoggedOut})(Header)
