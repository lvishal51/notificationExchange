import React from "react";
import { Component } from "react";
import C3Chart from 'react-c3js';
import 'c3/c3.css';

class Chart extends Component {
  render() {
    return (
      <div className="charts">
        <div className="chartc3">
          <C3Chart axis={this.props.chartsData.axis} data={this.props.chartsData.data} />
        </div>
        <h4>Chart Type</h4>
        <div className="chartype">
          <button className="chartbutton" onClick={() => this.props._setChartType('bar')}>bar</button>
          <button className="chartbutton" onClick={() => this.props._setChartType('line')}>Line</button>
          <button className="chartbutton" onClick={() => this.props._setChartType('step')}>Step</button>
        </div>
      </div>
    );
  }
}

export default Chart;