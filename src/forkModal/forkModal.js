import React from 'react';
import ForkButton from '../forkButton/forkButton'
import axios from 'axios';
import { Jumbotron, FormGroup, Col, Button } from 'reactstrap';
import ViewForks from './viewForks'

export default class ForkModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myForks: [],
            user: "",
            titleToEdit: "",
            ingredientsToEdit: [],
            processToEdit: [],
            renderContent: "view", 
        }

    }

    componentDidMount() {
        var token = localStorage.getItem('token');
        axios.post('/myForks', { token }).then((result) => {
            this.setState({
                myForks: result.data.recipes,
                user: result.data.user
            });
        })
    }

    render() {
        return (
            <div>
                <ViewForks myForks={this.state.myForks} user={this.state.user} />
            </div>
        )
    }
}