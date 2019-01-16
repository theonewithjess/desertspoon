import React, { Component } from 'react'
import {Pie, Line, Bar} from 'react-chartjs-2'

export default class Chart extends Component {
  constructor(props){
    super(props);
    this.state={
      chartData:{
        labels:['Calcium', 'Carbs','Cholesterol','Sugars','Fat','Trans Fat','Fiber'],
        datasets:[
          {
            label:'Nutritional Facts',
            data:[100,200,300,400,500,600,600,700], //values taken from API will be placed in here and put into the chart via props in the order displayed in labels above.
            backgroundColor:[
              'red',
              'teal',
              'yellow',
              'purple',
              'coral',
              'blue',
              'green',
              'pink'
              
            ]
          }
        ],
    }
    }
  }
  
  
    static defaultProps={
      displayTitle:true,
      displayLegend:true,
      legendPosition:'right'
    }
  render() {
    return (
    <div className="chart">
    <Pie
    data={this.state.chartData}
    width={100}
    height={20}
    options={{
      title:{
        display:this.props.displayTitle,
        text:'Nutritional Facts',
        fontSize:25
      },
      legend:{
        display:this.props.displayLegend,
        position:this.props.legendPosition
      }
    }}
    />
    </div>
    )
  }
}