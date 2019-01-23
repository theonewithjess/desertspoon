import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import LogItem from './LogItem'
import Query from './Query'
import Totals from './Totals'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

class DailyLog extends Component {
    constructor(){
        super()
        this.state = {
            foodLog: [],
            selectedDate: dateFnsFormat(new Date(), 'yyyy-MM-dd')
        }
    }
    
    componentDidMount(){
        let date= this.state.selectedDate
        axios.post('/api/foodlog/date', {date}).then(res => {
            this.setState({
                foodLog: res.data
            })
        }).catch(err => console.log(err))
    }

    componentDidUpdate(prevProps, prevState){
        let date = this.state.selectedDate
        if(prevState.selectedDate !== this.state.selectedDate){
            axios.post('/api/foodlog/date', {date}).then(res=>{
                this.setState({
                    foodLog: res.data
                })
               
            }).catch(err => console.log(err))

        }
    }
    
    getLog = () => {
        let date = this.state.selectedDate
        axios.post('/api/foodlog/date', {date}).then(res => {
            this.setState({
                foodLog: res.data
            })
        }).catch(err => console.log(err))
    }

    handleDayChange = (day) => {
        let formatDay = dateFnsFormat(day, 'yyyy-MM-dd')
        this.setState({
            selectedDate: formatDay
        })
    }
    
    parseDate = (str, format, locale) => {
        const parsed = dateFnsParse(str, format, {locale});
        if (DateUtils.isDate(parsed)) {
          return parsed;
        }
        return undefined;
       }
    formatDate = (date, format, locale) => {
    return dateFnsFormat(date, format, {locale});
    }
    render() {
       
        const FORMAT = 'yyyy-MM-dd'
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
        return !this.props.isAuthenticated ?
            <Redirect to="/login"/>:
            <div className="daily-log">
                
                    
                <div className="daily-log-component">

                    <div className="search-foodlog">
                        <div className="search-container-dailylog"> 
                            <Query getLog={this.getLog} selectedDate={this.state.selectedDate}/>

                            
                        </div>
                        <div></div>
                    </div>

                    <hr></hr>

                    <div className="food-log">


                        <div className="mobile-log">
                            <div className="date">
                             
                                <DayPickerInput onDayChange={this.handleDayChange}  parseDate={this.parseDate} formatDate={this.formatDate} placeholder={`${dateFnsFormat(new Date(), FORMAT)}`} value={this.state.selectedDate} className="date"/>
                                
                            </div>
                            <hr id="land3-4"></hr>
                            <div className="meal-div">
                                <h1 id="search-title">Breakfast<hr></hr></h1>
                                
                                <div className="meal-description">
                                    {breakfast}
                                </div>
                            </div>
                            <div className="meal-div">
                                <h1 id="search-title">Lunch<hr></hr></h1>
                                
                                <div className="meal-description">
                                    {lunch}
                                </div> 
                            </div>
                            <div className="meal-div">
                                <h1 id="search-title">Dinner<hr></hr></h1> 
                                
                                <div className="meal-description">
                                    {dinner}
                                </div>
                            </div>
                            <div className="meal-div">
                                <h1 id="search-title">Snacks<hr></hr></h1>
                                
                                <div className="meal-description">
                                    {snacks}
                                </div>
                            </div>

                        </div>
                        <Totals foodLog={this.state.foodLog} selectedDate={this.state.selectedDate}/>

                    </div>
                        
                </div>
            </div>
        
    }
}

function mapStateToProps(state){
    let {isAuthenticated} = state
    return{
        isAuthenticated
        
    }
}


export default connect(mapStateToProps)(DailyLog)
