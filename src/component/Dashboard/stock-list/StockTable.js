import React from "react";
import { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import InputModal from '../../modal/InputModal';
import _ from 'underscore';


class Stocktable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldStockData : this.props.originalData,
      isOpenModal: false,
      selectedCandidate: {}
    };
    this.cellButtonForBuy = this.cellButtonForBuy.bind(this);
    this.cellButtonForSell = this.cellButtonForSell.bind(this);
    this.columnClassNameFormat = this.columnClassNameFormat.bind(this);
     this.cellButtonForBuy = this.cellButtonForBuy.bind(this);
  }
  cellButtonForBuy(cell, row) {
    return <button className="buysellbtn bluecolor" onClick={() => this.handleopenModal(row, 'Buy')}>B</button>;
  }
  cellButtonForSell(cell, row) {
    return <button className="buysellbtn orangecolor" onClick={() => this.handleopenModal(row, 'Sell')}>S</button>;
  }
  handleopenModal(row, buttonName) {
    this.setState({ isOpenModal: true, selectedCandidate: row, compName: buttonName });
  }
  handleCloseModal() {
    this.setState({ isOpenModal: false, selectedCandidate: {}, compName: null });
  }
  columnClassNameFormat(fieldValue, row, rowIdx, colIdx) {
    //this.getClass(row);
    let oldData = _.find(this.state.oldStockData, function(item) {
      return item.id === row.id; 
    });   
    if (row.stockprize > oldData.stockprize) {
      return "greencolor greentablearrow";
    } else if (row.stockprize <= oldData.stockprize) {
      return "redcolor redtablearrow";
    } else {
      return; 
    }
  }
  render() {

    return (
      <div>
        <h3>Stock Market List</h3>
        <BootstrapTable data={this.props.data} trClassName='tr-table' striped={true} hover={true} search searchPlaceholder="Search" version='4' pagination={true} options={ {sizePerPageList: [{text: '5', value: 5}], sizePerPage : 5} }>
          <TableHeaderColumn isKey tdClassName={"redcolor"} dataField='id'>ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
          <TableHeaderColumn dataField='stockprize' columnClassName={ this.columnClassNameFormat }>Price </TableHeaderColumn>
          <TableHeaderColumn dataField='' dataAlign="center" dataFormat={this.cellButtonForBuy}>Buy</TableHeaderColumn>
          <TableHeaderColumn dataField='' dataAlign="center" dataFormat={this.cellButtonForSell}>Sell</TableHeaderColumn>
        </BootstrapTable>

        <InputModal modalIsOpen={this.state.isOpenModal} compName={this.state.compName}
          data={this.state.selectedCandidate} handleBuy={this.props.handleBuy} handleCloseModal={this.handleCloseModal.bind(this)}
        />
      </div>
    );
  }
}

export default Stocktable;
