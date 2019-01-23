import React, { Component } from 'react'
import Axios from 'axios';
import Chart from '../components/Chart'
import {connect} from 'react-redux'

class Totals extends Component {
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
        let date = this.props.selectedDate
        Axios.post('/api/totals', {date}).then(res=>{
            this.setState({
                totalCalories:res.data[0].totalcalories,
                totalProtein:res.data[0].totalprotein,
                totalCarbohydrates:res.data[0].totalcarbohydrates,
                totalFat:res.data[0].totalfat
            })
           
        })
    }
    componentDidUpdate(prevProps){
        let date = this.props.selectedDate
        if(prevProps.foodLog !== this.props.foodLog){
            Axios.post('/api/totals', {date}).then(res=>{
                this.setState({
                    totalCalories:res.data[0].totalcalories,
                    totalProtein:res.data[0].totalprotein,
                    totalCarbohydrates:res.data[0].totalcarbohydrates,
                    totalFat:res.data[0].totalfat
                })
               
            })

        }
    }
  render() {
    return (
      <div className="dailylog-total-div">
            <div>
                Daily Calorie Goal:
                {this.props.user.calorie_goal}
            </div>
            <div className="daily-totals">
                <p id="macros">TOTALS</p>
                <p id="macros">Calories: {this.state.totalCalories ? this.state.totalCalories : 0}</p>
                <p id="macros">Protein: {this.state.totalProtein ? this.state.totalProtein : 0}g</p>
                <p id="macros">Carbohydrates: {this.state.totalCarbohydrates ? this.state.totalCarbohydrates : 0}g</p>
                <p id="macros">Fat: {this.state.totalFat ? this.state.totalFat : 0}g</p>
            </div>
            <div className="daily-macros">
                <h1 id="search-title">MACROS</h1>
                <hr id="land3-4"></hr>
                <Chart protein={(this.state.totalProtein*4)/this.state.totalCalories}
                carbohydrates={(this.state.totalCarbohydrates*4)/this.state.totalCalories}
                fat={(this.state.totalFat*9)/this.state.totalCalories}/>
            </div>
      </div>
    )
  }
}
function mapStateToProps(state){
    let {user} = state
    return{
        user
    }
}
export default connect(mapStateToProps)(Totals)