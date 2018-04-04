import React from 'react';
import { Component } from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import Sell from '../Dashboard/Sell';
import Buy from '../Dashboard/Buy';


class InputModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
    this.handleModalState = this.handleModalState.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
    if (this.props.modalIsOpen !== nextProps.modalIsOpen) {
      this.handleModalState(nextProps);
    }
  }
  handleModalState(nextProps) {
    this.setState({ showModal: !this.state.showModal, compName: nextProps.compName, data: nextProps.data });
  }
  render() {
    const { open } = this.state;
    let data = this.state.compName === "Sell" ? 
    <Sell data={this.state.data} handleCloseModal={this.props.handleCloseModal}/>:    
    <Buy data={this.state.data} handleCloseModal={this.props.handleCloseModal}/>;
    return (
      <div>          
        <Modal
          open={this.state.showModal}
          onClose={this.props.handleCloseModal}             
          contentLabel="Modal">
          <div className="popupsetting">
         
          {data}
          </div>
        </Modal>
      </div>
    );
  }
}
export default InputModal;