import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Menubuttons from './menuButtons';
import axios from "axios";


export default class Logout extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
  }


  logout() {
    // Clear user token and profile data from localStorage
    // axios.delete('/logoutData').then((result) => {
      localStorage.removeItem('token');
      this.refreshPage();

    // })
  }

refreshPage(){ 
    window.location.reload(); 
}

  render() {
    return (
      <div>
        {this.logout()}
      </div>
    );
  }
}