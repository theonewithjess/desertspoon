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
            nutrientDetails: {},
            quantity: 1.00,
            displayNutrientDetails: false
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
                nutrientDetails: res.data.totalNutrients, 
                displayNutrientDetails: true
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
        let n= this.state.nutrientDetails
    return (
      <div>
          <div>
            <input type="number" defaultValue={parseFloat(this.state.quantity).toFixed(2)} onChange={this.updateQuantity} style={{width:"35px"}}/>
            <select onChange={this.updateMeasure} value={this.state.measure + '|' + this.state.measureURI}>{measures}</select>
            <i className="fas fa-calculator" onClick={this.calculate} style={{color:"grey"}}></i>
          </div>
          <div>
            add to <select>{meals}</select>
            <i className="fas fa-plus-circle" style={{color:"grey"}}></i>
          </div>
          <div>
            {this.state.displayNutrientDetails && <div>
                <div>Calories {this.state.calories.toFixed(0)}</div>

                <div>
                    <div>Total Fat</div>
                    {n.FAT ? <div>{n.FAT.quantity.toFixed(0)}{n.FAT.unit}</div>
                    : <div>0g</div>}
                </div>

                <div>
                    <div>Saturated Fat</div>
                    {n.FASAT ? <div>{n.FASAT.quantity.toFixed(0)}{n.FASAT.unit}</div>
                    : <div>0g</div>}
                </div>

                <div>
                    <div><i>Trans</i> Fat </div>
                    {n.FATRN ? <div>{n.FATRN.quantity.toFixed(0)}{n.FATRN.unit}</div>
                    : <div>0g</div>}
                </div>

                <div> 
                    <div>Cholesterol</div> 
                    {n.CHOLE ? <div>{n.CHOLE.quantity.toFixed(0)}{n.CHOLE.unit}</div>
                    : <div>0mg</div>}
                </div>

                <div> 
                    <div>Sodium</div> 
                    {n.NA ? <div>{n.NA.quantity.toFixed(0)}{n.NA.unit}</div> 
                    : <div>0mg</div>}
                </div>

                <div> 
                    <div>Total Carbohydrate</div> 
                    {n.CHOCDF ? <div>{n.CHOCDF.quantity.toFixed(0)}{n.CHOCDF.unit}</div> 
                    : <div>0g</div>}
                </div>

                <div> 
                    <div>Dietary Fiber</div> 
                    {n.FIBTG ? <div>{n.FIBTG.quantity.toFixed(0)}{n.FIBTG.unit}</div> 
                    : <div>0g</div>}
                </div>

                <div> 
                    <div>Total Sugars</div> 
                    {n.SUGAR ? <div>{n.SUGAR.quantity.toFixed(0)}{n.SUGAR.unit}</div> 
                    : <div>0g</div>}
                </div>

                <div> 
                    <div>Protein</div> 
                    {n.PROCNT ? <div>{n.PROCNT.quantity.toFixed(0)}{n.PROCNT.unit}</div> 
                    : <div>0g</div>}
                </div>

                <div> 
                    <div>Vitamin D</div> 
                    {n.VITD ? <div>{n.VITD.quantity.toFixed(0)}{n.VITD.unit}</div> 
                    : <div>0mcg</div>}
                </div>

                <div> 
                    <div>Calcium</div> 
                    {n.CA ? <div>{n.CA.quantity.toFixed(0)}{n.CA.unit}</div> 
                    : <div>0mg</div>}
                </div>

                <div> 
                    <div>Iron</div> 
                    {n.FE ? <div>{n.FE.quantity.toFixed(0)}{n.FE.unit}</div> 
                    : <div>0mg</div>}
                </div>

                <div> 
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
