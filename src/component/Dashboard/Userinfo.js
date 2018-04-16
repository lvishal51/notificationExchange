import React from "react";
import { Component } from "react";

class Userinfo extends Component {
  constructor(props) {
    super(props);
    this.getClass = this.getClass.bind(this);
  }
  getClass(newValue, oldValue) {
    if (newValue > oldValue) {
      return "greencolor greenarrow";
    } else if (newValue < oldValue) {
      return "redcolor redarrow";
    } else {
      return; 
    }
  }
  render() {
    return (
      <div className="userinfo">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="nickname">Hi User</div>
          <div className="bottomborder"> </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">        
            <div className="equity col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>Market Value</p>
              <div>
                <div className="equity-left-panel col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>{this.props.userStockData.marketValue}k</p>
                  <h3>Available Balance</h3>
                </div>
                <div className="equity-right-panel col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>Margin Used <span>{this.props.userStockData.marketMarginUsed}k</span></p>
                  <p>Account Value <span>{this.props.userStockData.marketAccountValue}k</span></p>
                </div>
              </div>
            </div>
            <div className="equity col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>Holding Value</p>
              <div>
                <div className="equity-left-panel col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>{this.props.userStockData.holdingValue}k</p>
                  <h3>Available Balance</h3>
                </div>
                <div className="equity-right-panel col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>Margin Used <span>{this.props.userStockData.holdingMarginUsed}k</span></p>
                  <p>Account Value <span>{this.props.userStockData.holdingAccountValue}k</span></p>
                </div>
              </div>
            </div>
            <div className="bottomborder"> </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">        
            <div className="equity col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>TODAY'S P/L</p>
              <div>
                <div className="equity-left-panel col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p className={this.getClass(this.props.userStockData.marketValue, this.props.userStockOldData.marketValue)}>{this.props.userStockData.todaysPl}k<span className="percentgeval">({this.props.userStockData.todaysPlChange}%)</span></p>
                  <h3>Available Balance</h3>
                </div>
                <div className="equity-right-panel col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>Margin Used <span>{this.props.userStockData.todaysPlMarginUsed}k</span></p>
                  <p>Account Value <span>{this.props.userStockData.todaysPlAccountValue}k</span></p>
                </div>
              </div>
            </div>
            <div className="equity col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>Unrealised P/L</p>
              <div>
                <div className="equity-left-panel col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p className={this.getClass(this.props.userStockData.marketValue, this.props.userStockOldData.marketValue)}>{this.props.userStockData.unrealisedPl}k<span className="percentgeval">({this.props.userStockData.unrealisedPlChange}%)</span></p>
                  <h3>Available Balance</h3>
                </div>
                <div className="equity-right-panel col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>Margin Used <span>{this.props.userStockData.unrealisedPlMarginUsed}k</span></p>
                  <p>Account Value <span>{this.props.userStockData.unrealisedPlAccountValue}k</span></p>
                </div>
              </div>
            </div>
            <div className="bottomborder"> </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h4>Market Overview</h4>
          <div className="bottomborder"> </div>
        </div>
      </div>

    );
  }
}

export default Userinfo;
