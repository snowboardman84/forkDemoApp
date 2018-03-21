import React from 'react';
import './menuButtons.css';
import Login from './login';
import CreateAcct from './createAcct';
import Search from './search';
import axios from 'axios';
import RecipeInputModal from '../recipeInputModal/recipeInputModal';
import RecipeListModal from '../recipeListModal/recipeListModal';
import Profile from '../profile.js'
import { Button,ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ForkMenuButton from "./ForkMenuButton";

export default class Menubuttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      test: "test",
      selectedButtonLabel: ""
    };

    this.menuButtonLabels = [
      "Create Account",
      "Login",
      "Add New Recipe",
      "View Recipe",
      "Search"
    ]

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this)
    this.mapLabelToButton = this.mapLabelToButton.bind(this);
    this.login = this.login.bind(this);
  }

  login(userName, password) {
    return new Promise((resolve, reject)=>{
      axios.post('/loginData', {userName , password}).then((result) => {

      resolve(result.data.message);
      this.setState({
        isModalOpen:false
        // to make notifications work, it's probably something like so:
        // notificationMessage:result.data.message
      })
      localStorage.setItem('token', result.data.myToken);
    })
  })
}

  mapLabelToButton(label){
    switch(label){
      case "Create Account":
        return <CreateAcct login={this.login}/>
      case "Login":
        return <Login login={this.login}/>
      case "Add New Recipe":
        return <RecipeInputModal />
      case "View Recipe":
        return <RecipeListModal />
      case "Search":
        return <Search />
    }
  }

  closeModal(){
    this.setState({
      isModalOpen:false
    })
  }

  openModal(label){
    this.setState({
      isModalOpen:!this.state.isModalOpen,
      selectedButtonLabel: label
    })
  }

  render() {

    let component = this.mapLabelToButton(this.state.selectedButtonLabel);
    let menuButtons = this.menuButtonLabels.map((l)=>{
      return (
        <ForkMenuButton buttonLabel={l} openModal={this.openModal}/>
      )
    });

    return (
      <div className='buttons'>
         <Modal isOpen={this.state.isModalOpen} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.state.selectedButtonLabel}<Button color="secondary" onClick={this.closeModal}>Close</Button>
</ModalHeader>
          <ModalBody>
            {component}
          </ModalBody> 
        </Modal>

        <ButtonGroup>
          {menuButtons}
        < Profile classname="Profile"/>
        </ButtonGroup>
       
      </div>
    );
  }
}

