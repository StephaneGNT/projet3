import React, { Component } from "react";
import { Alert } from 'reactstrap';
import "./styles.css";

class ShowAlert extends Component {
  showAlert = () => {
    Alert("Im an alert");
  }

  render() {
    return <button onClick={this.showAlert}>show alert</button>;
  }
}

export default ShowAlert;