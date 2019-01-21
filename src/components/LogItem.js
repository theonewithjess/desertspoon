import React, { Component } from 'react'
import Axios from 'axios';

export default class LogItem extends Component {
    constructor(){
        super()
        this.state = {
            quantity: 0,
            measure: "",
            measureuri: "",
            name: "",
            fooduri: "",
            calories: 0,
            protein: 0,
            carbohydrates: 0,
            fat: 0
        }
    }
    componentDidMount() {
        let {quantity, measure, measureuri, name, fooduri, calories, protein, carbohydrates, fat} = this.props
        this.setState({
            quantity,
            measure,
            measureuri,
            name,
            fooduri,
            calories,
            protein,
            carbohydrates,
            fat
        })
    }

    deleteLogItem = () => {
        Axios.delete(`/api/foodlog/${this.props.entry_id}`).then(res => {
            this.props.getLog()
        })
    }

    render() {
        let {quantity, measure, name, calories, protein, carbohydrates, fat} = this.state
        return (
            <div className="log-food">
                    <i className="fas  "  onClick={this.deleteLogItem}></i>
                <div className="log-foods">
                        <div>
                            <h1 id="log-foods">{quantity} {measure} {name}</h1>

                        </div>
                        <div className="log-nutrients">
                            <p>calories: {calories}</p>
                            <p>protein: {protein}g</p>
                            <p>carbohydrates: {carbohydrates}g</p>
                            <p>fat: {fat}g</p>
                        </div>

                </div>
                

                
                
                
            </div>
        )
    }
}
