import React from "react";
import { Component } from "react";
import PieChart from "./PieChart/PieChart";
import LineChart from "./LineChart/LineChart";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  render() {
    return (
      <div>
         <PieChart/>
         <LineChart/>
      </div>
    );
  }
}

export default Chart;
