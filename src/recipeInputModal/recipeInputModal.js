import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label, Input } from 'reactstrap';
import RecipeInput from '../recipeInput/recipeInput.js'
import ProcessInput from '../processInput/processInput.js'
import './recipeInputModal.css';

export default class RecipeInputModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: '',
    };

    this.toggle = this.toggle.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleTitleChange = (event) => {
    this.setState({
        title: (event.target.value)
    });
  }

  render() {
    return (
      <div>
        {/* <Button color="secondary" onClick={this.toggle}>Add New Recipe!</Button> */}
        {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}> */}
          {/* <h id="title">Add new recipe:</h> */}
          <Input type='text' placeholder='Recipe name' onChange={this.handleTitleChange}/>
          <RecipeInput modalToggle={this.toggle} recipeTitle={this.state.title} />
        {/* </Modal> */}
      </div>
    );
  }
}
