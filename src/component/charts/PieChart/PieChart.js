import c3 from 'c3';
import React, { Component } from 'react';
import './pie-chart.css';

class PieChart extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        data: [
            ['Tata Steel', 20],
            ['Reliance Comm', 45],
            ['Infosys', 34],
            ['IOCL', 12],
            ['United Spirits', 90],
            ['TCS', 65],
        ]
    };
    this.stockPriceVary = this.stockPriceVary.bind(this); 

    setInterval(function() {
        this.stockPriceVary();
    }.bind(this), 3000);         
}
    
    componentDidMount() {

        console.log('component did mount');
        this.generatePieChart();
    }

    stockPriceVary () {
        for(let i=0;i<this.state.data.length;i++) {
            this.state.data[i][1] = this.state.data[i][1] + Math.random();
        } 
        this.setState({data:this.state.data}); 
        this.generatePieChart();
    }
    
    generatePieChart() {

        var chart = c3.generate({
            bindto: '#pie-chart',
            data: {
                // iris data from R
                columns: this.state.data,
                type : 'pie',
                onclick: function (d, i) { 
                    //console.log("onclick", d, i); 
                },
                onmouseover: function (d, i) { 
                    //console.log("onmouseover", d, i); 
                },
                onmouseout: function (d, i) { 
                    //console.log("onmouseout", d, i); 
                }
            }
        });
    }

    render() {

        return (<div className="pie-summary">
                    <h3 className='chart-title'>My Stocks Summary</h3>
                    <div  id="pie-chart"></div>
                </div>) 
        
        
    }
}

export default PieChart;