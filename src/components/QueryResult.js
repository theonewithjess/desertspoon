import React, {Component} from 'react'
import NutrientDetails from './NutrientDetails'
import {connect} from 'react-redux'

class QueryResult extends Component {
    constructor(){
        super()
        this.state = {
            showDetails: false        
        }
    }

    toggleDetails = () => {
        this.setState({showDetails: !this.state.showDetails})
    }
    
    render(){
        let {name, calories} = this.props
        return(
            <div>
                <div className="query-result">
                    <div className="food-name"><p style={{margin: "auto"}}>{name}</p></div>
                    <div className="query-calories">
                        <p style={{margin: "auto"}}>{calories ? calories.toFixed(0) : 0} cal</p>
                        {
                            this.props.isAuthenticated ? 
                            this.state.showDetails ? <i className="fas fa-caret-up carrot" style={{color:"grey"}} onClick={this.toggleDetails}></i> : <i className="fas fa-caret-down carrot" style={{color:"grey"}} onClick={this.toggleDetails} ></i>
                            :
                            null
                        }
                    </div>
                </div>
                {this.state.showDetails && <NutrientDetails measures={this.props.measures} foodURI={this.props.foodURI} name={this.props.name} getLog={this.props.getLog} selectedDate={this.props.selectedDate}/>}
            </div>
        )
    }
}

function mapStateToProps(state){
    let {isAuthenticated} = state
    return {
        isAuthenticated
    }
}

export default connect(mapStateToProps)(QueryResult)

