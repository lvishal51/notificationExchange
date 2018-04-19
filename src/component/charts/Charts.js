import React from "react";
import { Component } from "react";
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import c3 from 'c3';

class Chart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this._updateChart();
  }
  componentDidUpdate() {
    this._updateChart();
  }
  _updateChart() {
    const chart = c3.generate({
      bindto: '#chart',
      data:this.props.chartsData.data,
      axis :this.props.chartsData.axis
    });
  }
  render() {
    return (
      
      <div className="charts">
        <div className="chartc3">
          <div id="chart"/>
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