import React from "react";
import { Component } from "react";
import Chart from '../charts/Charts';
//import Userinfo from '../Dashboard/Userinfo';
import PhaseOne from '../Dashboard/stock-list/PhaseOne';
import Stocktable from '../Dashboard/stock-list/StockTable';
import PhaseTwo from '../Dashboard/stock-list/PhaseTwo';
import Buy from '../Dashboard/Buy';
import Sell from '../Dashboard/Sell';
import MockData from '../../mockData.json';
import _ from 'underscore';
import Userinfo from './Userinfo';
import Header from './Header';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: MockData.stockData,
      phase1: [],
      phase2: []
    };
    this.handleBuy = this.handleBuy.bind(this);
    this.handleCancelPhase1Order = this.handleCancelPhase1Order.bind(this);
    this.handleCancelPhase2Order = this.handleCancelPhase2Order.bind(this);
    this.stockPriceVary = this.stockPriceVary.bind(this);

    setInterval(function () {
      this.stockPriceVary();
    }.bind(this), 1000);

    setInterval(function () {
      this.stockPriceVary2();
    }.bind(this), 3000);
  }
  stockPriceVary() {
    for (let i = 0; i < this.state.data.length; i++) {
      this.state.data[i].stockprize = this.state.data[i].stockprize + Math.random();
    }
    console.log("dataa1", this.state.data);
  }
  stockPriceVary2() {
    for (let i = 0; i < this.state.data.length; i++) {
      this.state.data[i].stockprize = this.state.data[i].stockprize - (Math.random() * 3);
    }
    console.log("dataa2", this.state.data);
  }
  handleBuy(stock, quantity) {
    let selectedStocks = { ...stock };
    selectedStocks.marketValue = stock.stockprize + Math.random();
    selectedStocks.holdingValue = selectedStocks.marketValue * quantity;
    selectedStocks.status = 'In Progress';
    this.state.phase1.push(selectedStocks);


    setTimeout(function () {
      this.setState({ phase1: this.state.phase1 });
    }.bind(this), 4000);

    setTimeout(function () {
      this.state.phase1.pop(selectedStocks);
      let selectedStocksPhase2 = { ...selectedStocks };
      selectedStocksPhase2.status = 'Order Placed';
      this.state.phase2.push(selectedStocksPhase2);
      this.setState({ phase2: this.state.phase2 });
    }.bind(this), 9000);
  }

  handleCancelPhase1Order(row) {
    let filtered = _(this.state.phase1).filter(function (item) {
      return item.name !== row.name
    });
    setTimeout(function () { this.setState({ phase1: filtered }); }.bind(this), 2000);
    console.log('row', row);
  }

  handleCancelPhase2Order(row) {
    let filtered = _(this.state.phase2).filter(function (item) {
      return item.name !== row.name
    });
    setTimeout(function () { this.setState({ phase2: filtered }); }.bind(this), 3000);
    console.log('row', row);
  }

  render() {

    return (
      <div className="col-md-12 demo-div heading-section">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Header />         
        </div>
        <div className="margin-t-60">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <Userinfo />
            <Stocktable data={this.state.data} handleBuy={this.handleBuy} />
          </div>
        </div>
        <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div>
            <Chart />
          </div>
          <div>
            <PhaseOne data={this.state.phase1} handleCancelPhase1Order={this.handleCancelPhase1Order} />
          </div>
          <div>
            <PhaseTwo data={this.state.phase2} handleCancelPhase2Order={this.handleCancelPhase2Order} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
