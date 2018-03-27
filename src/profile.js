import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import fork from './fork.png';
import './profile.css';




export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: '',
      recipes: [],
    };
   

    this.toggle = this.toggle.bind(this);

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }



  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggle}>{this.props.buttonLabel}Your Profile </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}> Your Profile on Fork!</ModalHeader>
          <ModalBody>
            Welcome, {this.data.username} ,
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

