import React from "react";
import { Component } from "react";

class Sell extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="sell">
          <div className="col-lg-12 defaultAlign">
            <div className="orangebox">Sell {this.props.data.name}<p className="defaultAlign">{this.props.data.stockprize}</p></div>
            <div className="row form_group">
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <label className="input-label">QTY</label>
                <input className="form-control" type="number" name="quantity" placeholder="" required />
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <label className="input-label">PRICE</label>
                <input className="form-control" type="number" name="quantity" placeholder={this.props.data.stockprize} required />
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <label className="input-label">TRIGGER PRICE</label>
                <input className="form-control" type="number" name="quantity" placeholder="" required />
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <label className="input-label">DISCLOSED QTY</label>
                <input className="form-control" type="number" name="quantity" placeholder="" required />
              </div>
            </div>
            <div className="row form_group">
              <div className="col-sm-7">
                <span>
                  <button type="submit" className="btn btn-primary primarybtn orangebtn">SELL</button>
                </span>
                <span className="margin-l-5">
                  <button className="btn btn-primary primarybtn orangebtn">CANCEL</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sell;
{/* <div className=""></div> */ }
