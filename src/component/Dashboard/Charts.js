import React from "react";
import { Component } from "react";

class Charts extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      //   this.props.GetChartData 
      GetChartData : GetChartData
    };
    let GetChartData = (this.props.GetChartData ==  undefined) ? {} : this.props.GetChartData ;
  }

  render() {
    console.log("5", this.state.GetChartData);
    return (
      <div className="chart">
        chartsss
        <p>hii {this.props.GetChartData.name}</p>
      </div>
    );
  }
}

export default Charts;

