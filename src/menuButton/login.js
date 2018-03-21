import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import Menubuttons from './menuButtons';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
      userName: '',
      password: '',
      loginMessage: '',
      loginCheck: false,
      passwordType: "password"
    };
    this.toggle = this.toggle.bind(this);
    this.login = this.login.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.onUserChange = this.onUserChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.showPassword = this.showPassword.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  login() {
    this.props.login(this.state.userName, this.state.password).then((result) => {
      this.setState({
        loginMessage: result,
        nestedModal: !this.state.nestedModal,
        closeAll: true,
      });
    })
  }

  toggleAll() {
    if(this.state.loginMessage === "Login successful"){
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  } else {
    this.setState({
      nestedModal: !this.state.nestedModal,
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

  showPassword() {
    if (this.state.passwordType === "password") {
      this.setState({
        passwordType: "text"
      })
    } else {
      this.setState({
        passwordType: "password"
      })
    }
  }

  render() {
    return (
      <div>
        {/* <Button id="loginBtn" onClick={this.toggle}>Log In{this.props.buttonLabel}
        </Button>
        <Modal id="loginModal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Welcome!</ModalHeader>
          <ModalBody> */}
            <div id="inputFieldsLogin">
              <b className="usernameText">Username:</b><br />
              <input type="text" name="username" placeholder="Username" value={this.state.userName} onChange={this.onUserChange} />
              <br />
              <br />
              <b>Password:</b>
              <br />
              <input type={this.state.passwordType} name="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} />
              <br />
              <p><input type="checkbox" onClick={this.showPassword} /> Show password</p>            
              <Button color="secondary" onClick={this.login}>Log In</Button>
            </div>
            {/* <Modal isOpen={this.state.nestedModal} toggle={this.loginToggle} onClosed={this.state.closeAll ? this.toggle : undefined}>
              <ModalHeader>{this.state.loginMessage}</ModalHeader>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggleAll}>Ok</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            
          </ModalFooter>
        </Modal> */}
      </div>
    );
  }
}