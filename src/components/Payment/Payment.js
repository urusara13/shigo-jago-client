import React, { Component } from "react"; 
import MiddlePayment from "./MiddlePayment"

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

