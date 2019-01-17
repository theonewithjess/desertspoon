import React, { Component } from 'react'
import Axios from 'axios';

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
        total calories: {this.state.totalCalories}
        total Protein: {this.state.totalProtein}
        total Carbohydrates: {this.state.totalCarbohydrates}
        total Fat: {this.state.totalFat}
      </div>
    )
  }
}
