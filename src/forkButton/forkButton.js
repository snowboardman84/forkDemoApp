import React, { Component } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import Menubuttons from '../menuButton/menuButtons';

export default class ForkButton extends Component {
    constructor () {
        super();
        this.forkClick = this.forkClick.bind(this);
    }

    forkClick() {
        var token = localStorage.getItem('token');
        axios.post('/forkRecipe', {
            title: this.props.forkedRecipe.title, 
            ingredients: this.props.forkedRecipe.ingredients, 
            process: this.props.forkedRecipe.process, 
            token: token, 
        }).then((result) => {
            this.props.setNote(result.data.message, "success", true);        
            this.props.closeModal();
        })
    }

    render() {
        return(
            <div>
                <Button color="primary" onClick={this.forkClick}>Fork!</Button>
            </div>
        );
    };
};