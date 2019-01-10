import React, { Component } from 'react'

export default class NutrientDetails extends Component {
    constructor(props){
        super()
    }
    render() {
    return (
      <div>
        <input type="number" defaultValue={this.props.quantity}/>
        <p>drop-down menu for measurement</p>
        <p>drop-down menu for meal type</p>
        <i className="fas fa-plus-circle" style={{color:"grey"}}></i>

        <div>
        <i className="fas fa-minus-circle" style={{color:"grey"}}></i>
        </div>
      </div>
    )
  }
}
