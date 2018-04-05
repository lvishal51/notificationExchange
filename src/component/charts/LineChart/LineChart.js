import c3 from 'c3';
import React, { Component } from 'react';
import '../PieChart/pie-chart.css';
import MockData from '../../../mockData.json';
class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: MockData.lineChartData
        };
        this.stockPriceVary = this.stockPriceVary.bind(this); 
    
        setInterval(function() {
            this.stockPriceVary();
        }.bind(this), 3000);         
    }
    stockPriceVary () {
        for(let i=0;i<this.state.data.json.length;i++) {
            for(let j=0;j<this.state.data.json[i].length;j++) {
                this.state.data.json[i][j] = this.state.data[i][1] + Math.random();            
            }
        } 
        this.setState({data:this.state.data}); 
        this.generateLineChart();
    }
    
    componentDidMount() {

        this.generateLineChart();
    }

    generateLineChart() {

        var lineChart = c3.generate({
            bindto: '#line-chart',
            data: this.state.data,
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