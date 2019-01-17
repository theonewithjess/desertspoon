import React, { Component } from 'react'
import axios from 'axios'
const APP_ID = `${process.env.REACT_APP_APP_ID}`
const APP_KEY = `${process.env.REACT_APP_APP_KEY}`

export default class NutrientDetails extends Component {
    constructor(){
        super()
        this.state = {
            measure: "",
            measureURI: "",
            calories: 0,
            nutrientDetails: {},
            quantity: 1.00,
            displayNutrientDetails: false,
            selectedMeal: "",
            selectedDate: "2019-01-11",
            meals: ["Breakfast", "Lunch", "Dinner", "Snacks"],
            calculated: false
        }
    }

    componentDidMount(){
        console.log("measures", this.props.measures[0])
        this.setState({
            measure: this.props.measures[0].label,
            measureURI: this.props.measures[0].uri,
            selectedMeal: this.state.meals[0]
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
                nutrientDetails: res.data.totalNutrients, 
                displayNutrientDetails: true, 
                calculated: true
            })
        }) 
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

    updateMeal = e => {
        this.setState({
            selectedMeal: e.target.value
        })
    }

    addToLog = () => {
        let {calories, measure, measureURI, quantity, selectedMeal, selectedDate} = this.state
        let {foodURI, name} = this.props
        let fat = this.state.nutrientDetails.FAT ? this.state.nutrientDetails.FAT.quantity.toFixed(0) : 0
        let carbohydrates = this.state.nutrientDetails.CHOCDF ? this.state.nutrientDetails.CHOCDF.quantity.toFixed(0) : 0
        let protein = this.state.nutrientDetails.PROCNT ? this.state.nutrientDetails.PROCNT.quantity.toFixed(0) : 0
        axios.post('/api/foodlog', {
            date: selectedDate,
            meal: selectedMeal,
            name,
            foodURI,
            measure, 
            measureURI,
            quantity,
            calories,
            fat,
            carbohydrates,
            protein
        }).then(res => {
            alert('added to log')
        })
    }

    render() {
        let measures = this.props.measures.map((e, i) => {
            let measureURI = e.label + '|' + e.uri
            return (
                <option key={i} value={measureURI}>{e.label}</option>
            )
        })
        let meals = this.state.meals.map((e, i) => {
            return (
                <option key={i} value={e}>{e}</option>
            )
        })
        let n= this.state.nutrientDetails
        console.log("state", this.state)
    return (
      <div className="nutrients">
          <div className="nutrient-calculator">
            <input id="nutrient-input" type="number" defaultValue={parseFloat(this.state.quantity).toFixed(2)} onChange={this.updateQuantity}/>
            <select className="select-meal" id="nutrient-input-selector" onChange={this.updateMeasure} value={this.state.measure + '|' + this.state.measureURI}>{measures}</select>
            <i id="nutrient-calc" className="fas fa-calculator" onClick={this.calculate} style={{color:"grey"}}></i>
          </div>
          
          <div className="nutrient-details">
            {this.state.displayNutrientDetails && 
            <div className="nutrient-parent">
                <div><h1 id="search-title">Calories {this.state.calories.toFixed(0)}</h1></div>
                <hr id="land3-4"></hr>
            
                {
                    this.state.calculated && 
                        <div className="add-to-log">
                            Add to: <select className="select-meal"onChange={this.updateMeal} value={this.state.selectedMeal}>{meals}</select>
                            <i id="nutrient-calc" className="fas fa-plus-circle" onClick={this.addToLog} style={{color:"grey"}}></i>
                        </div>
                }
          
                <div className="nutrient">
                    <div>Total Fat</div>
                    {n.FAT ? <div>{n.FAT.quantity.toFixed(0)}{n.FAT.unit}</div>
                    : <div>0g</div>}
                </div>

                <div className="nutrient">
                    <div>Saturated Fat</div>
                    {n.FASAT ? <div>{n.FASAT.quantity.toFixed(0)}{n.FASAT.unit}</div>
                    : <div>0g</div>}
                </div>

                <div className="nutrient">
                    <div><i>Trans</i> Fat </div>
                    {n.FATRN ? <div>{n.FATRN.quantity.toFixed(0)}{n.FATRN.unit}</div>
                    : <div>0g</div>}
                </div>

                <div className="nutrient"> 
                    <div>Cholesterol</div> 
                    {n.CHOLE ? <div>{n.CHOLE.quantity.toFixed(0)}{n.CHOLE.unit}</div>
                    : <div>0mg</div>}
                </div>

                <div className="nutrient"> 
                    <div>Sodium</div> 
                    {n.NA ? <div>{n.NA.quantity.toFixed(0)}{n.NA.unit}</div> 
                    : <div>0mg</div>}
                </div>

                <div className="nutrient"> 
                    <div>Total Carbohydrate</div> 
                    {n.CHOCDF ? <div>{n.CHOCDF.quantity.toFixed(0)}{n.CHOCDF.unit}</div> 
                    : <div>0g</div>}
                </div>

                <div className="nutrient"> 
                    <div>Dietary Fiber</div> 
                    {n.FIBTG ? <div>{n.FIBTG.quantity.toFixed(0)}{n.FIBTG.unit}</div> 
                    : <div>0g</div>}
                </div>

                <div className="nutrient"> 
                    <div>Total Sugars</div> 
                    {n.SUGAR ? <div>{n.SUGAR.quantity.toFixed(0)}{n.SUGAR.unit}</div> 
                    : <div>0g</div>}
                </div>

                <div className="nutrient"> 
                    <div>Protein</div> 
                    {n.PROCNT ? <div>{n.PROCNT.quantity.toFixed(0)}{n.PROCNT.unit}</div> 
                    : <div>0g</div>}
                </div>

                <div className="nutrient"> 
                    <div>Vitamin D</div> 
                    {n.VITD ? <div>{n.VITD.quantity.toFixed(0)}{n.VITD.unit}</div> 
                    : <div>0mcg</div>}
                </div>

                <div className="nutrient"> 
                    <div>Calcium</div> 
                    {n.CA ? <div>{n.CA.quantity.toFixed(0)}{n.CA.unit}</div> 
                    : <div>0mg</div>}
                </div>

                <div className="nutrient"> 
                    <div>Iron</div> 
                    {n.FE ? <div>{n.FE.quantity.toFixed(0)}{n.FE.unit}</div> 
                    : <div>0mg</div>}
                </div>

                <div className="nutrient"> 
                    <div>Potassium</div> 
                    {n.K ? <div>{n.K.quantity.toFixed(0)}{n.K.unit}</div> 
                    : <div>0mg</div>}
                </div>
    
            </div>}
          </div>
      </div>
    )
  }
}
