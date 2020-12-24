import React from "react";

import Nav from './components/Nav.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      accessToken: '',
    }
    this.logoutHandler = this.logoutHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
  
  }

  loginHandler(data) {
    this.setState({
      isLogin: true,
      accessToken: data
    })
  }

  logoutHandler() {
    this.setState({
      isLogin: false
    })
  }


  render() {
    const { isLogin, accessToken } = this.state;

    return (
        <div className="bg_image">
          <Nav 
            isLogin={isLogin} 
            loginHandler={this.loginHandler} 
            logoutHandler={this.logoutHandler}
            accessToken={accessToken} />
        </div>
    );
  };
}


export default App;
