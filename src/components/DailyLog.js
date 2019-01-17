import React, { Component } from 'react'
import axios from 'axios'
import LogItem from './LogItem'
import Header from './Header'
import Query from './Query'
import Totals from './Totals'

export default class DailyLog extends Component {
    constructor(){
        super()
        this.state = {
            foodLog: []
        }
    }
    componentDidMount(){
        axios.get('/api/foodlog').then(res => {
            this.setState({
                foodLog: res.data
            })
        }).catch(err => console.log(err))
    }
   
    getLog = () => {
        axios.get('/api/foodlog').then(res => {
            this.setState({
                foodLog: res.data
            })
        }).catch(err => console.log(err))
    }
    render() {
        console.log("food log state", this.state)
        let breakfast = this.state.foodLog.map((e,i) => {
            if(this.state.foodLog[i].meal === 'Breakfast'){
                let {quantity, measure, measureuri, name, fooduri, calories, protein, carbohydrates, fat, entry_id} = this.state.foodLog[i]
                return (
                    <LogItem 
                    quantity={quantity}
                    measure={measure}
                    measureuri={measureuri}
                    name={name}
                    fooduri={fooduri}
                    calories={calories}
                    protein={protein}
                    carbohydrates={carbohydrates}
                    fat={fat}
                    key={i}
                    entry_id={entry_id}
                    getLog={this.getLog}
                    />
                )
            } else {
                return(
                    <div key={i}></div>
                )
            }
        })
        let lunch = this.state.foodLog.map((e,i) => {
            if(this.state.foodLog[i].meal === 'Lunch'){
                let {quantity, measure, measureuri, name, fooduri, calories, protein, carbohydrates, fat, entry_id} = this.state.foodLog[i]
                return (
                    <LogItem 
                    quantity={quantity}
                    measure={measure}
                    measureuri={measureuri}
                    name={name}
                    fooduri={fooduri}
                    calories={calories}
                    protein={protein}
                    carbohydrates={carbohydrates}
                    fat={fat}
                    key={i}
                    entry_id={entry_id}
                    getLog={this.getLog}
                    />
                )
            } else {
                return(
                    <div key={i}></div>
                )
            }
        })
        let dinner = this.state.foodLog.map((e,i) => {
            if(this.state.foodLog[i].meal === 'Dinner'){
                let {quantity, measure, measureuri, name, fooduri, calories, protein, carbohydrates, fat, entry_id} = this.state.foodLog[i]
                return (
                    <LogItem 
                    quantity={quantity}
                    measure={measure}
                    measureuri={measureuri}
                    name={name}
                    fooduri={fooduri}
                    calories={calories}
                    protein={protein}
                    carbohydrates={carbohydrates}
                    fat={fat}
                    key={i}
                    entry_id={entry_id}
                    getLog={this.getLog}
                    />
                )
            } else {
                return(
                    <div key={i}></div>
                )
            }
        })
        let snacks = this.state.foodLog.map((e,i) => {
            if(this.state.foodLog[i].meal === 'Snacks'){
                let {quantity, measure, measureuri, name, fooduri, calories, protein, carbohydrates, fat, entry_id} = this.state.foodLog[i]
                return (
                    <LogItem 
                    quantity={quantity}
                    measure={measure}
                    measureuri={measureuri}
                    name={name}
                    fooduri={fooduri}
                    calories={calories}
                    protein={protein}
                    carbohydrates={carbohydrates}
                    fat={fat}
                    entry_id={entry_id}
                    key={i}
                    getLog={this.getLog}
                    />
                )
            } else {
                return(
                    <div key={i}></div>
                )
            }
        })
        return (
            <div className="daily-log">
                
                    
                <div className="daily-log-component">

                    <div className="search-foodlog">
                        <div className="search-container-dailylog"> 
                            <Query/>
                        </div>
                        <div></div>
                    </div>

                    <div className="food-log">
                        <h1>Today's Date</h1>
                        <div className="meal-div">
                            Breakfast 
                            {breakfast}
                        </div>
                        <div className="meal-div">
                            Lunch 
                            {lunch}
                        </div>
                        <div className="meal-div">
                            Dinner 
                            {dinner}
                        </div>
                        <div className="meal-div">
                            Snacks 
                            {snacks}
                        </div>

                    </div>
                        <Totals/>
                </div>
            </div>
        )
    }
}
