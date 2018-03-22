import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import fork from './fork.png';
import './profile.css';

export default class Profile extends React.Component {
  render() {
    return (
      <Form className="profile">
        <FormGroup>
          <Label for="profileName">Username</Label>
          <Input type="profileName" name="profileName" id="profileName" placeholder="Username Goes Here" />
        </FormGroup>
        <FormGroup>
          <Label for="">UserPic</Label>
          <Input type="profilePic" name="profilePic" id="profilePic" placeholder="profile pic goes here??" />
        </FormGroup>
        <FormGroup>
          <Label for="">Recipes Submitted</Label>
          <Input type="submissions" name="submissions" id="submissions" placeholder="# recipes submitted??" />
        </FormGroup>
      </Form>
    );
  }
}

