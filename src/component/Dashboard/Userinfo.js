import React from "react";
import { Component } from "react";

class Userinfo extends Component {
  constructor(props) {
    super(props);
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
              <p>Equity</p>
              <div>
                <div className="equity-left-panel col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>61k</p>
                  <h3>Available Balance</h3>
                </div>
                <div className="equity-right-panel col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>Margin Used <span>-32.12k</span></p>
                  <p>Account Value <span>12.54k</span></p>
                </div>
              </div>
            </div>
            <div className="equity col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <p>Holdings</p>
              <div>
                <div className="equity-left-panel col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>61k</p>
                  <h3>Available Balance</h3>
                </div>
                <div className="equity-right-panel col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <p>Margin Used <span>-32.12k</span></p>
                  <p>Account Value <span>12.54k</span></p>
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
