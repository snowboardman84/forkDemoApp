import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class EditButton extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <Button>Edit</Button>
            </div>
        )
    }
}