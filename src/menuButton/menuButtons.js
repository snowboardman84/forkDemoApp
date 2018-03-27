import React from 'react';
import './menuButtons.css';
import Login from './login';
import Logout from './logout';
import CreateAcct from './createAcct';
import Search from './search';
import axios from 'axios';
import RecipeInputModal from '../recipeInputModal/recipeInputModal';
import RecipeListModal from '../recipeListModal/recipeListModal';
import Profile from '../profile.js';
import { Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ForkMenuButton from "./ForkMenuButton";
import ForkModal from '../forkModal/forkModal'
import ModalNotification from "./modalNotification";
import ProcessInput from '../processInput/processInput';

export default class Menubuttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      isForkModalOpen: false,
      test: "test",
      selectedButtonLabel: " ",
      notificationMessage: " ",
      notificationColor: 'success',
      isNotificationOpen: false,
    };

    this.loginButtonLabels = [
      "Create Account",
      "Login",
    ]

    this.menuButtonLabels = [
      "My Forks",
      "Add New Recipe",
      "View Recipe",
      "Search",
      "Logout"
    ]

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.mapLabelToComponent = this.mapLabelToComponent.bind(this);
    this.login = this.login.bind(this);
    this.setNote = this.setNote.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
    this.openForkModal = this.openForkModal.bind(this);
    this.closeForkModal = this.closeForkModal.bind(this);

  }

  setNote(message, color, isOpen) {
    this.setState({
      notificationMessage: message,
      notificationColor: color,
      isNotificationOpen: isOpen,
    })
  }

  closeAlert() {
    this.setState({
      isNotificationOpen: false
    })
  }

  login(userName, password) {
    return new Promise((resolve, reject) => {
      axios.post('/loginData', { userName, password }).then((result) => {
        resolve(result.data.message);
        localStorage.setItem('token', result.data.myToken);
        if (result.data.myToken) {
          this.props.loggedIn();
        }
      })
    })
  }


  mapLabelToComponent(label) {
    switch (label) {
      case "Create Account":
        return <CreateAcct closeModal={this.closeModal} login={this.login} setNote={this.setNote} />
      case "Login":
        return <Login closeModal={this.closeModal} login={this.login} setNote={this.setNote} />
      case "Add New Recipe":
        return <RecipeInputModal closeModal={this.closeModal} setNote={this.setNote} />
      case "View Recipes":
        return <RecipeListModal closeModal={this.closeModal} setNote={this.setNote} openForkModal={this.openForkModal} />
      case "Search":
        return <Search closeModal={this.closeModal} setNote={this.setNote} />
      case "My Forks":
        return <ForkModal closeModal={this.closeModal} setNote={this.setNote} />
      case "Logout":
        return <Logout closeModal={this.closeModal} logout={this.logout} setNote={this.setNote} />
    }
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    })
  }

  closeForkModal() {
    this.setState({
      isForkModalOpen: false
    })
  }

  openModal(label) {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      selectedButtonLabel: label
    })
  }

  openForkModal() {
    this.setState({
      isForkModalOpen: !this.state.isForkModalOpen,

    })
  }

  render() {

    let component = this.mapLabelToComponent(this.state.selectedButtonLabel);

    if (this.props.isLoggedIn) {
      var menuButtons = this.menuButtonLabels.map((l) => {
        return (
          <ForkMenuButton buttonLabel={l} openModal={this.openModal} />
        )
      })
    } else {
      var menuButtons = this.loginButtonLabels.map((l) => {
        return (
          <ForkMenuButton buttonLabel={l} openModal={this.openModal} />
        )
      })
    }

    return (
      <div>
        <ModalNotification notificationColor={this.state.notificationColor} notificationMessage={this.state.notificationMessage} isNotificationOpen={this.state.isNotificationOpen} closeAlert={this.closeAlert} />
        <div className='buttons'>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{this.state.selectedButtonLabel}
              <Button className="closeButton" color="caution" onClick={this.closeModal}>Close</Button>
            </ModalHeader>
            <ModalBody>
              {component}
            </ModalBody>
          </Modal>
          <ButtonGroup>
            {menuButtons}
          </ButtonGroup>
        </div>
        <Modal isOpen={this.state.isForkModalOpen}>
          <ModalHeader>{this.state.ForkModalTitle}
            <Button className="closeButton" color="caution" onClick={this.closeForkModal}>Close</Button>
          </ModalHeader>
        </Modal>
      </div>
    );
  }
}

