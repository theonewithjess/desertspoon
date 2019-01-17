import React, { Component } from 'react'
import {Pie, Line, Bar} from 'react-chartjs-2'

export default class Chart extends Component {
  constructor(props){
    super(props);
    
  }
  
  
    static defaultProps={
      displayTitle:true,
      displayLegend:true,
      legendPosition:'right'
    }

  render() {
    let { protein, carbohydrates, fat } = this.props

    let chartData = {
      labels:['Protein', 'Carbohydrates','Fat'],
      datasets:[
        {
          label:'Nutritional Facts',
          data:[protein, carbohydrates, fat], //values taken from API will be placed in here and put into the chart via props in the order displayed in labels above.
          backgroundColor:[
          'red',
          'teal',
          'yellow',
          ]
        }
      ],
    }
    
    return (
    <div className="chart">
    <Pie
    data={chartData}
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