import React, {Component} from 'react'
import axios from 'axios'
import NutrientDetails from './NutrientDetails'

const APP_ID = `${process.env.REACT_APP_APP_ID}`
const APP_KEY = `${process.env.REACT_APP_APP_KEY}`

class QueryResult extends Component {
    constructor(props){
        super()
        this.state = {
            showDetails: false,
            quantity: 1.0,
            nutrientDetails: [],
            calories: 0
        }
    }

    toggleDetails = () => {
        this.setState({showDetails: !this.state.showDetails})
    }

    getDetails = () => {
        console.log("show details", this.state.showDetails)
        if (this.state.showDetails){
            axios.post(`https://api.edamam.com/api/food-database/nutrients?app_id=${APP_ID}&app_key=${APP_KEY}`, {
                ingredients: [
                    {
                        quantity: this.state.quantity,
                        measureURI: this.props.measureURI,
                        foodURI: this.props.foodURI
                    }
                ]
            }).then(res => {
                console.log('nutrients', res);
                // this.setState({
                //     calories: res.data.calories,
                //     nutrientDetails: res.data.totalNutrients
                // })
            })
            return(
                <NutrientDetails 
                calories={this.state.calories}
                nutrientDetails={this.state.nutrientDetails} 
                quantity={this.state.quantity}/>
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