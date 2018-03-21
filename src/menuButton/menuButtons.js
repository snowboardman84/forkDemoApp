import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './menuButtons.css';
import Login from './login';
import CreateAcct from './createAcct';
import Search from './search';
import axios from 'axios';

export default class Menubuttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      test: "test"
    };
    this.login = this.login.bind(this);
  }
  login(userName, password) {
    return new Promise((resolve, reject)=>{
      axios.post('/loginData', {userName , password}).then((result) => {
      resolve(result.data.message);
    })
  })
}

  render() {
    return (
      <div className='buttons'>
        <ButtonGroup>
          <CreateAcct login={this.login} />
          <Login login={this.login} />           
          <Search search={this.search} />
        </ButtonGroup>
      </div>
    );
  }
}

