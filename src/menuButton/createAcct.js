import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios";
// import Menubuttons from './menuButtons.js';

export default class CreateAcct extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
      userName: '',
      password: '',
      password2: "",
      passwordType: "password",
      message: "placeholder",
      style: {
        color: "black"
      },
      createAcctCheck: false,
    };
    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.onUserChange = this.onUserChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onPassword2Change = this.onPassword2Change.bind(this);
    this.showPassword = this.showPassword.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleNested() {
    if (this.state.password === this.state.password2) {
      if (this.state.nestedModal === false) {
        axios.post('/createAcct', { userName: this.state.userName, password: this.state.password}).then((result) => {
            this.setState({
              style: {
                color: "black"
              },
              message: result.data.message,
              nestedModal: !this.state.nestedModal,
              closeAll: false,
              userData: {
                userName: '',
                password: ''
              }
            });
          })
        this.props.login(this.state.userName, this.state.password).then((result) => {
        })
      } else {
        this.setState({
          nestedModal: !this.state.nestedModal,
          closeAll: false,
          userName: '',
          password: '',
        });
      }
    } else {
      this.setState({
        message: "Passwords must match",
        style: {
          color: "red"
        },
        nestedModal: !this.state.nestedModal,
        closeAll: false,
        password: "",
        password2: ""
      })
    }
  }

  toggleAll() {
    if (this.state.message === "Passwords must match") {
      this.setState({
        nestedModal: !this.state.nestedModal,
        closeAll: false,
      });
    } else {
      this.setState({
        nestedModal: !this.state.nestedModal,
        closeAll: true,
      });
    }
  }

  onUserChange = (e) => {
    this.setState({
      userName: (e.target.value)
    });
  }

  onPasswordChange = (e) => {
    this.setState({
      password: (e.target.value)
    });
  }

  onPassword2Change = (e) => {
    this.setState({
      password2: (e.target.value)
    });
  }

  showPassword() {
    if (this.state.passwordType === "password" || this.state.passwordType === "password2") {
      this.setState({
        passwordType: "text",
      })
    } else {
      this.setState({
        passwordType: "password",
      })
    }
  }

  render() {
    return (
      <div >
        <Button id="createAcctBtn" onClick={this.toggle}>Create Account{this.props.buttonLabel}</Button>
        <Modal id="createAcctModal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Welcome!</ModalHeader>
          <ModalBody>
            <div id="inputCreateAccount">
              <b className="usernameText">Username:</b><br />
              <input id="usernameInput" type="text" name="username" placeholder="Username" value={this.state.userName} onChange={this.onUserChange} />
              <br />
              <br />
              <b>Password:</b>
              <br />
              <input type={this.state.passwordType} name="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} />
              <br />
              <input type={this.state.passwordType} name="password2" placeholder="Re-enter password" value={this.state.password2} onChange={this.onPassword2Change} />
              <br />
              <p><input type="checkbox" onClick={this.showPassword} /> Show password</p>
            </div>
            <Modal style={this.state.style} isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
              <ModalHeader>{this.state.message}</ModalHeader>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggleAll}>Ok</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggleNested}>Create Account</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}