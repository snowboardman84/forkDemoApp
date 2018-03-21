import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label, Input } from 'reactstrap';
import RecipeList from '../recipeList/recipeList'


export default class RecipeListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>View Recipes</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <RecipeList />
        </Modal>
      </div>
    );
  }
}
