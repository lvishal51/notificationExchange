import React from "react";
import { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
    this.getClass = this.getClass.bind(this);    
  }
  getClass(newValue, oldValue) {
    if (newValue > oldValue) {
      return "greencolorbold";
    } else if (newValue < oldValue) {
      return "redcolorbold";
    } else {
      return; 
    }
  }
  render() {
    return (
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <a className="navbar-brand">Share Market</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal">
                  NIFTY <span className={this.getClass(this.props.exchange.niftyprize, this.props.exchangeOldData.niftyprize)}>{this.props.exchange.niftyprize}<span className="percentgeval">({this.props.exchange.niftyChange}%)</span></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal">
                  SENSEX <span className={this.getClass(this.props.exchange.sensexprize, this.props.exchangeOldData.sensexprize)}>{this.props.exchange.sensexprize}<span className="percentgeval">({this.props.exchange.sensexChange}%)</span></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal">
                  USDINR <span className={this.getClass(this.props.exchange.usdinrprize, this.props.exchangeOldData.usdinrprize)}>{this.props.exchange.usdinrprize}<span className="percentgeval">({this.props.exchange.usdinrChange}%)</span></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal">
                  <i className="fa fa-fw fa-sign-out"></i>Logout</a>
              </li>

            </ul>
          </div>
        </nav>
      </div>

    );
  }
}

export default Header;
