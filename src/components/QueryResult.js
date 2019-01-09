import React, {Component} from 'react'
import axios from 'axios'

class QueryResult extends Component {
    constructor(){
        super()
        this.state = {
            showDetails: false
        }
    }

    toggleDetails = (id) => {
        this.setState({showDetails: !this.state.showDetails})
    }

    getDetails = () => {
        if (this.state.showDetails){
                return(
                    <div>test div</div>
                )
        }
    }

    render(){
        let {name, calories} = this.props
        return(
            <div>
                    <div style={{width:"500px", height:"25px", border:"1px solid grey", display:"flex", justifyContent:"space-between"}}>
                        {name}
                        <div>
                            {calories.toFixed(0)}
                            <i className="fas fa-caret-down" style={{color:"grey"}} onClick={this.toggleDetails} ></i>
                        </div>
                    </div>
                    {this.state.showDetails ? this.getDetails() : null}
                </div>
        )
    }
}

export default QueryResult