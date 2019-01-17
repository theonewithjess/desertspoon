import React, { Component } from 'react'
import Axios from 'axios';
import Chart from '../components/Chart'

export default class Totals extends Component {
    constructor(){
        super()
        this.state={
            totalCalories:0,
            totalProtein:0,
            totalCarbohydrates:0,
            totalFat:0
        }
    }
    componentDidMount(){
        Axios.get('/api/totals').then(res=>{
            this.setState({
                totalCalories:res.data[0].totalcalories,
                totalProtein:res.data[0].totalprotein,
                totalCarbohydrates:res.data[0].totalcarbohydrates,
                totalFat:res.data[0].totalfat
            })
           
        })
    }
  render() {
    return (
      <div>
        total Calories: {this.state.totalCalories}
        total Protein: {this.state.totalProtein}
        total Carbohydrates: {this.state.totalCarbohydrates}
        total Fat: {this.state.totalFat}
        <Chart protein={(this.state.totalProtein*4)/this.state.totalCalories}
        carbohydrates={(this.state.totalCarbohydrates*4)/this.state.totalCalories}
        fat={(this.state.totalFat*9)/this.state.totalCalories}/>
      </div>
    )
  }
}
