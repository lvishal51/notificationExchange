import React from "react";
import { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class Userinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
    this.cellButtonForCancel = this.cellButtonForCancel.bind(this);    
  }
  cellButtonForCancel(cell, row) {
    return <button className="buysellbtn orangecolor">C</button>;
  }

  render() {

    return (
      <div>     
        <BootstrapTable data={this.props.data} striped={true}hover={true} version='4'>
        <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
        <TableHeaderColumn dataField='stockprize'>Price</TableHeaderColumn>
        <TableHeaderColumn dataField='' dataFormat={this.cellButtonForCancel}>Cancel</TableHeaderColumn>
      </BootstrapTable>
    </div>
    );
  }
}

export default Userinfo;
