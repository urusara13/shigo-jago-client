import React, { Component } from 'react';

import Search from './Search'
import Sitemap from './Sitemap'

class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return(
      <>
        <Search />
        <Sitemap />
      </>
    )
  }
}


export default Mainpage;