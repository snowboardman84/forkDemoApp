import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

// const { API_KEY } = process.env
// const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            closeAll: false,
            query: '',
            results: [],
            ingredients: []
        };
        this.search = this.search.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
        });
    }

    search() {
        //if (this.state.nestedModal === false) {

            axios.post('/searchRecipe', { ingredient: this.state.query }).then((result) => {
                // this.setState({
                //     results: result.data,
                //     style: {
                //         color: "red",

                //     }
                // })
            })
            
        //}
    }

    handleInputChange = (e) => {
        this.setState({
            query: e.target.value
        });
    }

    render() {
        return (
            <div>
                {/* <Button id="searchBtn" onClick={this.toggle}>Search{this.props.buttonLabel}</Button>
                <Modal id="loginModal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Search For Ingredients</ModalHeader>
                    <ModalBody> */}
                        <div id="inputFieldsSearch">
                            <input
                                value={this.state.query}
                                placeholder="Search"
                                onChange={this.handleInputChange}
                                />
                            <Button onClick={this.search}>search</Button>
                        </div>
                        {/* <Modal style={this.state.style} isOpen={this.state.nestedModal} toggle={this.search} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>{this.state.message}</ModalHeader>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggleAll}>Ok</Button>
                            </ModalFooter>
                        </Modal>

                    </ModalBody> 
                </Modal> */}

            </div>

        )
    }
}

