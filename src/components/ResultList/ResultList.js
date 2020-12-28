import React, { Component } from "react"; 

import List from "./List"

class ResultList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { reservation } = this.props
    return (
      <>
        <List reservation={reservation}></List>
      </>
    )
  }
}

export default ResultList;
