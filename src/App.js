import React from "react";

import Nav from './components/Nav.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userData: null,
    }
    this.logoutHandler = this.logoutHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
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
        <div className="bg_image">
          <Nav 
            isLogin={isLogin} 
            userInfo={userInfo} 
            loginHandler={this.loginHandler} 
            logoutHandler={this.logoutHandler}/>
        </div>
    );
  };
}


export default App;
