import React, { Component } from 'react';
import { Jumbotron, Button, Col } from 'reactstrap';

export default class RecipeCard extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Recipe Title</h1>
                    <div row>
                        <Col>
                            <p className="lead">Ingredient list:</p>
                        </Col>
                        <Col>
                            <p className="lead">Processs:</p>
                        </Col>
                    </div>
                    <Button color="primary">Fork!</Button>
                </Jumbotron>
            </div>
        );
    };      
}
