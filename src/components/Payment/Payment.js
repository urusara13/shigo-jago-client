import React, { Component } from "react";
import MiddlePayment from "./MiddlePayment"
import './Payment.css'

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { location, accessToken } = this.props;

    return (
      <>
        <MiddlePayment location={location} accessToken={accessToken} />
      </>
    )
  }
}

