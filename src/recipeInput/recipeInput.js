import React from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Col
} from 'reactstrap';
import './recipeInput.css';
import ProcessInput from '../processInput/processInput.js'

export default class RecipeInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ingredients: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    createUI() {
        return this.state.ingredients.map((el, i) =>
            <div key={i}>
                <Form>
                    <FormGroup row>
                        <Col id="ingredient">
                            <Input type="text" value={el || ''} onChange={this.handleChange.bind(this, i)} />
                        </Col>
                        <Col id="removeButton">
                            <input type='button' value='remove' onClick={this.removeClick.bind(this, i)} />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }

    handleChange(i, event) {
        let ingredients = [...this.state.ingredients];
        ingredients[i] = event.target.value;
        this.setState({ ingredients });
    }

    addClick() {
        this.setState(prevState => ({ ingredients: [...prevState.ingredients, ''] }))
    }

    removeClick(i) {
        let ingredients = [...this.state.ingredients];
        ingredients.splice(i, 1);
        this.setState({ ingredients });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Col>
                        <Label for="ingredients">Ingredients:</Label>
                    </Col>
                    <Col>
                        <Label for="process">Process:</Label>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col id="ingredients">
                        {this.createUI()}
                        <Button type='button' onClick={this.addClick.bind(this)}>+ ingredient</Button>
                    </Col>
                    <Col id="process">
                        <div id="container">
                            <ProcessInput handleSubmit={this.handleSubmit} ingredients={this.state.ingredients} modalToggle={this.props.modalToggle} recipeTitle={this.props.recipeTitle}/>
                        </div>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}