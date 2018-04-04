import React from "react";
import { Component } from "react";
import Chart from '../charts/Charts';
import Mystock from '../Dashboard/stock-list/MyStock';
import Stocktable from '../Dashboard/stock-list/StockTable';
import UserInfo from '../Dashboard/UserInfo';
import Buy from '../Dashboard/Buy';
import Sell from '../Dashboard/Sell';
import MockData from '../../mockData.json';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedStocks:[],
      confirmStocks:[]
    };
  }
  componentDidMount = () => {

    /*     let URL = Constants.URL;
    var self = this;
    fetch(URL)
      .then(function (response) {
        let myData = response.json();
        return myData;
      })
      .then(function (json) {
        self.setState({ list: json });
      });
 */      
      this.setState({ data : MockData.stockData })
  };

  render() {

    return (
      <div className="col-md-12 demo-div heading-section">
        <div className="lft col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <Stocktable data={this.state.data}/>
        </div>
        <div className="lft col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <UserInfo data={this.state.data}/>
        </div>       
        <div className="lft col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <Mystock data={[]}/>
        </div>  
        
      </div>
    );
  }
}

export default Dashboard;
