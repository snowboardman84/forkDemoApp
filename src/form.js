import React , { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import logo from './logo.svg';
import './form.css';
import forkHeader from './forkheader.png';

class Formy extends Component {
    render() {
// const Form = (props) => {
    return (
    <div className="profileForm">
        <img src={forkHeader} className="header" alt="Fork!" />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Username</InputGroupAddon>
        <Input placeholder="usernamegoeshere" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Profile Pic</InputGroupAddon>
        <Input placeholder="can we put a profile pic here?" />
      </InputGroup>
      <br />
      <InputGroup span>
        <InputGroupAddon addonType="prepend">Recipes</InputGroupAddon>
        <Input placeholder="# of recipes goes here" />
        {/* <InputGroupAddon addonType="append">Total Submissions</InputGroupAddon> */}
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">Profile Pic</InputGroupAddon>
        <Input placeholder="Can we put a profile pic here somehow?" />
      </InputGroup>
      <br />
      {/* <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Input addon type="checkbox" aria-label="Checkbox for following text input" />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Check it out" />
      </InputGroup>
      <br />
      <InputGroup>
        <Input placeholder="username" />
        <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>$</InputGroupText>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Dolla dolla billz yo!" />
        <InputGroupAddon addonType="append">
          <InputGroupText>$</InputGroupText>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input placeholder="Amount" type="number" step="1" />
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup> */}
    </div>
  );
}
    }
;

export default Formy;
