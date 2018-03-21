import React from 'react';
import { Button } from 'reactstrap';

export default class ForkMenuButton extends React.Component {

    constructor(props){
        super(props);
        this.openModal = this.openModal.bind(this);
    }

    openModal(){
        this.props.openModal(this.props.buttonLabel)
    }

    render(){
        return (
            <Button onClick={this.openModal}>{this.props.buttonLabel}</Button>
        )
    }
}