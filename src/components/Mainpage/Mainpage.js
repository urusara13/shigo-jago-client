import React, { Component } from 'react';
import { Route } from "react-router-dom"; 

import Search from './Search'
import ResultList from '../ResultList/ResultList'


class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {  
    }
  }

  render() {
    const { isLogin } = this.props;
    
    return(
      <div>
      <Route 
        path='/resultlist'
        render={() => (
          <ResultList/>
      )}  />
      <Route 
        exact
        path='/'
        render={() => (
          <Search isLogin={isLogin}/>
      )} />
      </div>
    )
  }
}


export default Mainpage;