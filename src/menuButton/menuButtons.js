import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './menuButtons.css';


export default class Menubuttons extends React.Component {
  render() {
    return (
      <div className='buttons'>
        <ButtonGroup>
          <Button>Create Account</Button>{' '}
          <Button>Login</Button>{' '}
          <Button>Search</Button>
        </ButtonGroup>
      </div>
    );
  }
}