import c3 from 'c3';
import React, { Component } from 'react';
import './pie-chart.css';

class PieChart extends React.Component {

    componentDidMount() {

        console.log('component did mount');
        this.generatePieChart();
    }

    generatePieChart() {

        var chart = c3.generate({
            bindto: '#pie-chart',
            data: {
                // iris data from R
                columns: [
                    ['Tata Steel', 20000],
                    ['Reliance Comm', 45000],
                    ['Infosys', 34900],
                    ['IOCL', 120000],
                    ['United Spirits', 90000],
                    ['TCS', 65000],
                ],
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