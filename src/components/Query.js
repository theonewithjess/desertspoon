import React, {Component} from 'react'
import axios from 'axios'
import QueryResult from './QueryResult'

const APP_ID = `${process.env.REACT_APP_APP_ID}`
const APP_KEY = `${process.env.REACT_APP_APP_KEY}`

class DailyLog extends Component {
    constructor(){
        super()
        this.state = {
            query: '',
            queryResults: []
        }
    }

    handleInputChange = e => {
        this.setState({query: e.target.value})
    }

    query = () => {
        axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${this.state.query}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(res => {
            console.log(res)
            this.setState({queryResults: res.data.hints})
        })
    }

    keyPress = e => {
        if(e.keyCode === 13){
            this.query()
        }
    }

    render(){
        let queryResults = this.state.queryResults.map(e => {
            return(
                <QueryResult name={e.food.label} 
                    calories={e.food.nutrients.ENERC_KCAL}
                    id={e.food.foodId}
                    key={e.food.foodId}
                    measures={e.measures}
                    foodURI={e.food.uri}
                    />
            )
        })
        return(
            <div>
                <h1>Daily Food Log</h1>
                <input type="text" onChange={this.handleInputChange} onKeyDown={this.keyPress} placeholder="search food items" />
                <i className="fas fa-search" style={{color:"grey"}} onClick={this.query} ></i>
                {queryResults}
            </div>
        )
    }
}

export default DailyLog