import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import Menubuttons from './menuButtons';
import Search from "./search"

export default class NoButtModal extends React.Component {
    constructor(props) {
        super(props)
        this.setState = {
            isModalOpen: false,
            modalHeader: "Search Results:"
        }
        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
    }

    render() {

        let noButtModalComponent = <Search toggle={this.toggle}/>
        return (
            <div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggle}>
                    <ModalHeader>{this.state.modalHeader}</ModalHeader>
                    <ModalBody>
                        {noButtModalComponent}
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}