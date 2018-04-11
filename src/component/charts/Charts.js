import React from "react";
import { Component } from "react";
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import chartsData from "../../data"

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : {
        x: 'x',
        type: 'line',
        //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
                columns: chartsData[0]
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
    }.bind(this), 5000);

  }
  stockPriceVary() {
    let randNumber =  Math.floor(Math.random() * (4 - 0 + 1)) + 0;
   // console.log('stockPriceVary');
    let data = {...this.state.data};
    data.columns = chartsData[randNumber];

/*     for (let i = 1; i < this.state.data.columns.length; i++) {
      for(let j =1; j< this.state.data.columns[i].length; j++) {
        if(j%2 == 0) {
          this.state.data.columns[i][j] = this.state.data.columns[i][j] + 3;
        } else {
          this.state.data.columns[i][j] = this.state.data.columns[i][j] - 3;          
        }
      }
    }
 */
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
        <h4>Chart Type</h4>
        <p>
          <button className="chartbutton" onClick={this._setBarChart}>bar</button> 
          <button className="chartbutton" onClick={this._setLineChart}>Line</button>
          <button className="chartbutton" onClick={this._setStepChart}>Step</button>
        </p>    
      </div>
    );
  }
}

export default Chart;