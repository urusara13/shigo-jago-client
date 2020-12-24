import React, { Component } from "react"; 

import Sitemap from "../Sitemap"
import Nav from "../Nav"
import List from "./List"


class ResultList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log('ok')
    return (
      <>
        <Nav></Nav>    
        <List></List>
        <Sitemap></Sitemap>
      </>
    )
  }


}

export default ResultList;
