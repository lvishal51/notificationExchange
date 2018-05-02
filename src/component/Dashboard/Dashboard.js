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
import backendApi from "../../constant/constant"
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.apiSendNotification = this.apiSendNotification.bind(this);
    this.apiPullNotification = this.apiPullNotification.bind(this);
    this._setChartType = this._setChartType.bind(this);

    setInterval(function () {
      this.stockPriceVary();
    }.bind(this), 5000);
  }
  
  apiPullNotification() {
    let apiData = {...backendApi.pullNotification};
    axios({
      url: 'api/notification',
      method: 'get',
      headers: apiData.headers
   })
    .then(res => {
      NotificationManager.info("Stock Market Information",res.data[0].message);
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });    
  }
  
  apiSendNotification(stock, quantity) {
    let apiData = {...backendApi.sendNotification};
    console.log('apiSendNotification',apiData);
    apiData.sendNotification.smsNotification.body.stockName = stock.name;
    apiData.sendNotification.smsNotification.body.quantity = stock.quantity;
    apiData.sendNotification.smsNotification.body.stockPrice = stock.stockprize;
    
    apiData.sendNotification.emailNotification.body.stockName = stock.name;
    apiData.sendNotification.emailNotification.body.quantity = stock.quantity;
    apiData.sendNotification.emailNotification.body.stockPrice = stock.stockprize;
    
    apiData.sendNotification.webTemplate.message = "Your order for "+stock.name+"with total quantity"+stock.quantity+ "total amount"+stock.stockprize;
    console.log('stock', stock);
     axios.post(`api/notification/send`, {
        sendNotification: apiData.sendNotification
	    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  _setChartType(type) {
    let chartData = { ...this.state.chartsData };
    chartData.data.type = type;
    this.setState({ chartsData: chartData });
  }
  //stockPriceVary() : Change data after some time interval and call pullNotification api
  stockPriceVary() {
    let randNumber = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    let stockData = [...this.state.data];
    this.apiPullNotification(); //Pull notifications from server
    stockData = MockData.stockData[randNumber];
    this.setState({ data: stockData, exchangedata: MockData.exchangeData[randNumber]});
  }
  handleBuy(stock, quantity) {
    this.apiSendNotification(stock, quantity);
    let randNumber = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    let stockData1 = [...this.state.phase1], stockData2 = [...this.state.phase2], selectedStocks = { ...stock }, chartData = { ...this.state.chartsData };
    chartData.data.columns = chartsData[stock.id -1];
    selectedStocks.marketValue = stock.stockprize + Math.random();
    selectedStocks.holdingValue = selectedStocks.marketValue * quantity;
    selectedStocks.status = 'In Progress';
    stockData1.push(selectedStocks);


    setTimeout(function () {
      this.setState({ phase1: stockData1, userStockData: MockData.userStockData[randNumber], chartsData: chartData });
    }.bind(this), 3000);

    setTimeout(function () {

      stockData1 = _.without(stockData1, selectedStocks);
      let selectedStocksPhase2 = { ...selectedStocks };
      selectedStocksPhase2.status = 'Order Placed';
      stockData2.push(selectedStocksPhase2);
      this.setState({ phase2: stockData2, phase1: stockData1 });
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