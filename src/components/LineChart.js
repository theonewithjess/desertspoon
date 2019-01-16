import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2'

export default class LineChart extends Component {
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:['Day 1','Day 2','Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
                datasets:[
                    {
                        label: "Weekly Chalorie Intake",
                        data:[ 100,200,300,400,500,600,700],
                        backgroundColor:[
                            'red',
                            'teal',
                            'yellow',
                            'purple',
                            'coral',
                            'blue',
                            'green',
                        ]
                    }
                ]
            }
        }
    }
    static defaultProps={
        displayTitle:true,
        displayLegend:false,
        legendPosition:'right'
      }
  render() {
    return (
      <div className="linechart">
        <Bar
        data={this.state.chartData}
        width={100}
        height={20}
        options={{
            title:{
                display:this.props.displayTitle,
                text:'Weekly Chalorie Intake',
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
