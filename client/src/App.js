import React, { Component } from 'react';
import './App.css';

import Mypage from './component/Mypage'
import Mainpage from './component/Mainpage'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      userData: null,
    }

    this.logoutHandler = this.logoutHandler.bind(this);
  }

  loginHandler() {
    this.setState({
      isLogin: true
    })
  }

  logoutHandler() {
    this.setState({
      isLogin: false
    })
  }


  render() {
    const { isLogin } = this.state;
    const userInfo = {
      username: '송윤지',
      email: 'gmail.com',
      mobile: '010'
    }

    return (
      <div className="App">
        {
          isLogin ? 
          <Mypage userInfo={userInfo} logoutHandler={this.logoutHandler}></Mypage> :
          <Mainpage ></Mainpage>
          }
      </div>
    );
  } 
}

export default App;
