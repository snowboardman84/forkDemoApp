import React, { Component } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';

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
            alert(result.data.message);
            
        })
        //Wrap this in a promise? Resolve (once the new fork is created in the db) is to close the recipeList modal and open a new modal
        //with just the new fork displayed. 
        //That modal will have 2 buttons, cxl to close the modal and edit to edit the fields in the modal. Clicking edit changed edit to save, cxl stays the same.
        //Clicking save overwrites that fork in db.
    }

    render() {
        return(
            <div>
                <Button color="primary" onClick={this.forkClick}>Fork!</Button>
            </div>
        );
    };
};