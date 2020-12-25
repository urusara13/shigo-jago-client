import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
 
import Search from './Search'

class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {  
    }
  }

  render() {
    const { accessToken } = this.props;
    
    return(
      <Router>
        <Search
          accessToken={accessToken}/>
      </Router>  
    )
  }
}


export default Mainpage;