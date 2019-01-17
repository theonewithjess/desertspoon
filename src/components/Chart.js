import React, { Component } from 'react'
import {Doughnut, Line, Bar} from 'react-chartjs-2'

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
    <Doughnut
    data={chartData}
    width={100}
    height={20}
    options={{
      legend:{
        display:this.props.displayLegend,
        position:this.props.legendPosition
      },
      tooltips:{
        callbacks: {
          label:function(tooltipItem, data){
            var dataset= data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array){
              return previousValue + currentValue
            });
            var currentValue = dataset.data[tooltipItem.index];
            var percentage = Math.floor(((currentValue/total)* 100)+0.5);
            return percentage + "%"
          }
        }
      }
    }}
    />
    </div>
    )
  }
}