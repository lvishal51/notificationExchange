import React from "react";
import { Component } from "react";
import C3Chart from 'react-c3js';
import 'c3/c3.css';
  
//import PieChart from "./PieChart/PieChart";
//import LineChart from "./LineChart/LineChart";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : {
        x: 'x',
        type: 'line',
        //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
                columns: [
                    ['x', '2018-01-01', '2018-01-02', '2018-01-03', '2018-01-04', '2018-01-05', '2018-01-06', '2018-01-07', '2018-01-08', '2018-01-09', '2018-01-10', '2018-01-11', '2018-01-12'],
        //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                    ['Maruti', 30, 200, 100, 400, 150, 250,30, 200, 100, 400, 150, 250],
                    ['HDFCLIFE', 130, 340, 200, 500, 250, 350, 130, 340, 200, 500, 250, 350],
                    ['hudco', 400, 500, 450, 700, 600, 500, 400, 500, 450, 700, 600, 500]
                ]
      },
      axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
            }
        }
    }
    };
    this._setBarChart = this._setBarChart.bind(this);    
    this._setLineChart = this._setLineChart.bind(this);    
    this._setStepChart = this._setStepChart.bind(this);
    setInterval(function () {
      this.stockPriceVary();
    }.bind(this), 1000);

  }
  stockPriceVary() {
   // console.log('stockPriceVary');
    let data = {...this.state.data};
    for (let i = 1; i < this.state.data.columns.length; i++) {
      for(let j =1; j< this.state.data.columns[i].length; j++) {
        if(j%2 == 0) {
          this.state.data.columns[i][j] = this.state.data.columns[i][j] + 3;
        } else {
          this.state.data.columns[i][j] = this.state.data.columns[i][j] - 3;          
        }
      }
    }
    this.setState({data: data}); 
  }


  _setBarChart() {
    let dataType = {...this.state.data};
    dataType.type = 'bar';
    this.setState({ data:  dataType});
  }
  _setLineChart() {
    let dataType = {...this.state.data};
    dataType.type = 'line';
    this.setState({ data:  dataType});
  }
  _setStepChart() {
    let dataType = {...this.state.data};
    dataType.type = 'step';
    this.setState({ data:  dataType});
  }
  
  render() {
    return (
      <div className="charts"> 
        <C3Chart axis={this.state.axis} data={this.state.data} />
        <p>
          <h4>Chart Type</h4>
          <button className="chartbutton" onClick={this._setBarChart}>bar</button> 
          <button className="chartbutton" onClick={this._setLineChart}>Line</button>
          <button className="chartbutton" onClick={this._setStepChart}>Step</button>
        </p>    

{/*          <PieChart/>
         <LineChart/>
 */}      </div>
    );
  }
}

export default Chart;