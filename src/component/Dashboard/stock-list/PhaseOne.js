import React from "react";
import { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class PhaseOne extends Component {
  constructor(props) {
    super(props);
    this.cellButtonForCancel = this.cellButtonForCancel.bind(this);    
    console.log('PhaseOne-props',this.props);
  };

  cellButtonForCancel(cell, row) {
    return <button className="buysellbtn orangecolor" onClick={() => this.props.handleCancelPhase1Order(row)}>C</button>;
  }

  render() {

    return (
      <div>
        <h3>Order in First Phase</h3>     
        <BootstrapTable data={this.props.data} striped={true}hover={true} version='4'>
        <TableHeaderColumn isKey dataField='name'>Name</TableHeaderColumn>
        <TableHeaderColumn dataField='stockprize'>Invesment Price</TableHeaderColumn>
        <TableHeaderColumn dataField='marketValue'>Market Value</TableHeaderColumn>
        <TableHeaderColumn dataField='holdingValue'>Holding Value</TableHeaderColumn>
        <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
        <TableHeaderColumn dataField='' dataFormat={this.cellButtonForCancel}>Cancel</TableHeaderColumn>
      </BootstrapTable>
    </div>
    );
  }
}

export default PhaseOne;
