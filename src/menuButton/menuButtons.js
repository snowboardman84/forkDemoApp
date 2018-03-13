import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './menuButtons.css';
import Login from './login';
import CreateAcct from './createAcct';
import axios from 'axios';

export default class Menubuttons extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.login = this.login.bind(this);
    this.state = {
      isOpen: false,
      test: "test"
    };
  }

  login() {
      return new Promise((resolve, reject)=>{
        axios.post('/login', { username: this.state.userName, password: this.state.password }).then((result) => {
          this.setState({
            loginMessage: result,
            nestedModal: !this.state.nestedModal,
            closeAll: false,
            userData: {
              userName: '',
              password: ''
            }
          });
        resolve(result.data.name);
    })
  })}

  toggle() {
    this.setState({
      isOpen: true
    });
  }

  render() {
    return (
      <div className='buttons'>
        <ButtonGroup>
          <CreateAcct login={this.login}/>
          <Login login={this.login}/>           
          <Button>Search</Button>
        </ButtonGroup>
      </div>
    );
  }
}
