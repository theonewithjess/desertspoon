import React, {Component} from 'react'
import NutrientDetails from './NutrientDetails'

class QueryResult extends Component {
    constructor(props){
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
                <div style={{width:"500px", height:"25px", border:"1px solid grey", display:"flex", justifyContent:"space-between"}}>
                    {name}
                    <div style={{width:"100px", display:"flex", flexDirection:"row", justifyContent:"flex-end", alignItems:"center", alignContent:"flex-end"}}>
                        <p style={{padding:"5px"}}>{calories.toFixed(0)} cal</p>
                        {this.state.showDetails ? <i className="fas fa-caret-up" style={{color:"grey"}} onClick={this.toggleDetails}></i> : <i className="fas fa-caret-down" style={{color:"grey"}} onClick={this.toggleDetails} ></i>}
                    </div>
                </div>
                {this.state.showDetails ? <NutrientDetails measures={this.props.measures} foodURI={this.props.foodURI}/> : null}
            </div>
        )
    }
}

export default QueryResult

