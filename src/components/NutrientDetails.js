import React, { Component } from 'react'
import axios from 'axios'
const APP_ID = `${process.env.REACT_APP_APP_ID}`
const APP_KEY = `${process.env.REACT_APP_APP_KEY}`

export default class NutrientDetails extends Component {
    constructor(props){
        super()
        this.state = {
            measure: "",
            measureURI: "",
            calories: 0,
            nutrientDetails: [],
            quantity: 1.00
        }
    }

    componentDidMount(){
        console.log("measures", this.props.measures[0])
        this.setState({
            measure: this.props.measures[0].label,
            measureURI: this.props.measures[0].uri
        })
    }

    calculate = () => {
        axios.post(`https://api.edamam.com/api/food-database/nutrients?app_id=${APP_ID}&app_key=${APP_KEY}`, {
            ingredients: [
                {
                    quantity: this.state.quantity,
                    measureURI: this.state.measureURI,
                    foodURI: this.props.foodURI
                }
            ]
        }).then(res => {
            console.log('nutrients', res)
            this.setState({
                calories: res.data.calories,
                nutrientDetails: res.data.totalNutrients
            })
        }) 
        console.log("state", this.state)
    }

    updateQuantity = e => {
        this.setState({quantity: parseFloat(e.target.value)})
    }

    updateMeasure = e => {
        let measures = e.target.value.split('|')
        this.setState({
            measure: measures[0],
            measureURI: measures[1]
        })
    }

    render() {
        let measures = this.props.measures.map((e, i) => {
            let measureURI = e.label + '|' + e.uri
            return (
                <option key={i} value={measureURI}>{e.label}</option>
            )
        })
        let mealsArray = ["Breakfast", "Lunch", "Dinner", "Snacks"]
        let meals = mealsArray.map((e, i) => {
            return (
                <option key={i} value={e}>{e}</option>
            )
        })

    return (
      <div>
          <div>
            <input type="number" defaultValue={parseFloat(this.state.quantity).toFixed(2)} onChange={this.updateQuantity} style={{width:"35px"}}/>
            <select onChange={this.updateMeasure} value={this.state.measure + '|' + this.state.measureURI}>{measures}</select>
            <select>{meals}</select>
            <i className="fas fa-calculator" onClick={this.calculate} style={{color:"grey"}}></i>
          </div>
          <div>
              <p>nutritional information</p>
              <i className="fas fa-plus-circle" style={{color:"grey"}}></i>
          </div>
      </div>
    )
  }
}
