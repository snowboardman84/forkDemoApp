import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron, Button, Col, FormGroup } from 'reactstrap';
import './recipeList.css';
import ForkButton from '../forkButton/forkButton'
import Menubuttons from '../menuButton/menuButtons';


export default class ListRecipes extends Component {
    constructor() {
        super();
        this.state = {
            recipeList: [],
        };
        this.renderRecipes = this.renderRecipes.bind(this);
    }

    componentDidMount() {
        axios.post('/listRecipes').then((result) => {
            this.setState({ recipeList: result.data });
            debugger;
            console.log(`result = ${result.data.process}`);
        })
    }

    renderRecipes() {
        return this.state.recipeList.map((value, i) => {
            return (
                <div key={i}>
                    <Jumbotron>
                        <h1 className="display">{this.state.recipeList[i].title}</h1>
                        <FormGroup className="row1" row>
                            <Col>
                                <h2 className="colHeader">Ingredients:</h2>
                            </Col>
                            <Col>
                                <h2 className="colHeader">Process:</h2>
                            </Col>
                        </FormGroup>
                        <FormGroup className="row2" row>
                            <Col className="recipe">
                                <ul className="lead">
                                    {this.state.recipeList[i].ingredients.map((value, x) => {
                                        return (
                                            <li key={x}>{this.state.recipeList[i].ingredients[x]}</li>
                                        )
                                    })}
                                </ul>
                            </Col>
                            <Col className="recipe">
                                <ol className="lead">
                                    {this.state.recipeList[i].process.map((value, y) => {
                                        return (
                                            <li key={y}>{this.state.recipeList[i].process[y]}</li>
                                        )
                                    })}
                                </ol>
                            </Col>
                        </FormGroup>
                        <ForkButton forkedRecipe={this.state.recipeList[i]} setNote={this.props.setNote} closeModal={this.props.closeModal} />
                    </Jumbotron>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderRecipes()}
            </div>
        )
    }
}