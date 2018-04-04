import c3 from 'c3';
import React, { Component } from 'react';
import '../PieChart/pie-chart.css';
import MockData from '../../../mockData.json';
class LineChart extends React.Component {

    componentDidMount() {

        this.generateLineChart();
    }

    generateLineChart() {

        var lineChart = c3.generate({
            bindto: '#line-chart',
            data: MockData.lineChartData,
            axis: {
                x: {
                  type: 'timeseries',
                  tick: {
                    format: function(x) {
            
                        return x.toLocaleDateString();
                      
                    }
                  }
                }
              }
        });
    }

    render() {

        return (<div className="pie-summary">
                    <h3 className='chart-title'>My Stocks Price vs Date</h3>
                    <div id="line-chart"></div>
                </div>) 
        
        
    }
}

export default LineChart;