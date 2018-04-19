import React from "react";
import { Component } from "react";
import Chart from '../charts/Charts';
import PhaseOne from '../Dashboard/stock-list/PhaseOne';
import Stocktable from '../Dashboard/stock-list/StockTable';
import PhaseTwo from '../Dashboard/stock-list/PhaseTwo';
import MockData from '../../mockData.json';
import _ from 'underscore';
import Userinfo from './Userinfo';
import Header from './Header';
import axios from 'axios';
import chartsData from "../../data";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { subscribeToMessanger} from '../../api';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 'no timestamp yet',
      data: MockData.stockData[0],
      chartsData: {
        data: {
          x: 'x',
          type: 'line',
          //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
          columns: chartsData[0]
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: '%Y-%m-%d'
            }
          }
        }
      },
      userStockData: MockData.userStockData[0],
      exchangedata: MockData.exchangeData[0],
      phase1: [],
      phase2: []
    };
    this.handleBuy = this.handleBuy.bind(this);
    this.handleCancelPhase1Order = this.handleCancelPhase1Order.bind(this);
    this.handleCancelPhase2Order = this.handleCancelPhase2Order.bind(this);
    this.stockPriceVary = this.stockPriceVary.bind(this);
    this.apiCall = this.apiCall.bind(this);
    this._setChartType = this._setChartType.bind(this);

    setInterval(function () {
      this.stockPriceVary();
    }.bind(this), 5000);
  }
  apiCall(message) {
    console.log('message', message);
/*     let params = {
      "templateId": "5acdd6228a73ee12e45042de",
      "tenantId": "5acb31265da45d0ed80132fe",
      "smsNotification": {
        "toNumber": "9850076141",
        "stockName": "MRF",
        "quantity": "5",
        "stockPrice": "394.99",
        "exchangeName": "BSE",
        "accountNumber": "E9XXX767",
        "transactionDate": "11-APR-2018"
      }
    } 
 */    axios.post(`api/notification/sms`, {

      "templateId": "5acf37452293324eac63aedb",
      "tenantId": "5acf35fa7774794cd9af3973",
      "smsNotification": {
        "toNumber": "9850076141",
        "stockName": "MRF",
        "quantity": "5",
        "stockPrice": "394.99",
        "exchangeName": "BSE",
        "accountNumber": "E9XXX767",
        "transactionDate": "11-APR-2018"
      }

    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  _setChartType(type) {
    let chartData = { ...this.state.chartsData };
    chartData.data.type = type;
    this.setState({ chartsData: chartData });
  }
  stockPriceVary() {
    let randNumber = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    let stockData = [...this.state.data];
    stockData = MockData.stockData[randNumber];
    this.setState({ data: stockData, exchangedata: MockData.exchangeData[randNumber]});
  }
  handleBuy(stock, quantity) {
    this.apiCall('Your order in process');
    let randNumber = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    let stockData1 = [...this.state.phase1], stockData2 = [...this.state.phase2], selectedStocks = { ...stock }, chartData = { ...this.state.chartsData };
    chartData.data.columns = chartsData[stock.id -1];
    selectedStocks.marketValue = stock.stockprize + Math.random();
    selectedStocks.holdingValue = selectedStocks.marketValue * quantity;
    selectedStocks.status = 'In Progress';
    stockData1.push(selectedStocks);


    setTimeout(function () {
      this.setState({ phase1: stockData1, userStockData: MockData.userStockData[randNumber], chartsData: chartData });
      this.apiCall('Your order in phase-1 process ');
    }.bind(this), 3000);

    setTimeout(function () {

      stockData1 = _.without(stockData1, selectedStocks);
      let selectedStocksPhase2 = { ...selectedStocks };
      selectedStocksPhase2.status = 'Order Placed';
      stockData2.push(selectedStocksPhase2);
      this.setState({ phase2: stockData2, phase1: stockData1 });
      this.apiCall('Your order in phase-2 process ');
    }.bind(this), 6000);
  }

  handleCancelPhase1Order(row) {
    let filtered = _(this.state.phase1).filter(function (item) {
      return item.name !== row.name
    });
    setTimeout(function () { this.setState({ phase1: filtered }); }.bind(this), 2000);
  }

  handleCancelPhase2Order(row) {
    let filtered = _(this.state.phase2).filter(function (item) {
      return item.name !== row.name
    });
    setTimeout(function () { this.setState({ phase2: filtered }); }.bind(this), 3000);
  }
  render() {

    return (
      <div className="col-md-12 demo-div heading-section">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Header exchange={this.state.exchangedata[0]} exchangeOldData={MockData.exchangeData[0][0]} />
        </div>
        <div className="margin-t-60">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          This is the timer value: {this.state.timestamp}
          <NotificationContainer />
            <Stocktable originalData={MockData.stockData[0]} data={this.state.data} handleBuy={this.handleBuy} />
            <div className="margin-b-20">
              <PhaseOne data={this.state.phase1} handleCancelPhase1Order={this.handleCancelPhase1Order} />
            </div>
            <div className="margin-b-60">
              <PhaseTwo data={this.state.phase2} handleCancelPhase2Order={this.handleCancelPhase2Order} />
            </div>
          </div>
        </div>
        <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div> <Userinfo userStockData={this.state.userStockData} userStockOldData={MockData.userStockData[0]} /> </div>
          <div><Chart chartsData={this.state.chartsData} _setChartType={this._setChartType} /></div>
        </div>



      </div>
    );
  }
}

export default Dashboard;