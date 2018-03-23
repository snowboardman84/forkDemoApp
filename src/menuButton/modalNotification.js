import React from 'react';
import { Alert } from 'reactstrap';
import Menubuttons from './menuButtons';


export default class ModalNotification extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className = "alert">
      <Alert color={this.props.notificationColor} isOpen={this.props.isNotificationOpen} toggle={this.props.closeAlert}>
        {this.props.notificationMessage}
      </Alert>
    </div>
    );
  }
}